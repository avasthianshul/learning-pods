---
name: zoho-bigin
description: Interact with Zoho Bigin CRM — list and search deals/contacts, create/update notes, and manage pipeline stages. Use when the user wants to view, search, or update CRM data in Zoho Bigin.
allowed-tools: Bash(curl *), Bash(cat *)
argument-hint: [action] [resource] [query/data]
---

# Zoho Bigin CRM Integration

Interact with the user's Zoho Bigin CRM using the Zoho Bigin API v2.

## Authentication

Credentials are stored at `$HOME/oren-auth/zoho.json` containing:
- `client_id` — OAuth2 client ID
- `client_secret` — OAuth2 client secret
- `access_token` — short-lived OAuth2 access token (expires every hour)
- `refresh_token` — long-lived token used to get new access tokens
- `base_url` — API base URL (e.g., `https://www.zohoapis.in`)
- `accounts_url` — OAuth accounts URL (e.g., `https://accounts.zoho.in`)

### Token Refresh (do this FIRST before every session)

Zoho access tokens expire every hour. Always refresh before making API calls.

**Step 1: Read current credentials**
```bash
cat $HOME/oren-auth/zoho.json
```

**Step 2: Refresh the access token**
```bash
curl -s -X POST "ACCOUNTS_URL/oauth/v2/token" \
  -d "refresh_token=REFRESH_TOKEN&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=refresh_token"
```
Replace `ACCOUNTS_URL`, `REFRESH_TOKEN`, `CLIENT_ID`, and `CLIENT_SECRET` with values from the credentials file.

**Step 3: Update the token file**
If the refresh response contains a new `access_token`, update `$HOME/oren-auth/zoho.json` with the new access token. Keep all other fields unchanged. Write the updated JSON back to the file.

**Step 4: Export for use**
```bash
export ZOHO_TOKEN="the-new-access-token"
export ZOHO_BASE="the-base-url-from-json"
```

Every curl command must include:
```
-H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN"
```

## Available Actions

Determine the action from `$ARGUMENTS`. Common patterns:

- `/zoho-bigin deals` — list recent deals
- `/zoho-bigin contacts` — list recent contacts
- `/zoho-bigin search deals keyword` — search deals
- `/zoho-bigin search contacts keyword` — search contacts
- `/zoho-bigin note DEAL_ID This is a note` — add a note to a deal
- `/zoho-bigin stage DEAL_ID New Stage Name` — update a deal's pipeline stage

## API Reference

All API endpoints use `$ZOHO_BASE/bigin/v2` as the base path.

### List deals
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Deals?fields=Deal_Name,Stage,Amount,Contact_Name,Closing_Date,Pipeline&per_page=50&sort_by=Modified_Time&sort_order=desc"
```

### List contacts
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Contacts?fields=Full_Name,Email,Phone,Company_Name,Modified_Time&per_page=50&sort_by=Modified_Time&sort_order=desc"
```

### Search deals
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Deals/search?criteria=(Deal_Name:starts_with:SEARCH_TERM)"
```
Other criteria operators: `equals`, `contains`, `starts_with`. Combine with `and`/`or`:
- `(Deal_Name:contains:keyword)and(Stage:equals:Qualification)`

### Search contacts
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Contacts/search?criteria=(Full_Name:contains:SEARCH_TERM)"
```
You can also search by email: `(Email:equals:user@example.com)`

### Get a single deal
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Deals/DEAL_ID"
```

### Get a single contact
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/Contacts/CONTACT_ID"
```

### Create a note on a deal
```bash
curl -s -X POST -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data":[{"Note_Title":"Title","Note_Content":"Content here","$se_module":"Deals","Parent_Id":"DEAL_ID"}]}' \
  "$ZOHO_BASE/bigin/v2/Notes"
```

### Create a note on a contact
```bash
curl -s -X POST -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data":[{"Note_Title":"Title","Note_Content":"Content here","$se_module":"Contacts","Parent_Id":"CONTACT_ID"}]}' \
  "$ZOHO_BASE/bigin/v2/Notes"
```

### Update a note
```bash
curl -s -X PUT -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data":[{"Note_Title":"Updated Title","Note_Content":"Updated content"}]}' \
  "$ZOHO_BASE/bigin/v2/Notes/NOTE_ID"
```

### Update a deal's pipeline stage
```bash
curl -s -X PUT -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data":[{"Stage":"NEW_STAGE_NAME"}]}' \
  "$ZOHO_BASE/bigin/v2/Deals/DEAL_ID"
```

### List pipelines (to see available stages)
```bash
curl -s -H "Authorization: Zoho-oauthtoken $ZOHO_TOKEN" \
  "$ZOHO_BASE/bigin/v2/settings/pipeline?module=Deals"
```

## Important Rules

1. **Always refresh token first** — before any API call in a new session, run the token refresh flow. Zoho tokens expire every hour.
2. **Handle INVALID_TOKEN** — if any API call returns `INVALID_TOKEN` or `AUTHENTICATION_FAILURE`, refresh the token and retry the call once.
3. **Parse responses** — Zoho API returns JSON with a `data` array for successful responses and a `code`/`message` for errors. Check the `status` field in each record of the response.
4. **Confirm before writes** — before creating notes, updating stages, or any write operation, show the user what will be changed and ask for confirmation.
5. **Deal/Contact resolution** — users will refer to deals or contacts by name. Use the search API to find the record ID, then use that ID for subsequent operations.
6. **Format results nicely** — when listing deals, show deal name, stage, amount, contact, and closing date. For contacts, show name, email, phone, and company.
7. **Rate limiting** — Zoho Bigin has API rate limits. If you get a `TOO_MANY_REQUESTS` error, wait a few seconds and retry.
8. **Auth file missing** — if `$HOME/oren-auth/zoho.json` does not exist, tell the user to create it with the required fields: `client_id`, `client_secret`, `access_token`, `refresh_token`, `base_url`, `accounts_url`.
9. **Indian data center** — the default config uses `.zohoapis.in` and `accounts.zoho.in` (Indian data center). Always read the URLs from the config file; never hardcode them.
