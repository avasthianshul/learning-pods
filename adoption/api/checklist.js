var { sql } = require("@vercel/postgres");

var VALID_KEYS = [
  "warp_installed", "claude_installed", "github_account",
  "terminal_basics", "projects_folder", "first_app",
  "github_ssh", "cloned_repo", "pushed_to_github",
  "slack_connected", "gdrive_connected", "zoho_connected", "vercel_connected",
  "slack_used", "gdrive_used", "zoho_used", "github_used",
  "deployed_vercel", "created_skill", "shipped_skill"
];

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return getChecklist(req, res);
  }
  if (req.method === "POST") {
    return toggleItem(req, res);
  }
  return res.status(405).json({ error: "GET or POST only" });
};

async function getChecklist(req, res) {
  var userEmail = req.query.user || "";
  if (!userEmail) {
    return res.status(400).json({ error: "Requires user query parameter" });
  }

  try {
    var rows = await sql`
      SELECT item_key FROM checklist_progress
      WHERE user_email = ${userEmail} AND checked = true
    `;

    var items = [];
    for (var i = 0; i < rows.rows.length; i++) {
      items.push(rows.rows[i].item_key);
    }

    res.status(200).json({ items: items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function toggleItem(req, res) {
  var body = req.body;
  if (!body || !body.userEmail || !body.userName || !body.itemKey || body.checked == null) {
    return res.status(400).json({ error: "Requires userEmail, userName, itemKey, checked" });
  }

  if (VALID_KEYS.indexOf(body.itemKey) === -1) {
    return res.status(400).json({ error: "Invalid item key" });
  }

  try {
    await sql`
      INSERT INTO checklist_progress (user_email, user_name, item_key, checked, checked_at)
      VALUES (${body.userEmail}, ${body.userName}, ${body.itemKey}, ${body.checked}, NOW())
      ON CONFLICT (user_email, item_key)
      DO UPDATE SET checked = ${body.checked}, user_name = ${body.userName}, checked_at = NOW()
    `;

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
