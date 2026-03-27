# Lecture 1: New World, New Workspace

---

## Code is Free Now

For most of business history, writing code was expensive. You needed a developer, a timeline, a budget.

That meant most internal tasks — dashboards, reports, automations, trackers — never got built. The cost didn't justify it.

**That's over.** You can now describe what you want in plain English and have it built in minutes. The cost of code just dropped to zero.

This changes what's worth building. We have to widen our aperture. Think bigger.

---

## The Browser Analogy

Remember learning to use a web browser?

- At first you just typed URLs
- Someone showed you **bookmarks**
- Then you discovered **browser history** — you could find that page you forgot to save
- Someone told you about **incognito mode**
- Chrome launched **tabs** — and suddenly multi-tasking on the web was a thing

None of that was obvious on day one. You learned it over time, mostly by watching other people.

**Claude Code is the same.** It has its own shortcuts, commands, and workflows. You won't learn them all today. But you'll pick them up fast — because the easiest way to learn is by doing.

---

## "I'll Show My Flow, You Build Yours"

I use the terminal because I know the keyboard shortcuts. It's fast for me.

You might prefer something different — the desktop app, the web version, an IDE extension. That's fine.

There's no single "right way" to use Claude Code. I'll show you my workflow. Over the next few weeks, you'll build your own.

The point isn't to copy me. It's to find what makes *you* fast.

---

## Your Workspace — Shortcuts

The one shortcut everyone should know:

**`Ctrl + Shift + C`** — Copy text from the terminal

(On Mac: `Cmd + Shift + C`)

This is how you grab Claude's output when you need to paste it somewhere else. You'll use this constantly.

---

## Your Workspace — Commands

Claude Code has built-in commands. These are the ones you'll use most:

| Command | What it does |
|---------|-------------|
| `/memory` | Opens Claude's memory file — persistent notes it remembers across sessions |
| `/compact` | Shrinks the current conversation to save space (like clearing your desk) |
| `/resume` | Pick up where you left off in a previous session |
| `/exit` | End the current session |
| `/context` | See what Claude currently knows about your project |

---

## Try It Now

Open your terminal and start a Claude Code session. Then type:

```
/memory
```

This opens Claude's memory file. It's where Claude stores notes about you and your project. Close it and try:

```
/context
```

This shows you everything Claude knows right now — files it's read, instructions it's following.

**Take 2 minutes. Try both commands.**

---

## Speed Matters

A mental model for picking the right tool:

| Approach | Speed | Example |
|----------|-------|---------|
| GUI (clicking around) | ~10 seconds | Dragging files in a folder |
| AI feature (chatbot UI) | ~10 seconds | Asking ChatGPT in a browser tab |
| Script / CLI | ~300 milliseconds | Running a command in the terminal |
| API call | ~300 milliseconds | Code that talks directly to a service |

**30x faster matters** when you're solving complex problems. Speed compounds.

If an API or command-line tool exists for something, use that — don't use browser automation. Browser-based AI features are slower and less reliable.

---

## Let's Get Connected

Now we're going to do something together. Everyone follow along.

We'll:
1. Create an SSH key (a secure password that lets your computer talk to GitHub)
2. Add it to your GitHub account
3. Connect Git to Claude Code
4. Clone the Oren repo — our shared codebase

**This is a guided walkthrough. Don't skip ahead — we'll do each step together.**

---

## Step 1: Create Your SSH Key

Open your terminal and start a Claude Code session. Then say:

```
Create an SSH key for my GitHub account. My email is [your-email]@orennow.com
```

Claude will:
- Generate the key
- Show you the public key to copy
- Tell you exactly where to paste it in GitHub

**Follow Claude's instructions. Raise your hand if you get stuck.**

---

## Step 2: Clone the Oren Repo

Once your SSH key is connected, say:

```
Clone the Oren learning pods repo from GitHub into my claude_projects folder
```

Claude will run the git commands for you. When it's done, you'll have a local copy of our shared repo.

**Wait until everyone has the repo before we continue.**

---

## "You Ship Your Org Chart"

Now that everyone has the repo, let's look at what's inside.

There's a famous saying in software: **"You ship your org chart."** Does anyone know what it means?

It means: **the way a company is organized shows up in the things it builds.** Teams that don't talk to each other build products that don't talk to each other.

Our repo takes this idea and makes it explicit. It contains:
- Our team structure
- Our workflows
- Our tools and how they connect

This is **one level of abstraction.** Instead of describing our work in documents and slides, we describe it in a way that Claude can read and act on. The tech team can explain more about what "abstraction" means — but the key idea is: **we made our organization machine-readable.**

---

## Let's Build Something

Time to see the magic. We're going to build a simple web page — right now, together.

Open Claude Code in the Oren repo and say something like:

```
Create a simple HTML page called "hello.html" in a new folder called "my-first-page".
It should have a dark background, my name in big white text, and a short bio underneath.
Use the Oren brand colors.
```

When Claude is done, open the file in your browser. You just built a web page by describing it.

---

## Chat Review

Let's look at a real Claude Code conversation together.

We'll walk through:
- **What was said** — was the prompt clear and specific?
- **What could be better** — where was the user vague or implicit?
- **What worked well** — what made Claude give a great response?

**Key takeaway: Be explicit, not implicit.** Claude can't read your mind. The more specific you are about what you want, the better the result.

*Does anyone want to share a conversation from this week? Otherwise I'll share one of mine.*

---

## Recap

What we covered today:

1. Code is free — think bigger about what's worth building
2. Claude Code has a learning curve, just like browsers did
3. Find your own flow — there's no single right way
4. Key shortcuts and commands: `Ctrl+Shift+C`, `/memory`, `/compact`, `/resume`, `/context`
5. Speed matters — use APIs and CLI over browser automation
6. We connected to GitHub and cloned the Oren repo
7. "You ship your org chart" — our repo makes our organization machine-readable
8. We built our first web page by describing it

**Next lecture: Building a Vision — going from idea to first draft.**
