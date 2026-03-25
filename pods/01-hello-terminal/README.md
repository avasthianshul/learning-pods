# Pod 01: Hello, Terminal

> Befriending the command line and meeting your AI builder

**Week 1** | **Date:** Apr 6, 2026 | **Duration:** 60 min (30 lecture + 30 hands-on)

**Category:** Basics & Claude Code

---

## Why Are We Here?

### Claude Code changes what's possible for you

Over the next 13 weeks, you'll learn a tool that lets you **build things you'd normally need a developer for** — all by describing what you want in plain English.

- "Analyze this CSV and build me a chart of our top 10 emitters" → **Done in 2 minutes**
- "Create a client-facing dashboard with our pipeline data" → **Done in 15 minutes**
- "Summarize every document in my Google Drive folder and post to Slack" → **Done in 5 minutes**
- "Build me a landing page for our new service offering" → **Done in 10 minutes, live on the internet**

You don't write code. You **describe what you want**, and Claude builds it. If you can write a clear email, you can use Claude Code.

**Full-stack confident** means: you can go from idea to working, deployed tool — start to finish — without help from engineering.

---

## Warp — Your New Home

### What is Warp?

Warp is a modern terminal — a text box where you type instructions to your computer. It's friendlier than the default terminal because it has:

- **Autocomplete** — guesses what you're trying to type
- **Visual blocks** — groups each command with its result so you don't get lost
- **AI suggestions** — can explain commands in plain English

You should have Warp installed from the prerequisite setup. Open it now.

### Windows Users: Confirm Git Bash Is Your Default Shell

If you set up Warp during prerequisites, you should already have Git Bash as your default shell. Check the dropdown next to the **+** tab button — it should say **Git Bash**, not PowerShell.

**Why this matters:** Git Bash makes Windows and Mac use the same commands. No confusion, no "this only works on Mac" problems.

---

## Terminal Basics — 5 Commands

### The Rosetta Stone

Everything you do with your mouse in File Explorer or Finder, you can do by typing. Here are the only 5 commands you need:

| What you want to do | With your mouse | In the terminal | What it stands for |
|---------------------|-----------------|-----------------|-------------------|
| See what's in this folder | Open the folder | `ls` | **l**i**s**t |
| Go into a folder | Double-click it | `cd folder-name` | **c**hange **d**irectory |
| Where am I right now? | Look at the address bar | `pwd` | **p**rint **w**orking **d**irectory |
| Create a new folder | Right-click → New Folder | `mkdir folder-name` | **m**a**k**e **dir**ectory |
| Go up one folder | Click the back arrow | `cd ..` | **c**hange **d**irectory to parent |

That's it. Five commands. Fewer than Excel keyboard shortcuts.

### Same Filing Cabinet, Two Views

Your computer is a filing cabinet. Every file has an address — like a house on a street. File Explorer shows the cabinet with pictures. The terminal shows the same cabinet with text. **Same cabinet, two views.**

The `~` symbol means "my home folder" — that's `C:\Users\yourname` on Windows or `/Users/yourname` on Mac.

---

## Your Home Base

### `~/claude_projects/` — Where All Your Work Lives

Starting today, all your Claude Code projects go in one place:

```
~/claude_projects/
├── my-first-project/
├── client-dashboard/
├── report-generator/
└── learning_pods/        ← this repo (we'll clone it shortly)
```

**Why not Desktop or Downloads?** Those folders get messy fast, things get synced to the cloud unexpectedly, and Claude can't find your files. One home base, one folder per project, clean and findable.

---

## Your First Project

### Let's Build Something

1. Create your home base and first project folder:
   ```
   mkdir ~/claude_projects
   mkdir ~/claude_projects/my-first-project
   cd ~/claude_projects/my-first-project
   ```

2. Start Claude Code:
   ```
   claude
   ```

3. Type a prompt — your first instruction to Claude:

   > Create an HTML page that says Hello [your name] with a dark background and today's date. Make it look professional.

4. Claude will create a file. Open it in your browser — **you just built a webpage without writing a line of code.**

5. Now iterate — tell Claude:

   > Add a section about what I do at Oren and change the background to a dark blue (#1a1a2e)

6. Refresh your browser. See the changes. **This describe-and-build loop is how you'll work from now on.**

### Ctrl+C — Your Emergency Brake

If Claude is doing something you don't want, or it's been running too long, or you changed your mind:

**Press Ctrl+C**

It stops whatever Claude is doing. You won't break anything. Use it freely.

---

## Why Git and GitHub?

### You Already Use Google Drive — Think of GitHub as Drive for Business Logic

At Oren, we use Google Drive for company materials: documents, presentations, resources, templates. It works great for that.

But some things need **constant iteration** — dashboards, automations, reports, tools, anything Claude builds for you. These change fast. They need version history. They need to be easy for Claude to find and update. Google Drive isn't built for that.

**Git** is the tool that tracks every change you make to a project — like "Track Changes" in Word, but for entire folders. **GitHub** is where those projects live online — like Google Drive, but designed for things that evolve.

### How Oren Will Work Going Forward

| What | Where it lives | Why |
|------|---------------|-----|
| Documents, presentations, templates | **Google Drive** | Easy to share, everyone knows it |
| Dashboards, tools, automations, code | **GitHub** | Built for iteration, version history, Claude-friendly |

You don't need to understand Git deeply. You just need to know four concepts:

| Concept | What it means |
|---------|--------------|
| **Remote** | The version of your project that lives on GitHub (online — like a file on Google Drive) |
| **Local** | The version of your project on your computer (like a downloaded copy) |
| **Push** | Upload your local changes to GitHub (like saving a file back to Drive) |
| **Pull** | Download the latest changes from GitHub to your computer (like syncing) |

That's it. Claude handles the actual commands — you just tell it what you want.

---

## Connecting to GitHub

### Let's Set It Up

Once connected, your work is:
- **Saved** — never lose a project again
- **Shareable** — your team can see what you've built
- **Version-tracked** — you can always go back to an earlier version

### Step 1: Ask Claude to Install the GitHub Tool

In your Claude Code session, type:

> Install the GitHub command-line tool for me

Claude will figure out your operating system and run the right command — `brew install gh` on Mac or `winget install GitHub.cli` on Windows. **You just described what you wanted. Claude handled the platform differences.**

If Claude asks for permission to run a command, say yes.

### Step 2: Log In to GitHub (The One Time You Leave Claude)

This is the only step where you need to type something directly in Warp instead of through Claude:

1. Open a **new Warp tab** (don't close your Claude session!)
2. Type this and press Enter:
   ```
   gh auth login
   ```
3. You'll see a series of choices. Pick:
   - **GitHub.com** (not Enterprise)
   - **HTTPS**
   - **Yes** — authenticate Git with GitHub credentials
   - **Login with a web browser**
4. It shows you a code and opens your browser — paste the code, click Authorize
5. Done! Close this Warp tab and go back to your Claude Code tab

### Step 3: Verify It Worked

Back in Claude Code, ask:

> Check if GitHub is connected

Claude will run `gh auth status` and confirm you're logged in. If you see your username — you're connected.

---

## Clone the Learning Pods Repo

### Get the Course Materials on Your Machine

In your Claude Code session, type:

> Clone the learning pods repository from GitHub to my claude_projects folder. The repo URL is https://github.com/avasthianshul/learning-pods.git

Claude will run the clone command and download all the course materials.

Then tell Claude:

> Open the learning_pods folder

You now have every pod's lecture notes, exercises, and apps on your computer.

---

## Your Revision Dashboard

### Interactive Lecture Notes in Your Browser

Every pod has a browser app — an interactive reference page you can open anytime to review what you learned.

Open this file in your browser:

```
~/claude_projects/learning_pods/pods/01-hello-terminal/app/index.html
```

You'll see today's lecture notes organized into sections with click-to-copy commands and visual diagrams. **Bookmark this page.** It's your go-to reference when you forget a command.

---

## Hands-On Exercises (30 min)

### Exercise 1: Set Up Your Workspace (5 min)

1. Create `~/claude_projects/` if you haven't already
2. Verify with `pwd` and `ls`
3. Check it in File Explorer / Finder too — same folder, two views

### Exercise 2: Your First Project (10 min)

1. Create a project folder, start Claude Code
2. Build an HTML page with your name and Oren branding
3. Iterate on it — change colors, add content, make it yours
4. Open it in your browser

### Exercise 3: Connect to GitHub (10 min)

1. Ask Claude to install the GitHub CLI
2. Open a new Warp tab and run `gh auth login`
3. Come back to Claude Code and verify the connection

### Exercise 4: Clone and Explore (5 min)

1. Clone the learning_pods repo via Claude Code
2. Open the Pod 01 app (index.html) in your browser
3. Click through the lecture notes — this is your revision tool

See the `exercises/` folder for detailed step-by-step guides for each exercise.

---

## Key Takeaways

1. **The terminal is just a text box** — 5 commands is all you need
2. **`~/claude_projects/` is your home base** — one folder per project, always
3. **Claude Code does the building** — you describe what you want in plain English
4. **GitHub is your safety net** — work is saved and shareable
5. **Ctrl+C stops everything** — your emergency brake, use it freely

---

## Before Next Week

- [ ] `~/claude_projects/` folder exists
- [ ] You've built at least one thing with Claude Code
- [ ] GitHub is connected (`gh auth status` works)
- [ ] learning_pods repo is cloned
- [ ] You've opened Pod 01's `index.html` in your browser

Next week: **Fire and Forget** — we'll set up your project with CLAUDE.md files, master the permission model so Claude works uninterrupted, learn the two-tab multitasking strategy, and connect all your remaining tools (Vercel, Slack, Google Drive, Zoho Bigin).
