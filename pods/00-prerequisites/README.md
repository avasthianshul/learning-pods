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

- **Think of it like Google Drive, but for code** — it's where all course materials live and where your projects get saved
- **It remembers every version, forever** — unlike Word which overwrites your file each time you save, GitHub keeps the full history so you can always roll back if something breaks
- **It handles teamwork automatically** — if two people edit different parts of the same project, GitHub merges the changes without them overwriting each other
- **You don't need to touch it directly** — Claude Code manages all of this for you; you just need an account so your work saves to the right place

### How to Create Your Account

1. Go to **github.com** in your browser
2. Click **Sign Up**
3. Use your **@orennow.com email address**
4. Pick a username — suggestion: your first name or `firstname-oren` (e.g., `priya-oren`)
5. Create a password and **write it down somewhere safe**
6. Complete the verification steps (a simple puzzle, then click the link in your @orennow.com email)

GitHub is completely free. You do not need a paid plan.

**Done?** You now have a GitHub account. Remember your username and password — you'll need them in Pod 01.

---

## Step 2: Install Warp Terminal

### What is Warp?

- **Your terminal for the entire course** — a text box where you type instructions to your computer
- Free, works on Mac and Windows, and much friendlier than the default terminal

### Install Warp

1. Go to **warp.dev** and click **Download**
2. Open the downloaded file and follow the install prompts
3. Open **Warp** — you should see a dark window with a text box at the bottom
4. **Windows only:** click the dropdown next to the **+** tab, select **Git Bash**, then go to **Settings → Features → Session** and set Startup shell to Git Bash

---

## Step 3: Pick Your Starting Point

| Situation | Path |
|-----------|------|
| I can type `claude` in Warp and it works | Path 1 — Done! |
| I have Claude Desktop but not Claude Code in terminal | Path 2 — 5 min |
| I don't have either | Path 3 — 10 min |

---

## Path 1: Already Have Claude Code

### Launch It

- Open **Warp**, type `claude`, press **Enter** — you should see a welcome message
- If it asks you to sign in, follow the prompts — it opens your browser

---

## Path 2: Have Claude Desktop, Need Terminal

### Copy This Prompt into the Claude Code Tab

```
I need you to install Claude Code so I can use it in my terminal. Please detect my operating system, install everything that is needed (including Node.js if missing), and walk me through each step one at a time. After each step, wait for me to confirm before moving on.
```

- In **Claude Desktop**, click the **Claude Code** tab (not the regular chat tab) and paste the prompt above
- Follow each step Claude gives you — if anything fails, paste the error back and ask Claude to help
- When done: open **Warp**, type `claude`, press **Enter** — you should see a welcome message

---

## Path 3: Starting from Scratch

### Install Claude Desktop, Then Follow Path 2

1. Go to **claude.ai/download** and click **Download** for your OS
2. Install it, open the app, and sign in with your Claude Pro or Max account
3. Now scroll back up and follow **Path 2** above

---

## Troubleshooting

| Problem | What to do |
|---------|------------|
| `claude: command not found` | Close Warp completely, reopen it, try again |
| `npm: command not found` or `Permission denied` | Paste the exact error into Claude Desktop and ask what to do |
| Can't sign in to Claude | Make sure you have an active Pro or Max subscription at claude.ai |
| Warp not installed | Download free from **warp.dev** |
| Tried everything, still stuck | Screenshot the error and message **#learning-pods** on Slack |

### What's Next?

- Come to **Pod 01: Hello, Terminal** with this setup done — if you get stuck, message **#learning-pods** on Slack
