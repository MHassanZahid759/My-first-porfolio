const ADMIN_SECRET_KEY = process.env.ADMIN_PASSWORD || 'hassanzahid2026';

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

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { password } = req.body;
  if (password === ADMIN_SECRET_KEY) {
    return res.status(200).json({ success: true, token: ADMIN_SECRET_KEY, message: 'Admin authentication successful.' });
  } else {
    return res.status(401).json({ success: false, error: 'Incorrect Admin Password.' });
  }
}
