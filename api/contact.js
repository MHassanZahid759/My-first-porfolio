import nodemailer from 'nodemailer';
import { addMessage } from './_messages.js';

const RECEIVER_EMAIL = 'dev.hassanzahid@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'dev.hassanzahid@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const record = addMessage({ name, email, subject, message });

    const emailUser = process.env.EMAIL_USER || RECEIVER_EMAIL;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass || emailPass === 'dummy_app_password') {
      console.warn('⚠️ EMAIL_PASS environment variable is not configured on Vercel.');
      return res.status(200).json({
        success: true,
        message: 'Message saved! (Note: EMAIL_PASS not set on Vercel, email notification skipped)',
        id: record.id
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: emailUser,
      to: RECEIVER_EMAIL,
      subject: `New Portfolio Message: ${subject}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully via Vercel Function!');

    return res.status(200).json({
      success: true,
      message: `Notification email sent to ${RECEIVER_EMAIL}!`,
      id: record.id
    });

  } catch (err) {
    console.error('❌ Serverless Function Error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to process request.' });
  }
}
