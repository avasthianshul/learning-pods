---
name: slack
description: Interact with Slack — send messages, read channels, list channels, and search messages. Use when the user wants to post to Slack, check Slack messages, or interact with their Slack workspace.
allowed-tools: Bash(curl *)
argument-hint: [action] [channel/user] [message]
---

# Slack Integration

Interact with the user's Slack workspace using the Slack Web API.

## Authentication

Before making any API call, load the token from the auth file:
```bash
export SLACK_BOT_TOKEN=$(grep SLACK_BOT_TOKEN $HOME/oren-auth/slack.env | cut -d= -f2)
```

Every curl command must include:
```
-H "Authorization: Bearer $SLACK_BOT_TOKEN"
```

## Available Actions

Determine the action from `$ARGUMENTS`. Common patterns:

- `/slack send #channel-name Hello world` — post a message
- `/slack read #channel-name` — read recent messages from a channel
- `/slack channels` — list channels
- `/slack search keyword` — search messages across the workspace
- `/slack users` — list users
- `/slack dm @username Hey there` — send a direct message

## API Reference

### List channels
```bash
curl -s -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  "https://slack.com/api/conversations.list?types=public_channel,private_channel&limit=200"
```

### Get channel history (read messages)
First resolve the channel name to an ID from `conversations.list`, then:
```bash
curl -s -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  "https://slack.com/api/conversations.history?channel=CHANNEL_ID&limit=20"
```

### Send a message
```bash
curl -s -X POST -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"channel":"CHANNEL_ID","text":"Your message here"}' \
  "https://slack.com/api/chat.postMessage"
```

### Search messages
```bash
curl -s -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  "https://slack.com/api/search.messages?query=SEARCH_QUERY&count=20"
```
Note: The search API requires a user token (xoxp-*), not a bot token. If the token is a bot token and search fails, inform the user that search requires a user-scoped token.

### List users
```bash
curl -s -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  "https://slack.com/api/users.list?limit=200"
```

### Look up a user by name
Use `users.list` and filter by `display_name` or `real_name`.

### Send a DM
First open a DM channel:
```bash
curl -s -X POST -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"users":"USER_ID"}' \
  "https://slack.com/api/conversations.open"
```
Then use `chat.postMessage` with the returned channel ID.

## Important Rules

1. **Always confirm before sending** — before posting any message or DM, show the user the exact channel/user and message content, and ask for confirmation.
2. **Parse responses** — Slack API returns JSON. Check the `"ok"` field. If `false`, report the `"error"` field to the user.
3. **Channel name resolution** — users will say `#general` but the API needs a channel ID (like `C01ABCDEF`). Always resolve names to IDs first.
4. **User resolution** — users will say `@username` but the API needs a user ID (like `U01ABCDEF`). Resolve via `users.list`.
5. **Format messages nicely** — when reading messages, show timestamp, username, and message text in a readable format.
6. **Rate limiting** — if you get a `429` response, wait and retry.
7. **Auth file missing** — if `$HOME/oren-auth/slack.env` does not exist, tell the user to create it with a `SLACK_BOT_TOKEN=xoxb-...` line.
