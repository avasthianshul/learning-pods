# Pod 02: Fire and Forget

> Connect every tool once, verify it works, and never touch auth again

**Week 2** | **Date:** Apr 13, 2026 | **Duration:** 60 min (30 lecture + 30 hands-on)

**Category:** Basics & Claude Code

---

## What You'll Learn Today

By the end of this session, you will:
- Understand what API tokens and credentials are (without any jargon)
- Have all five tools connected: GitHub, Vercel, Slack, Google Drive, Zoho Bigin
- See all green checkmarks on the verify script
- Know what skills are and how to use them
- Have tested every skill with a real command
- Understand Plan Mode and when to use different Claude models

---

## Part 1: The House Key Analogy (5 min)

### What Are Credentials?

Every online service — Slack, Google Drive, GitHub — needs to know who you are before it lets you in. When you log in with your email and password, that's you proving your identity.

But what if you want Claude to go into Slack *on your behalf* and post a message? Claude can't type your password. Instead, you give Claude a special **token** — think of it as a copy of your house key.

### The Analogy

Imagine you have a house. You live there. You have the key.

Now you hire a housekeeper (that's Claude). You don't give the housekeeper your entire identity — you give them **a copy of your house key** so they can go in and do things on your behalf:

- You give Claude **a key to Slack** — so it can post messages for you
- You give Claude **a key to Google Drive** — so it can read your files
- You give Claude **a key to GitHub** — so it can manage your code
- You give Claude **a key to Vercel** — so it can publish websites for you
- You give Claude **a key to Zoho Bigin** — so it can look up deals and contacts

Each key only works for one door. The Slack key can't open Google Drive. And if you ever feel uncomfortable, you can revoke a key at any time — like changing your locks.

### Where Do the Keys Live?

All your keys live in one place on your computer:

```
~/oren-auth/
```

This is your **locked drawer**. It never gets shared with anyone else. It never gets uploaded to the internet. It never gets committed to a repository. It sits quietly on your machine, and Claude reads from it whenever it needs to open a door.

**Rule: Never share what's in `~/oren-auth/`. Never copy it to someone else. Never paste tokens into Slack or email.**

---

## Part 2: Running the Setup Script (10 min)

### What the Setup Script Does

Last week, you installed the tools. This week, we connect them. The setup script walks you through each connection step by step — it asks you for a token, saves it to `~/oren-auth/`, and moves on to the next one.

You'll run the script once today. After that, you're done. Fire and forget.

### Each Tool — What It Is and Why Claude Needs Access

#### GitHub — Your Code Locker

**Analogy:** GitHub is like Google Drive, but for code. Every project you build with Claude gets saved here so you never lose it, and your team can see your work.

**Why Claude needs a key:** So it can create new projects, save your work, and share it with the team — without you needing to click buttons on a website.

**What the token lets Claude do:** Create repositories, push code, manage issues, open pull requests.

#### Vercel — Your Publishing Button

**Analogy:** Vercel turns a folder on your computer into a live website. Think of it as the "Publish" button in Google Docs — except instead of a document, you're publishing a webpage that anyone can visit.

**Why Claude needs a key:** So it can take what it built for you and publish it to a real URL with one command.

**What the token lets Claude do:** Deploy projects, check deployment status, manage domains.

#### Slack — Team Chat

**Analogy:** You already know Slack — it's where the team talks. When Claude has a key to Slack, it can read channels and post messages *as you*.

**Why Claude needs a key:** So it can send updates, pull information from conversations, and help you search through message history without you scrolling through hundreds of messages.

**What the token lets Claude do:** Send messages to channels, read channel history, search messages.

#### Google Drive — Your File Cabinet

**Analogy:** Google Drive is your file cabinet in the cloud. Spreadsheets, documents, presentations — everything lives there. When Claude has a key, it can open that cabinet and read your files.

**Why Claude needs a key:** So it can find a specific document, read its contents, and use that information in whatever it's building for you. Imagine saying "build me a report based on Q3 data" and Claude pulls the spreadsheet itself.

**What the token lets Claude do:** List files, search by name, read file contents, download files.

#### Zoho Bigin — Your Customer Rolodex

**Analogy:** Bigin is where Oren tracks deals, contacts, and the sales pipeline. Think of it as a digital rolodex combined with a deal tracker.

**Why Claude needs a key:** So it can look up deal information, find contact details, and help you work with CRM data — instead of you clicking through Bigin's interface manually.

**What the token lets Claude do:** List deals, search contacts, create notes, update pipeline stages.

### The Verify Script — Your Green Checkmarks

After running setup, you'll run a second script called `verify.py`. This script tests each connection and shows you the result:

```
Claude Code .... [PASS]
GitHub ......... [PASS]
Vercel ......... [PASS]
Slack .......... [PASS]
Google Drive ... [PASS]
Zoho Bigin ..... [PASS]
```

Green checkmarks mean the key works. Red X means something went wrong — and the script tells you exactly what to fix.

**Rule: Do not leave today until everyone has all green checkmarks.** We'll troubleshoot together. This is the one session where we refuse to move on until everyone is connected. After today, you never have to think about this again.

---

## Part 3: Skills — Teaching Claude New Tricks (10 min)

### What Are Skills?

Last week, you learned about CLAUDE.md — the instruction manual for your project. **Skills** are similar, but instead of describing a project, they teach Claude how to use a specific tool.

Think of a skill as an **instruction card** you give to Claude:

> "Here's how to use Slack. Here are the commands. Here are the rules. Follow these steps when someone asks you to send a message."

Claude reads these instruction cards automatically and knows how to use each tool without you explaining it every time.

### Where Do Skills Live?

```
~/.claude/skills/
```

Each skill is a folder with a text file inside called `SKILL.md`. That file has step-by-step instructions written in plain English. Claude reads them. You don't need to understand what's inside — just know they're there.

```
~/.claude/skills/
├── slack/
│   └── SKILL.md          ← How to use Slack
├── google-drive/
│   └── SKILL.md          ← How to use Google Drive
├── zoho-bigin/
│   └── SKILL.md          ← How to use Zoho Bigin
├── vercel/
│   └── SKILL.md          ← How to deploy websites
└── github/
    └── SKILL.md          ← How to use GitHub
```

### Using Skills — The Slash Commands

Skills are invoked with a **slash command** — a forward slash followed by the skill name. Here's what each one looks like:

#### /slack — Talk to Slack

```
/slack send #learning-pods "Hello from Claude Code!"
```

This tells Claude: "Use your Slack skill. Send a message to the #learning-pods channel."

Other examples:
- `/slack read #general` — See recent messages in #general
- `/slack search "quarterly report"` — Find messages mentioning quarterly report

#### /google-drive — Access Your Files

```
/google-drive list
```

This tells Claude: "Use your Google Drive skill. Show me my files."

Other examples:
- `/google-drive search "Q3 revenue"` — Find files by name
- `/google-drive read "Budget 2026.xlsx"` — Read a specific file's contents

#### /zoho-bigin — Work with the CRM

```
/zoho-bigin list deals
```

This tells Claude: "Use your Bigin skill. Show me the current deals in the pipeline."

Other examples:
- `/zoho-bigin search contacts "Tata Steel"` — Find a contact
- `/zoho-bigin create note "Follow up next Tuesday"` — Add a note to a deal

#### /vercel — Publish a Website

```
/vercel deploy
```

This tells Claude: "Use your Vercel skill. Take this project and make it live."

#### /github — Manage Your Code

```
/github create repo "my-dashboard"
```

This tells Claude: "Use your GitHub skill. Create a new repository called my-dashboard."

### The Copy-Skills Script

The skills in your `~/.claude/skills/` folder come from the `learning_pods` repository. When we update a skill (add new features, fix bugs), you can update your local copy by running the copy-skills script:

```bash
# Mac / Linux
./setup/copy-skills.sh

# Windows (PowerShell)
.\setup\copy-skills.ps1
```

This copies the latest skills from the repo to your machine. Run it whenever you pull new updates from the learning_pods repository.

---

## Part 4: Claude Code Agents & Plan Mode (5 min)

### Plan Mode — The Architect's Drawing

When you ask Claude to build something complex — say, a dashboard with charts, data from Google Drive, and deployment to Vercel — you probably don't want Claude to just start building randomly. You want to see the plan first.

**Plan Mode** is Claude thinking out loud before it builds. It's like getting an architect's drawing before construction starts:

1. You describe what you want
2. Claude writes a plan: "Here's what I'll build, here's the order, here are the files"
3. You review the plan and say "looks good" or "change this part"
4. Claude builds it

**When to use Plan Mode:**
- Any task with 3 or more steps
- Anything that touches multiple files or tools
- When you're not sure what the result should look like
- When you want to learn from Claude's approach

**How to trigger it:** Just ask Claude to plan first:

> "Plan out a dashboard that shows our Q3 metrics. Don't build yet — just show me the plan."

Or use the keyboard shortcut: **Shift+Tab** toggles Plan Mode on and off.

### Agents — The Manager Hiring Specialists

For really complex tasks, Claude can spawn **sub-builders** called agents. Think of it like a manager hiring specialists:

- The main Claude is the **project manager** — it understands your request and coordinates the work
- It can spin up **specialist agents** for focused tasks — one to research, one to build, one to test

You don't need to do anything special to use agents — Claude decides when to use them automatically. But knowing they exist helps you understand why Claude sometimes says "Let me research that..." and takes a moment before building.

### Model Selection — Picking the Right Builder

Claude comes in different sizes, like hiring different levels of expertise:

| Model | Think of it as... | Best for | Speed |
|-------|-------------------|----------|-------|
| **Opus** | Senior architect | Complex projects, multi-step builds, anything important | Slower, most thorough |
| **Sonnet** | Experienced builder | Daily work, standard tasks, most things | Balanced |
| **Haiku** | Quick helper | Simple questions, fast lookups, one-liners | Fastest |

**How to switch models:**

```
/model opus     ← Switch to Opus (most capable)
/model sonnet   ← Switch to Sonnet (balanced)
/model haiku    ← Switch to Haiku (fastest)
```

**Rules of thumb:**
- Start with **Sonnet** for everyday work — it handles 90% of tasks well
- Use **Opus** when building something complex, important, or multi-step
- Use **Haiku** for quick questions like "what does this error mean?" or "summarize this file"
- When in doubt, stick with Sonnet

---

## Hands-On Exercises (30 min)

### Exercise 1: Clone and Setup (10 min)

1. Open Warp
2. Navigate to your projects folder:
   ```
   cd ~/claude_projects
   ```
3. Clone the learning_pods repository (if you haven't already):
   ```
   git clone https://github.com/avasthianshul/learning_pods.git
   ```
4. Go into the repo:
   ```
   cd learning_pods
   ```
5. Run the setup script:
   - **Mac/Linux:** `./setup/install-mac.sh`
   - **Windows (PowerShell):** `.\setup\install-windows.ps1`
6. Enter each token when prompted — your facilitator will walk you through getting each one

See: `exercises/01-clone-and-setup.md` for the detailed step-by-step guide.

### Exercise 2: Verify Connections (5 min)

1. Run the verify script:
   ```
   python setup/verify.py
   ```
   (On Mac, use `python3` instead of `python`)
2. Check the output — you want all green checkmarks
3. If any connection shows a red X, follow the troubleshooting steps
4. **Do not move on until all connections are green**

See: `exercises/02-verify-connections.md` for troubleshooting each service.

### Exercise 3: Test Each Skill (10 min)

1. Start Claude Code:
   ```
   claude
   ```
2. Test Slack:
   ```
   /slack send #learning-pods "Hello from [your name]! Testing Claude Code skills."
   ```
3. Test Google Drive:
   ```
   /google-drive list
   ```
4. Test Zoho Bigin:
   ```
   /zoho-bigin list deals
   ```
5. Verify each one works — you should see real data back from each service

See: `exercises/03-test-skills.md` for all test commands and expected results.

### Exercise 4: Plan Mode and Model Switching (5 min)

1. In your Claude Code session, try Plan Mode:
   > "Plan out a simple webpage that shows the current time and my name. Don't build it yet — just tell me what you'd create."
2. Review the plan Claude gives you
3. Say "go ahead and build it"
4. Try switching models:
   ```
   /model haiku
   ```
5. Ask a simple question: "What day is it today?"
6. Switch back:
   ```
   /model sonnet
   ```

See: `exercises/04-plan-mode-and-models.md` for more exercises.

---

## Key Takeaways

1. **Tokens are house keys** — you give Claude a copy so it can work on your behalf
2. **`~/oren-auth/` is your locked drawer** — never share what's inside
3. **The setup script runs once** — fire and forget, you never touch auth again
4. **All green checkmarks = you're connected** — don't leave without them
5. **Skills are instruction cards** — Claude reads them automatically and knows how to use each tool
6. **Slash commands invoke skills** — `/slack`, `/google-drive`, `/zoho-bigin`, `/vercel`, `/github`
7. **Plan Mode first, build second** — for anything complex, review the plan before Claude starts
8. **Sonnet for daily work, Opus for big projects, Haiku for quick questions**

---

## Before Next Week

- [ ] All five tool connections show green checkmarks in verify.py
- [ ] You've sent at least one Slack message via Claude Code
- [ ] You've listed your Google Drive files via Claude Code
- [ ] You've listed Bigin deals via Claude Code
- [ ] You've tried Plan Mode at least once
- [ ] You've switched between at least two models
- [ ] Your skills are up to date (run the copy-skills script)

Next week: **The Data Whisperer** — we'll teach Claude to read your spreadsheets, clean messy data, and generate charts from Google Drive files.
