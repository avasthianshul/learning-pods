module.exports = async function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_ADMIN_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_ADMIN_API_KEY environment variable not set" });
  }

  const headers = { "x-api-key": apiKey, "anthropic-version": "2023-06-01" };
  const today = new Date().toISOString().split("T")[0];
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

  try {
    const [orgUsers, dailyRecords, weeklyRecords] = await Promise.all([
      fetchUsersPages("https://api.anthropic.com/v1/organizations/users", headers),
      fetchAllPages(
        `https://api.anthropic.com/v1/organizations/usage_report/claude_code?starting_at=${today}`,
        headers
      ),
      fetchAllPages(
        `https://api.anthropic.com/v1/organizations/usage_report/claude_code?starting_at=${weekAgo}`,
        headers
      ),
    ]);

    // Seed map with all org users so non-active members show as zero
    const userMap = {};
    for (const u of orgUsers) {
      userMap[u.email] = {
        email: u.email,
        name: u.name || u.email,
        role: u.role || "member",
        daily: { cost: 0, inputTokens: 0, outputTokens: 0, sessions: 0 },
        weekly: { cost: 0, inputTokens: 0, outputTokens: 0, sessions: 0 },
      };
    }

    // Aggregate weekly records
    for (const rec of weeklyRecords) {
      const email = (rec.actor && rec.actor.email_address) || "unknown";
      if (!userMap[email]) {
        userMap[email] = makeEmptyUser(email);
      }
      const m = extractMetrics(rec);
      const u = userMap[email];
      u.weekly.cost += m.cost;
      u.weekly.inputTokens += m.inputTokens;
      u.weekly.outputTokens += m.outputTokens;
      u.weekly.sessions += (rec.core_metrics && rec.core_metrics.num_sessions) || 0;
    }

    // Aggregate daily records
    for (const rec of dailyRecords) {
      const email = (rec.actor && rec.actor.email_address) || "unknown";
      if (!userMap[email]) {
        userMap[email] = makeEmptyUser(email);
      }
      const m = extractMetrics(rec);
      const u = userMap[email];
      u.daily.cost += m.cost;
      u.daily.inputTokens += m.inputTokens;
      u.daily.outputTokens += m.outputTokens;
      u.daily.sessions += (rec.core_metrics && rec.core_metrics.num_sessions) || 0;
    }

    res.status(200).json({
      users: Object.values(userMap),
      period: { daily: today, weeklyStart: weekAgo, weeklyEnd: today },
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function makeEmptyUser(email) {
  return {
    email,
    name: email,
    role: "unknown",
    daily: { cost: 0, inputTokens: 0, outputTokens: 0, sessions: 0 },
    weekly: { cost: 0, inputTokens: 0, outputTokens: 0, sessions: 0 },
  };
}

async function fetchUsersPages(baseUrl, headers) {
  let all = [];
  let afterId = null;
  while (true) {
    const url = afterId
      ? `${baseUrl}?after_id=${afterId}&limit=100`
      : `${baseUrl}?limit=100`;
    const resp = await fetch(url, { headers });
    if (!resp.ok) throw new Error(`API ${resp.status}: ${await resp.text()}`);
    const body = await resp.json();
    all = all.concat(body.data || []);
    if (body.has_more && body.last_id) {
      afterId = body.last_id;
    } else {
      break;
    }
  }
  return all;
}

async function fetchAllPages(baseUrl, headers) {
  let all = [];
  let url = baseUrl;
  while (url) {
    const resp = await fetch(url, { headers });
    if (!resp.ok) throw new Error(`API ${resp.status}: ${await resp.text()}`);
    const body = await resp.json();
    all = all.concat(body.data || []);
    url =
      body.has_more && body.next_page
        ? `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}page=${body.next_page}`
        : null;
  }
  return all;
}

function extractMetrics(record) {
  let cost = 0,
    inputTokens = 0,
    outputTokens = 0;
  for (const m of record.model_breakdown || []) {
    // estimated_cost.amount is in cents — convert to dollars
    const cents = (m.estimated_cost && m.estimated_cost.amount) || 0;
    cost += cents / 100;
    const t = m.tokens || {};
    inputTokens += (t.input || 0) + (t.cache_read || 0) + (t.cache_creation || 0);
    outputTokens += t.output || 0;
  }
  return { cost, inputTokens, outputTokens };
}
