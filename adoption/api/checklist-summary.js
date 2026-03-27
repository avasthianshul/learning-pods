var { sql } = require("@vercel/postgres");

var TOTAL_ITEMS = 21;

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "GET only" });
  }

  try {
    var rows = await sql`
      SELECT user_email, COUNT(*)::int AS done
      FROM checklist_progress
      WHERE checked = true
      GROUP BY user_email
    `;

    var summary = {};
    for (var i = 0; i < rows.rows.length; i++) {
      var r = rows.rows[i];
      summary[r.user_email] = {
        done: r.done,
        total: TOTAL_ITEMS,
        pct: Math.round((r.done / TOTAL_ITEMS) * 100)
      };
    }

    res.status(200).json({ summary: summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
