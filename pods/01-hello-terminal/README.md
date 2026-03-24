# Pod 01: Hello, Terminal

> Befriending the command line and your new AI builder

**Week 1** | **Date:** Apr 6, 2026 | **Duration:** 60 min (30 lecture + 30 hands-on)

**Category:** Basics & Claude Code

---

## What You'll Learn Today

By the end of this session, you will:
- Open Warp terminal without anxiety
- Understand where files live on your computer
- Set up a proper project folder hierarchy
- Run your first Claude Code prompt and see it build something
- Know how to set up a project with `/init` and a CLAUDE.md file
- Understand why Claude sometimes pauses to ask permission — and how to fix that
- Know the essential commands: Ctrl+C, `/resume`, `/context`, `/memory`
- Be comfortable running two Claude sessions at once

---

## Part 1: The Terminal Is Just a Text Box

### If You Can Use Excel, You Can Use This

Think of Excel for a moment:
- You type a formula into a cell: `=SUM(A1:A10)`
- Excel reads your instruction and gives you a result
- You didn't "program" anything — you just told the tool what you wanted

**A terminal works the same way.** You type an instruction, the computer does it, and shows you the result. That's it. There's no "coding" involved. It's just a different text box.

### What Is Warp?

Warp is a modern terminal that looks friendly. It has:
- **Autocomplete** — it guesses what you're trying to type
- **Visual blocks** — each command and its result is grouped together
- **AI suggestions** — it can explain commands in plain English

You already have it installed (or we'll install it now). Open it up.

### Your First Commands

Here's the Rosetta Stone — what you'd do with your mouse, but typed instead:

| What you want to do | In File Explorer / Finder | In the terminal |
|---------------------|---------------------------|-----------------|
| See what's in this folder | Open the folder | `ls` |
| Go into a folder | Double-click it | `cd folder-name` |
| Where am I right now? | Look at the address bar | `pwd` |
| Create a new folder | Right-click → New Folder | `mkdir folder-name` |
| Go up one folder | Click the back arrow | `cd ..` |

That's all you need to know for today. Five commands.

---

## Part 2: Where Do Files Live?

### The Filing Cabinet Analogy

Your computer is a filing cabinet. Every file lives at an **address** — just like every house has a street address.

**On Windows:** `C:\Users\yourname\Documents\report.xlsx`
**On Mac:** `/Users/yourname/Documents/report.xlsx`

When you open File Explorer or Finder, you're browsing this filing cabinet with pictures. When you use the terminal, you're browsing the same filing cabinet with text. **Same cabinet. Two views.**

### Why Not Work on the Desktop?

Many people save everything to Desktop or Downloads. This is like piling all your paperwork on the kitchen counter:
- It gets messy fast
- Things get synced to cloud storage unexpectedly
- You can't find anything after a month
- Claude Code has no idea where to look

### The Standard: `~/claude_projects/`

Starting today, everyone creates one folder as your home base for all Claude Code work:

```
~/claude_projects/
├── my-first-project/
├── client-dashboard/
├── weekly-report-generator/
└── learning_pods/        ← this repo lives here
```

The `~` symbol means "my home folder" — it's `C:\Users\yourname` on Windows or `/Users/yourname` on Mac.

**Rule: One folder per project. All projects inside `~/claude_projects/`.** Clean, findable, professional.

---

## Part 3: Meet Claude Code

### What Is Claude Code?

Claude Code is an AI builder that lives in your terminal. You describe what you want in plain English, and it:
- Creates files and folders
- Writes code (Python, HTML, whatever is needed)
- Reads and edits existing files
- Runs commands on your computer
- Fixes its own mistakes

**You are the architect. Claude is the builder. The terminal is the construction site.**

### Your First Prompt

Open Warp. Type:

```
claude
```

That's it. Claude Code starts up. Now type something like:

> "Create an HTML page that says Hello [your name] with a blue background and today's date"

Watch what happens. Claude will:
1. Think about what you asked
2. Create an `index.html` file
3. Tell you what it did

Open the file in your browser — you just "built" a webpage without writing a single line of code.

---

## Part 4: Setting Up a Project with `/init`

### What Is a Project?

A project is just a folder with some configuration that tells Claude Code how to behave when it's working inside that folder. Think of it like setting up a new Excel workbook with your preferred column widths, fonts, and templates.

### Using `/init`

Navigate to your project folder and run:

```
/init
```

Claude Code will:
- Create a `CLAUDE.md` file in your project
- Ask you a few questions about what the project is for
- Set up sensible defaults

This is the single most important file in any project.

### What Is CLAUDE.md?

`CLAUDE.md` is your project's **instruction manual for Claude.** Every time Claude starts working in a folder, it reads this file first. Think of it as:

- A brief for a new contractor: "Here's what this project is about, here's how we do things, here are the rules"
- A preferences file: "Always use dark theme, always write in plain English, never delete important files"

**You write it once. Claude follows it forever.** No need to repeat yourself in every conversation.

### Your Starter CLAUDE.md

We're going to give everyone a starter template based on what works well. Here's what goes in it:

```markdown
# My Project Name

## What This Project Does
[One sentence describing the project]

## Rules
- Explain everything in plain English
- Ask before deleting any files
- Never run dangerous commands like rm -rf
- Always commit work to git before making big changes

## Defaults
- Use plain HTML + CSS for web pages
- Use Python for data tasks
- Use a dark theme with Oren brand colors
```

The `setup/sample-claude-md/` folder in this repo has a **starter template** and a **power-user template** (based on Anshul's actual CLAUDE.md) that you can copy and customize.

---

## Part 5: The Permission Model — Why Claude Pauses

### The Problem

When Claude Code runs a command (like creating a file or running a script), it sometimes stops and asks:

> "Allow Claude to run: `python analyze.py`? [Y/n]"

This is a safety feature — Claude asks before doing anything that could change your system. **This is good**, but it creates a problem: if Claude is working on something for 10-20 minutes and pauses to ask permission halfway through, your progress stalls until you notice and click "Yes."

### The Solution: Pre-Allow Safe Commands

In your CLAUDE.md or Claude Code settings, you can pre-approve commands that are always safe:
- Running Python scripts: always fine
- Creating and editing files: always fine
- Running `git` commands: always fine
- Running `npm` commands: always fine

And you can explicitly **block** dangerous ones:
- `rm -rf` (delete everything): NEVER
- `git push --force` (overwrite team's work): NEVER
- Any command that deletes without confirmation: NEVER

This way, Claude works uninterrupted for safe operations and only pauses for genuinely dangerous ones. **We'll configure this for everyone in the hands-on section.**

---

## Part 6: Essential Commands You'll Use Every Day

### Ctrl+C — The Emergency Stop

If Claude is doing something you don't want, or it's been running too long, or you just changed your mind:

**Press Ctrl+C**

This stops whatever Claude is currently doing. It's your emergency brake. You won't break anything — it just stops the current action.

### /resume — Pick Up Where You Left Off

Close your terminal accidentally? Computer restart? No problem:

```
/resume
```

Claude Code remembers your last conversation. This command picks up exactly where you left off. No need to re-explain everything.

### /context — What Does Claude See?

Curious what files and information Claude is currently working with?

```
/context
```

This shows you Claude's current "view" — what files it's read, what it knows about your project. Useful when things aren't working and you want to understand why.

### /memory — What Claude Remembers

Claude Code has a memory system that persists between conversations:

```
/memory
```

This shows you what Claude has remembered about your project and preferences. You can add to it ("remember that our brand color is blue") or clear things that are outdated.

---

## Part 7: The Waiting Game — Multitasking with Claude

### The Reality

Claude Code sometimes takes 5, 10, even 20 minutes to complete a complex task. This is normal — it's thinking, writing code, testing, fixing issues. **This is a feature, not a bug.** You gave it a task, it's doing the work.

But sitting and watching a progress indicator for 20 minutes is not a good use of your time.

### The Two-Tab Strategy

Here's what experienced Claude Code users do:

1. **Tab 1:** Give Claude a task. It starts working.
2. **Tab 2:** Open a new Warp tab. Start a new Claude session on a different task.
3. When Tab 1 finishes, you'll see the result waiting for you.

**Start with 2 tabs maximum.** Context switching is hard for humans, even if it's easy for Claude. Once you're genuinely comfortable managing 2, you can try 3. But most people find 2 is the sweet spot.

Think of it this way: **you're a manager with two direct reports.** You give one a task, then walk over to the other and give them a different task. You check in when they're done. You don't stand over their shoulder the whole time.

### How to Know When Claude Is Done

- Warp shows visual indicators when a command finishes
- In Week 3, we'll set up **notification hooks** — desktop alerts that ping you when Claude needs your attention
- For now, just glance at your tabs periodically

---

## Hands-On Exercises (30 min)

### Exercise 1: Set Up Your Workspace (5 min)

1. Open Warp
2. Create your projects folder:
   - `mkdir ~/claude_projects`
3. Navigate into it:
   - `cd ~/claude_projects`
4. Verify you're in the right place:
   - `pwd`
5. Look at it in File Explorer/Finder too — **same folder, two views**

### Exercise 2: Your First Project (5 min)

1. Create a project folder:
   - `mkdir my-first-project`
   - `cd my-first-project`
2. Start Claude Code:
   - `claude`
3. Run `/init` to set up the project
4. Look at the CLAUDE.md it created — that's your project's instruction manual

### Exercise 3: Build Something (10 min)

1. In your Claude Code session, type:
   > "Create an HTML page that says Hello [your name]. Use a dark background (#1a1a2e) and white text. Add today's date and a fun fact about sustainability."
2. Open the file in your browser (Claude will tell you the filename)
3. Now iterate — ask Claude:
   > "Change the background to green and add a section about what I do at Oren"
4. Refresh your browser — see the changes

### Exercise 4: Set Up Permissions (5 min)

1. Copy the starter CLAUDE.md from the learning pods repo:
   - Ask Claude: "Copy the file from ~/claude_projects/learning_pods/setup/sample-claude-md/starter.md to this project's CLAUDE.md"
2. Review what's in it — these are your project's rules
3. Customize it: tell Claude "Add a rule that says to always use my name [your name] when creating content"

### Exercise 5: Practice the Essential Commands (5 min)

1. Ask Claude to do something: "Create a Python script that prints the numbers 1 to 100"
2. While it's working, press **Ctrl+C** to stop it
3. Type `/resume` — see how it picks up the conversation
4. Type `/context` — see what Claude currently knows
5. Type `/memory` — see what Claude has remembered

### Bonus Exercise: Two Tabs

1. Open a second Warp tab
2. `cd ~/claude_projects/my-first-project`
3. Start a new Claude session: `claude`
4. Give it a different task: "Create a second HTML page called about.html with information about Oren"
5. Switch between tabs — you now have two builders working for you

---

## Key Takeaways

1. **The terminal is just a text box** — you type instructions, the computer does them
2. **`~/claude_projects/` is your home base** — one folder per project, always
3. **CLAUDE.md is your project's rulebook** — write it once, Claude follows it forever
4. **Pre-allow safe commands** — so Claude doesn't pause for permission on routine tasks
5. **Ctrl+C stops everything** — your emergency brake, use it freely
6. **Two tabs is the sweet spot** — give Claude tasks in parallel while you manage

---

## Before Next Week

- [ ] Make sure Warp is installed and working
- [ ] Your `~/claude_projects/` folder exists
- [ ] You've run at least one Claude Code prompt successfully
- [ ] You have a CLAUDE.md in your first project
- [ ] You've tried Ctrl+C and `/resume` at least once

Next week: **Fire and Forget** — we'll connect all your tools (GitHub, Vercel, Slack, Google Drive, Zoho Bigin) in one session and never touch auth again.
