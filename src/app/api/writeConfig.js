// api/writeConfig.js

export default async function (req, res) {
    if (req.method === 'POST') {
      const { key, value } = req.body;
  
      if (key && value) {
        // Write to Vercel Edge Config Store
        res.status(200).json({ message: 'Write successful!' });
      } else {
        res.status(400).json({ message: 'Invalid request. Key and value are required.' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  