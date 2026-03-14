import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { rows } = await sql`
      SELECT id, question, options, sort_order
      FROM quiz_questions
      ORDER BY sort_order ASC
    `;
    return res.status(200).json({ questions: rows });
  } catch (error) {
    console.error('Failed to fetch quiz:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
