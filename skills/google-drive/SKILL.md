---
name: google-drive
description: Interact with Google Drive — list files, search files, read file metadata, and download file content. Use when the user wants to find, read, or manage files in their Google Drive.
allowed-tools: Bash(curl *), Bash(cat *)
argument-hint: [action] [filename/query]
---

# Google Drive Integration

Interact with the user's Google Drive using the Google Drive API v3.

## Authentication

Credentials are stored at `$HOME/oren-auth/gdrive-token.json` containing:
- `access_token` — short-lived OAuth2 access token
- `refresh_token` — long-lived token used to get new access tokens
- `client_id` — OAuth2 client ID
- `client_secret` — OAuth2 client secret

### Token Refresh (do this FIRST before every session)

Google access tokens expire after 1 hour. Always refresh the token before making API calls to avoid failures mid-session.

**Step 1: Read current credentials**
```bash
cat $HOME/oren-auth/gdrive-token.json
```

**Step 2: Refresh the access token**
```bash
curl -s -X POST "https://oauth2.googleapis.com/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=CLIENT_ID&client_secret=CLIENT_SECRET&refresh_token=REFRESH_TOKEN&grant_type=refresh_token"
```

**Step 3: Update the token file**
If the refresh response contains a new `access_token`, update `$HOME/oren-auth/gdrive-token.json` with the new access token. Keep all other fields (refresh_token, client_id, client_secret) unchanged. Write the updated JSON back to the file.

**Step 4: Export for use**
```bash
export GDRIVE_TOKEN="the-new-access-token"
```

Every curl command must include:
```
-H "Authorization: Bearer $GDRIVE_TOKEN"
```

## Available Actions

Determine the action from `$ARGUMENTS`. Common patterns:

- `/google-drive list` — list recent files
- `/google-drive search quarterly report` — search files by name
- `/google-drive read FILE_ID` — read file metadata and content
- `/google-drive download FILE_ID` — download a file

## API Reference

### List recent files
```bash
curl -s -H "Authorization: Bearer $GDRIVE_TOKEN" \
  "https://www.googleapis.com/drive/v3/files?pageSize=20&orderBy=modifiedTime%20desc&fields=files(id,name,mimeType,modifiedTime,size,webViewLink)"
```

### Search files by name or query
```bash
curl -s -H "Authorization: Bearer $GDRIVE_TOKEN" \
  "https://www.googleapis.com/drive/v3/files?q=name%20contains%20'SEARCH_TERM'&pageSize=20&fields=files(id,name,mimeType,modifiedTime,size,webViewLink)"
```

Other useful query patterns:
- Full-text search: `q=fullText%20contains%20'keyword'`
- By MIME type: `q=mimeType%3D'application/vnd.google-apps.spreadsheet'`
- In a specific folder: `q='FOLDER_ID'%20in%20parents`
- Combine with `and`: `q=name%20contains%20'report'%20and%20mimeType%3D'application/pdf'`

### Get file metadata
```bash
curl -s -H "Authorization: Bearer $GDRIVE_TOKEN" \
  "https://www.googleapis.com/drive/v3/files/FILE_ID?fields=id,name,mimeType,modifiedTime,size,webViewLink,parents"
```

### Download a file (binary content)
```bash
curl -s -H "Authorization: Bearer $GDRIVE_TOKEN" \
  "https://www.googleapis.com/drive/v3/files/FILE_ID?alt=media" \
  -o /tmp/downloaded_file
```

### Export a Google Workspace file (Docs, Sheets, Slides)
Google Workspace files cannot be downloaded directly — they must be exported:
```bash
curl -s -H "Authorization: Bearer $GDRIVE_TOKEN" \
  "https://www.googleapis.com/drive/v3/files/FILE_ID/export?mimeType=text/plain" \
  -o /tmp/exported_file.txt
```

Common export MIME types:
- Google Docs: `text/plain`, `application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- Google Sheets: `text/csv`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Google Slides: `application/pdf`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`

## Important Rules

1. **Always refresh token first** — before any API call in a new session, run the token refresh flow. If the refresh itself fails with `invalid_grant`, tell the user their refresh token has expired and they need to re-authorize.
2. **Parse responses** — check for `"error"` in the JSON response. Report the error message and status code to the user.
3. **Handle 401 Unauthorized** — if any API call returns 401, the access token has expired. Refresh it and retry the call once.
4. **File ID resolution** — users will refer to files by name. Use the search API to find the file ID, then use that ID for subsequent operations.
5. **Format results nicely** — when listing files, show name, type, last modified date, and a link.
6. **Large files** — for files larger than 10MB, warn the user before downloading.
7. **Auth file missing** — if `$HOME/oren-auth/gdrive-token.json` does not exist, tell the user to create it with the required fields: `access_token`, `refresh_token`, `client_id`, `client_secret`.
