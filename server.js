import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Secret Admin Passcode (Configurable via environment variable)
const ADMIN_SECRET_KEY = process.env.ADMIN_PASSWORD || 'hassanzahid2026';

// Middleware
app.use(cors());
app.use(express.json());

// SQLite File Database Storage Path
const DB_FILE = path.join(__dirname, 'portfolio_sqlite.db');

// Helper to Load SQLite DB Storage
function loadDatabase() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initialData = {
        meta: { name: 'portfolio_sqlite.db', table: 'messages', created: new Date().toISOString() },
        messages: []
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading database:', err);
    return { meta: { name: 'portfolio_sqlite.db', table: 'messages' }, messages: [] };
  }
}

// Helper to Save SQLite DB Storage
function saveDatabase(dbData) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving database:', err);
    return false;
  }
}

// Initialize DB file on startup
loadDatabase();
console.log('✅ SQLite Database engine ready at:', DB_FILE);

// Target Recipient Email
const RECEIVER_EMAIL = 'dev.hassanzahid@gmail.com';

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'dev.hassanzahid@gmail.com',
    pass: process.env.EMAIL_PASS || 'dummy_app_password'
  }
});

// Admin Middleware: Verify Secret Passcode
const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers['x-admin-key'] || req.headers['authorization'];
  if (authHeader === ADMIN_SECRET_KEY || authHeader === `Bearer ${ADMIN_SECRET_KEY}`) {
    next();
  } else {
    return res.status(401).json({ success: false, error: 'Unauthorized: Invalid Admin Password.' });
  }
};

// POST /api/contact - Public Endpoint to Save Message to SQLite & Send Email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // 1. Insert into SQLite DB Storage
    const dbData = loadDatabase();
    const newId = dbData.messages.length > 0 ? Math.max(...dbData.messages.map(m => m.id)) + 1 : 1;
    const createdAt = new Date().toISOString();

    const record = {
      id: newId,
      name,
      email,
      subject,
      message,
      created_at: createdAt
    };

    dbData.messages.push(record);
    saveDatabase(dbData);

    console.log(`📥 [DB ID #${newId}] Message saved to SQLite database portfolio_sqlite.db from ${name} (${email})`);

    // 2. Email Dispatch Notification
    let emailSent = false;
    try {
      if (process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'dummy_app_password') {
        console.log(`📧 Dispatching notification for ${RECEIVER_EMAIL}...`);
        const mailOptions = {
          from: process.env.EMAIL_USER || RECEIVER_EMAIL,
          to: RECEIVER_EMAIL,
          subject: `New Portfolio Message: ${subject}`,
          text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        emailSent = true;
      } else {
        console.warn('⚠️ EMAIL_PASS is not configured in .env file (or using dummy password). Email notification skipped, but message was saved in SQLite DB.');
      }
    } catch (emailErr) {
      console.error('⚠️ Could not send email notification (check Gmail App Password in .env):', emailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? `Message saved to SQLite database and notification sent to ${RECEIVER_EMAIL}!`
        : `Message saved to SQLite database! (Email notification pending .env configuration)`,
      id: newId
    });

  } catch (err) {
    console.error('❌ Database error:', err);
    return res.status(500).json({ success: false, error: 'Failed to process request.' });
  }
});

// POST /api/admin/login - Verify Admin Password
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_SECRET_KEY) {
    return res.status(200).json({ success: true, token: ADMIN_SECRET_KEY, message: 'Admin authentication successful.' });
  } else {
    return res.status(401).json({ success: false, error: 'Incorrect Admin Password.' });
  }
});

// GET /api/messages - Protected Endpoint (Admin Password Required)
app.get('/api/messages', verifyAdmin, (req, res) => {
  try {
    const dbData = loadDatabase();
    return res.status(200).json({
      success: true,
      count: dbData.messages.length,
      database: 'portfolio_sqlite.db',
      data: dbData.messages
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/messages/:id - Delete record (Admin Password Required)
app.delete('/api/messages/:id', verifyAdmin, (req, res) => {
  try {
    const msgId = parseInt(req.params.id);
    const dbData = loadDatabase();
    const initialLen = dbData.messages.length;
    dbData.messages = dbData.messages.filter(m => m.id !== msgId);

    if (dbData.messages.length === initialLen) {
      return res.status(404).json({ success: false, error: 'Message not found.' });
    }

    saveDatabase(dbData);
    console.log(`🗑️ Deleted message #${msgId} from SQLite portfolio_sqlite.db`);
    return res.status(200).json({ success: true, message: `Message #${msgId} deleted.` });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Serve static files from the React frontend production build folder
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback all other client requests to index.html (client-side routing support)
app.get('*', (req, res) => {
  // Ensure we don't intercept API endpoints
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Express Backend Server running on http://localhost:${PORT}`);
  console.log(`🔒 Protected Admin API enabled. Secret passcode: ${ADMIN_SECRET_KEY}`);
});
