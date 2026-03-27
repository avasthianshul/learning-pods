var { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return getPolls(req, res);
  }
  if (req.method === "POST") {
    return createPoll(req, res);
  }
  return res.status(405).json({ error: "GET or POST only" });
};

async function getPolls(req, res) {
  var userEmail = req.query.user || "";

  try {
    var pollRows = await sql`
      SELECT id, question, options, created_at
      FROM polls WHERE active = true ORDER BY created_at DESC
    `;

    var polls = [];
    for (var i = 0; i < pollRows.rows.length; i++) {
      var p = pollRows.rows[i];
      var opts = typeof p.options === "string" ? JSON.parse(p.options) : p.options;

      var voteCounts = await sql`
        SELECT option_index, COUNT(*)::int as count
        FROM votes WHERE poll_id = ${p.id}
        GROUP BY option_index
      `;

      var results = new Array(opts.length).fill(0);
      var totalVotes = 0;
      for (var j = 0; j < voteCounts.rows.length; j++) {
        var vc = voteCounts.rows[j];
        if (vc.option_index >= 0 && vc.option_index < opts.length) {
          results[vc.option_index] = vc.count;
          totalVotes += vc.count;
        }
      }

      var myVote = null;
      if (userEmail) {
        var userVote = await sql`
          SELECT option_index FROM votes
          WHERE poll_id = ${p.id} AND user_email = ${userEmail}
          LIMIT 1
        `;
        if (userVote.rows.length > 0) {
          myVote = userVote.rows[0].option_index;
        }
      }

      polls.push({
        id: p.id,
        question: p.question,
        options: opts,
        results: results,
        totalVotes: totalVotes,
        myVote: myVote
      });
    }

    res.status(200).json({ polls: polls });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createPoll(req, res) {
  var secret = (req.headers.authorization || "").replace("Bearer ", "");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  var body = req.body;
  if (!body || !body.question || !body.options || !Array.isArray(body.options)) {
    return res.status(400).json({ error: "Requires question and options array" });
  }

  try {
    var result = await sql`
      INSERT INTO polls (question, options)
      VALUES (${body.question}, ${JSON.stringify(body.options)})
      RETURNING id
    `;
    res.status(201).json({ ok: true, pollId: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
