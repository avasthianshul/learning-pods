var { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  var secret = (req.headers.authorization || "").replace("Bearer ", "");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS polls (
        id            SERIAL PRIMARY KEY,
        question      TEXT NOT NULL,
        options       JSONB NOT NULL,
        active        BOOLEAN DEFAULT true,
        created_at    TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS votes (
        id            SERIAL PRIMARY KEY,
        poll_id       INTEGER NOT NULL REFERENCES polls(id),
        user_name     TEXT NOT NULL,
        user_email    TEXT NOT NULL,
        option_index  INTEGER NOT NULL,
        voted_at      TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(poll_id, user_email)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS checklist_progress (
        id          SERIAL PRIMARY KEY,
        user_email  TEXT NOT NULL,
        user_name   TEXT NOT NULL,
        item_key    TEXT NOT NULL,
        checked     BOOLEAN NOT NULL DEFAULT true,
        checked_at  TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_email, item_key)
      )
    `;

    res.status(200).json({ ok: true, message: "Tables created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
