# Pod 00: Prerequisites

> Get set up before your first Learning Pod — do this on your own time

**Pre-work** | **Time needed:** 20–30 minutes

**Category:** Setup

---

## What You Need Before Starting

Before you begin, make sure you have:
- A computer (Windows or Mac)
- An internet connection
- A **Claude Pro or Max subscription** (if you don't have one, ask your manager)
- 20–30 minutes of uninterrupted time

---

## Step 1: Create a GitHub Account

### What is GitHub?

GitHub is like Google Drive, but for code. It's where all the course materials live, and it's where your projects will be saved so you never lose your work.

### How to Create Your Account

1. Go to **github.com** in your browser
2. Click **Sign Up**
3. Use your **@orennow.com email address**
4. Pick a username — suggestion: your first name or `firstname-oren` (e.g., `priya-oren`)
5. Create a password and **write it down somewhere safe**
6. Complete the verification steps (usually a simple puzzle)
7. Check your @orennow.com email for a verification link and click it

GitHub is completely free. You do not need a paid plan.

**Done?** You now have a GitHub account. Remember your username and password — you'll need them in Pod 01.

---

## Step 2: Install Claude Code

### Pick Your Path

There are three ways to install Claude Code. Pick the one that feels right for you:

| Path | Best for | Time | What you get |
|------|----------|------|-------------|
| **Path A: Desktop App** | Fastest setup | 5 min | Claude in a window — like a chat app |
| **Path B: Terminal** | Best performance | 15 min | Claude in the terminal — the full power version |
| **Path C: Desktop + Terminal** | Best of both worlds (RECOMMENDED) | 10 min | Start with the app, it installs terminal for you |

---

## Path A: Claude Desktop App (Fastest)

### Steps

1. Go to **claude.ai/download** in your browser
2. Click **Download** for your operating system (Windows or Mac)
3. Open the downloaded file and install it (follow the prompts)
4. Open the Claude Desktop app
5. Sign in with your Claude account

That's it. You now have Claude in a desktop window.

**If you chose Path A, skip ahead to the "You're Ready" section below.**

---

## Path C: Desktop App + Terminal (Recommended)

This is the best option — you get the friendly desktop app AND the powerful terminal version.

### Steps

1. Install the Claude Desktop App (follow Path A above — steps 1 through 5)
2. Open the Claude Desktop app
3. Look for the **Terminal** or **Code** tab in the app
4. Click it — it will install Claude Code on your terminal automatically
5. Follow any prompts it shows you

When it's done, you have both versions. You can use whichever feels more comfortable.

**Skip ahead to the "You're Ready" section below.**

---

## Path B: Terminal-First (10 Steps)

This path gives you the full terminal experience. It takes longer to set up but gives you the best performance.

**If you chose Path A or C, skip this entire section.**

### Step B1: Download Warp

Warp is a modern terminal — think of it as a text box for talking to your computer, but with a friendlier design than the default terminal.

1. Go to **warp.dev** in your browser
2. Click **Download**
3. Open the downloaded file and install it

### Step B2: Open Warp

Open the Warp app. You'll see a text box with a blinking cursor. That's your terminal. Don't worry — it's just a text box where you type instructions.

### Step B3: Windows Users Only — Switch to Git Bash

**Mac users: skip this step.**

Windows users need to switch Warp's shell so that the commands work the same as on Mac:

1. Look at the top of Warp — next to the **+** tab button, there's a small dropdown
2. Click it and select **Git Bash**
3. To make this permanent: go to **Settings → Features → Session** and set **Startup shell** to Git Bash

If you don't see Git Bash as an option, you'll need to install Git for Windows first — go to **git-scm.com**, download, and install with all default options. Then restart Warp.

### Step B4: Watch the Install Video (Optional)

[VIDEO LINK — 5-minute walkthrough of Claude Code terminal installation]

If you prefer reading, follow steps B5–B8 below.

### Step B5: Check If Node.js Is Installed

Type this in Warp and press Enter:

```
node --version
```

If you see a version number (like `v20.11.0`), you're good — skip to Step B7.

If you see an error like "command not found", go to Step B6.

### Step B6: Install Node.js

1. Go to **nodejs.org** in your browser
2. Download the **LTS** version (the big green button)
3. Open the downloaded file and install it (click Next through everything)
4. **Close Warp completely and reopen it**
5. Try `node --version` again — you should see a version number now

### Step B7: Install Claude Code

Type this in Warp and press Enter:

```
npm install -g @anthropic-ai/claude-code
```

Wait for it to finish. You'll see a progress bar and then a success message.

### Step B8: Start Claude Code

Type this in Warp and press Enter:

```
claude
```

Claude Code will start up and ask you to sign in. Follow the prompts — it will open your browser for authentication.

---

## You're Ready!

### How to Know It Worked

You're set up if **either** of these is true:

- **Desktop app:** You can open Claude Desktop and chat with Claude
- **Terminal:** You can type `claude` in Warp and it starts up

### Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js first (Step B6), then close and reopen Warp |
| `Permission denied` on Mac | Add `sudo` in front: `sudo npm install -g @anthropic-ai/claude-code` — enter your computer password when asked |
| `Permission denied` on Windows | Close Warp, right-click it, choose **Run as Administrator**, then try again |
| `claude: command not found` | Close Warp completely and reopen it, then try `claude` again |
| Can't sign in | Make sure you have an active Claude Pro or Max subscription at claude.ai |
| Git Bash not showing in Warp | Install Git for Windows from git-scm.com, then restart Warp |

### What's Next?

Come to **Pod 01: Hello, Terminal** with this setup done. We'll take it from there — no other preparation needed. If you get stuck on any step, message **#learning-pods** on Slack and someone will help you.
