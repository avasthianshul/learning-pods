var { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  var body = req.body;
  if (!body || !body.pollId || !body.userName || !body.userEmail || body.optionIndex == null) {
    return res.status(400).json({ error: "Requires pollId, userName, userEmail, optionIndex" });
  }

  var pollId = parseInt(body.pollId, 10);
  var optionIndex = parseInt(body.optionIndex, 10);

  try {
    var poll = await sql`SELECT options FROM polls WHERE id = ${pollId} AND active = true`;
    if (poll.rows.length === 0) {
      return res.status(404).json({ error: "Poll not found" });
    }

    var opts = typeof poll.rows[0].options === "string"
      ? JSON.parse(poll.rows[0].options)
      : poll.rows[0].options;

    if (optionIndex < 0 || optionIndex >= opts.length) {
      return res.status(400).json({ error: "Invalid option index" });
    }

    await sql`
      INSERT INTO votes (poll_id, user_name, user_email, option_index)
      VALUES (${pollId}, ${body.userName}, ${body.userEmail}, ${optionIndex})
      ON CONFLICT (poll_id, user_email)
      DO UPDATE SET option_index = ${optionIndex}, user_name = ${body.userName}, voted_at = NOW()
    `;

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
