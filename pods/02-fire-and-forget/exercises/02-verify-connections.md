# Exercise 2: Verify All Connections

**Time:** 5 minutes

## What This Does

The verify script tests each tool connection by making a small, harmless request — like knocking on each door to make sure your key works. It doesn't change anything; it just checks.

## Steps

### Step 1: Run the Verify Script

Navigate to the learning_pods folder (if you're not already there):

```
cd ~/claude_projects/learning_pods
```

Run the verify script:

**On Mac / Linux:**
```
python3 setup/verify.py
```

**On Windows:**
```
python setup/verify.py
```

### Step 2: Read the Output

You should see something like this:

```
============================================
  Oren Tool Connection Verification
============================================

Claude Code .... [PASS]
GitHub ......... [PASS]
Vercel ......... [PASS]
Slack .......... [PASS]
Google Drive ... [PASS]
Zoho Bigin ..... [PASS]

============================================
  Result: 6/6 connections verified
============================================
```

**All green = you're done.** Move on to Exercise 3.

**Any red X = keep reading below.**

### Step 3: Troubleshoot Any Failures

If any service shows `[FAIL]`, the script will print a specific error message below it. Find your failed service below for the fix.

---

## Troubleshooting Guide

### Claude Code — [FAIL]

**What it checks:** Can Claude Code start up and respond to a basic prompt?

**Common fixes:**
- Make sure Claude Code is installed: type `claude --version` in your terminal
- If it says "command not found", reinstall: `npm install -g @anthropic-ai/claude-code`
- Make sure your Anthropic API key is set (your facilitator can help)
- Try restarting your terminal and running verify again

---

### GitHub — [FAIL]

**What it checks:** Can we authenticate with GitHub using your saved token?

**Common fixes:**
1. Check that the token file exists:
   ```
   ls ~/oren-auth/github*
   ```
2. If the file is missing, re-run the setup script (just the GitHub part)
3. If the file exists but the token is invalid:
   - Go to https://github.com/settings/tokens
   - Check if your token is still active (not expired or revoked)
   - If expired, generate a new one and save it:
     - Copy the new token
     - Ask your facilitator to help you update `~/oren-auth/`
4. Make sure the token has the right permissions: `repo`, `workflow`, `read:org`

---

### Vercel — [FAIL]

**What it checks:** Can we authenticate with Vercel using your saved token?

**Common fixes:**
1. Check that the token file exists:
   ```
   ls ~/oren-auth/vercel*
   ```
2. If missing, go to https://vercel.com/account/tokens and create a new token
3. If the token exists but doesn't work:
   - Tokens sometimes expire. Create a new one on the Vercel dashboard.
   - Make sure you selected the right scope (your personal account, not a team)
4. Save the new token to `~/oren-auth/` (ask your facilitator for the exact filename)

---

### Slack — [FAIL]

**What it checks:** Can we connect to the Oren Slack workspace and read a channel?

**Common fixes:**
1. Check that the token file exists:
   ```
   ls ~/oren-auth/slack*
   ```
2. If missing, ask your facilitator for the Slack bot token
3. If the token exists but doesn't work:
   - The bot may have been removed from the workspace. Ask your facilitator.
   - The token may have been rotated. Get the latest one from your facilitator.
4. Make sure the bot has been added to at least one channel (e.g., #learning-pods)

---

### Google Drive — [FAIL]

**What it checks:** Can we connect to Google Drive and list your files?

**Common fixes:**
1. Check that the credentials file exists:
   ```
   ls ~/oren-auth/google*
   ```
2. If missing, you need to re-run the Google OAuth flow:
   - Ask your facilitator to walk you through it again
   - You'll sign in with your Google account and approve access
3. If the credentials exist but don't work:
   - Your OAuth token may have expired. Re-run the auth flow.
   - Make sure you approved access for Google Drive (not just Gmail)
4. If you see "quota exceeded": wait 5 minutes and try again

---

### Zoho Bigin — [FAIL]

**What it checks:** Can we connect to Zoho Bigin and list deals?

**Common fixes:**
1. Check that the credentials file exists:
   ```
   ls ~/oren-auth/zoho*
   ```
2. If missing, ask your facilitator for the Bigin API credentials
3. If the credentials exist but don't work:
   - Zoho refresh tokens can expire. Ask your facilitator for a new one.
   - Make sure all three values are present: Client ID, Client Secret, Refresh Token
4. If you see "invalid_grant": the refresh token has expired. Get a new one from your facilitator.

---

## Still Stuck?

If you've tried the steps above and a connection still fails:

1. **Take a screenshot** of the error message
2. **Raise your hand** — your facilitator will come help
3. **Don't skip it** — we need all green checkmarks before moving to Exercise 3

Remember: this is the one session where we insist on 100% completion. After today, you never have to worry about auth again.

## Success Criteria

- [ ] All 6 services show `[PASS]`
- [ ] You understand what each service does (from the lecture)
- [ ] You know where your credentials live (`~/oren-auth/`)
