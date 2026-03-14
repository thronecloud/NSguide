import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const secret = process.env.VITE_ADMIN_SECRET;

  if (!secret || token !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { questions } = req.body;
    if (!Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid payload: questions array required' });
    }

    for (const q of questions) {
      await sql`
        UPDATE quiz_questions
        SET options = ${JSON.stringify(q.options)}::jsonb
        WHERE id = ${q.id}
      `;
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to update quiz:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
