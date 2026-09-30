import { deleteMessage } from '../_messages.js';

export default function handler(req, res) {
  // CORS Headers
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

  const authHeader = req.headers['x-admin-key'] || req.headers.authorization;
  const adminPassword = process.env.ADMIN_PASSWORD || 'hassanzahid2026';
  if (authHeader !== adminPassword && authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Invalid Admin Password.' });
  }

  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    if (!Number.isInteger(id) || !deleteMessage(id)) {
      return res.status(404).json({ success: false, error: 'Message not found.' });
    }
    return res.status(200).json({ success: true, message: `Message #${id} deleted.` });
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
