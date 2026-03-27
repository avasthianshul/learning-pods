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
      fetchAllPages("https://api.anthropic.com/v1/organizations/users", headers),
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
      const email = rec.user_email || rec.email || "unknown";
      if (!userMap[email]) {
        userMap[email] = makeEmptyUser(email);
      }
      const m = extractMetrics(rec);
      const u = userMap[email];
      u.weekly.cost += m.cost;
      u.weekly.inputTokens += m.inputTokens;
      u.weekly.outputTokens += m.outputTokens;
      u.weekly.sessions += rec.num_sessions || 0;
    }

    // Aggregate daily records
    for (const rec of dailyRecords) {
      const email = rec.user_email || rec.email || "unknown";
      if (!userMap[email]) {
        userMap[email] = makeEmptyUser(email);
      }
      const m = extractMetrics(rec);
      const u = userMap[email];
      u.daily.cost += m.cost;
      u.daily.inputTokens += m.inputTokens;
      u.daily.outputTokens += m.outputTokens;
      u.daily.sessions += rec.num_sessions || 0;
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
    cost += m.estimated_cost_usd || 0;
    inputTokens +=
      (m.input_tokens || 0) +
      (m.cache_read_tokens || 0) +
      (m.cache_creation_tokens || 0);
    outputTokens += m.output_tokens || 0;
  }
  return { cost, inputTokens, outputTokens };
}
