var { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return getLectures(req, res);
  }
  if (req.method === "POST") {
    return toggleLecture(req, res);
  }
  return res.status(405).json({ error: "GET or POST only" });
};

async function getLectures(req, res) {
  try {
    var rows = await sql`
      SELECT slug, title, sort_order, unlocked
      FROM lectures
      ORDER BY sort_order ASC
    `;
    res.status(200).json({ lectures: rows.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function toggleLecture(req, res) {
  var secret = (req.headers.authorization || "").replace("Bearer ", "");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  var body = req.body;
  if (!body || !body.slug || body.unlocked == null) {
    return res.status(400).json({ error: "Requires slug and unlocked" });
  }

  try {
    await sql`
      UPDATE lectures SET unlocked = ${body.unlocked}
      WHERE slug = ${body.slug}
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
