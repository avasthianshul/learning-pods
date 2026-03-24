# Exercise 3: Test Each Skill

**Time:** 10 minutes

## What You're Doing

Now that all connections are green, you're going to use each skill for real. Each skill is a slash command that tells Claude how to talk to a specific tool.

## Steps

### Step 1: Start Claude Code

Navigate to the learning_pods folder:
```
cd ~/claude_projects/learning_pods
```

Start Claude Code:
```
claude
```

Wait for the prompt to appear. You're now talking to Claude.

### Step 2: Test Slack

Type this into Claude Code:

```
/slack send #learning-pods "Hello from [your name]! My first skill test."
```

**What you should see:** Claude sends a message to the #learning-pods Slack channel. Check Slack on your phone or browser — the message should be there.

**Try one more:**

> "Use your Slack skill to read the last 5 messages in #learning-pods"

You should see the recent messages from that channel, including the one you just sent.

### Step 3: Test Google Drive

Type this into Claude Code:

```
/google-drive list
```

**What you should see:** A list of files from your Google Drive. You should recognize the filenames — they're your actual documents.

**Try a search:**

> "Use your Google Drive skill to search for files with 'report' in the name"

You should see any documents that have "report" in their filename.

### Step 4: Test Zoho Bigin

Type this into Claude Code:

```
/zoho-bigin list deals
```

**What you should see:** A list of deals from the Oren Bigin pipeline. You should see deal names, stages, and values.

**Try a contact search:**

> "Use your Bigin skill to search for contacts"

You should see a list of contacts from the CRM.

### Step 5: Test GitHub

Type this into Claude Code:

> "Use your GitHub skill to list my repositories"

**What you should see:** A list of GitHub repositories associated with your account.

### Step 6: Test Vercel (Visual Check Only)

We won't deploy anything right now, but verify the skill is available:

> "Can you confirm you have access to the Vercel skill? What commands are available?"

**What you should see:** Claude confirms it can use the Vercel skill and lists available commands like deploy, list projects, and check status.

---

## Expected Results Summary

| Skill | Test Command | Expected Result |
|-------|-------------|-----------------|
| Slack | `/slack send #learning-pods "Hello!"` | Message appears in #learning-pods |
| Google Drive | `/google-drive list` | Your actual files are listed |
| Zoho Bigin | `/zoho-bigin list deals` | Deals from the pipeline appear |
| GitHub | Ask Claude to list repos | Your repositories are listed |
| Vercel | Ask Claude to confirm access | Claude confirms the skill is available |

---

## Troubleshooting

### Claude says "I don't know how to use Slack" (or any other skill)

The skill files might not be installed. Run the copy-skills script:

**Mac / Linux:**
```
./setup/copy-skills.sh
```

**Windows (PowerShell):**
```
.\setup\copy-skills.ps1
```

Then restart Claude Code and try again.

### Claude says "authentication failed" or "token expired"

Go back to Exercise 2 and re-verify that specific connection. The token may need to be refreshed.

### Slack message doesn't appear in the channel

- Make sure the bot has been added to #learning-pods
- Check that you typed the channel name correctly (with the #)
- Ask your facilitator to verify the bot's channel permissions

### Google Drive shows no files

- Make sure you authorized the correct Google account (your work account, not personal)
- Try searching for a specific file you know exists

### Zoho Bigin shows an empty list

- This could be normal if there are no active deals
- Ask your facilitator to verify there's sample data in Bigin

## Success Criteria

- [ ] Sent a Slack message via Claude Code and saw it appear in Slack
- [ ] Listed Google Drive files via Claude Code
- [ ] Listed Bigin deals via Claude Code
- [ ] Confirmed GitHub access via Claude Code
- [ ] Confirmed Vercel skill is available
