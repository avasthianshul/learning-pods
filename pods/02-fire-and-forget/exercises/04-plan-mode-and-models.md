# Exercise 4: Plan Mode and Model Switching

**Time:** 5 minutes

## What You're Doing

You're going to practice two important Claude Code features:
1. **Plan Mode** — making Claude show you its plan before building
2. **Model switching** — choosing the right level of power for the task

## Part A: Plan Mode

### Step 1: Ask Claude to Plan (Not Build)

In your Claude Code session, type:

> "Plan out a simple HTML page that shows my name, the current date, and a motivational quote. Use the Oren dark theme. Don't build it yet — just show me your plan."

**What you should see:** Claude writes out a plan — something like:
- "I'll create an `index.html` file with..."
- "The page will have three sections..."
- "I'll use these colors: background #1a1a2e, text #e0e0e0..."

Claude should NOT create any files yet. It's just thinking out loud.

### Step 2: Review and Approve

Read the plan. Does it sound right? If you want to change something, say so:

> "Change the quote section to show three quotes instead of one, and add my job title"

Claude will update the plan.

### Step 3: Tell Claude to Build

When you're happy with the plan, say:

> "Looks good — go ahead and build it."

Claude will now create the files. Open `index.html` in your browser to see the result.

### Step 4: Try the Shift+Tab Shortcut

Start a new request. Before typing, press **Shift+Tab** — this toggles Plan Mode on. You'll see a visual indicator that Plan Mode is active.

Now type:

> "Create a Python script that prints a summary of this week's weather in Bangalore"

Claude should show a plan first (because Plan Mode is on). Press **Shift+Tab** again to toggle it off when you're done.

---

## Part B: Model Switching

### Step 1: Switch to Haiku (Fast Mode)

Type:
```
/model haiku
```

Now ask a simple question:

> "What is BRSR and why does it matter for Indian companies?"

**What you should notice:** Haiku responds quickly. The answer is shorter and more direct. For simple questions, this is perfect.

### Step 2: Switch to Sonnet (Balanced Mode)

Type:
```
/model sonnet
```

Ask the same question:

> "What is BRSR and why does it matter for Indian companies?"

**What you should notice:** Sonnet gives a more detailed answer. It takes slightly longer but covers more ground.

### Step 3: Switch to Opus (Power Mode)

Type:
```
/model opus
```

Ask something more complex:

> "Plan out a dashboard that shows BRSR compliance status for three companies, with a progress bar for each framework section. Include what data I'd need and where it might come from."

**What you should notice:** Opus takes more time but gives a thorough, well-structured plan. It thinks more deeply about the problem. This is what you'd use for important builds.

### Step 4: Switch Back to Sonnet

For everyday work, Sonnet is your default:
```
/model sonnet
```

---

## Quick Reference: When to Use Which

| Situation | Model | Why |
|-----------|-------|-----|
| Quick question ("what does this mean?") | Haiku | Fast, cheap, good enough |
| Daily work (build a page, write a script) | Sonnet | Balanced speed and quality |
| Complex project (multi-file dashboard) | Opus | Thorough, handles complexity |
| Reviewing a plan before building | Sonnet | Good judgment, reasonable speed |
| Debugging a tricky error | Opus | Better at finding root causes |
| Sending a Slack message | Haiku or Sonnet | Simple task, either works |

---

## Bonus: Combine Plan Mode with Model Selection

For the most important tasks, combine both:

1. Switch to Opus: `/model opus`
2. Enable Plan Mode: **Shift+Tab**
3. Describe what you want
4. Review the plan carefully
5. Approve and let Opus build

This is the "premium" workflow — slowest but highest quality. Use it when the result really matters (client deliverables, important reports).

## Success Criteria

- [ ] Used Plan Mode to review a plan before building
- [ ] Built something after approving a plan
- [ ] Switched between at least two models
- [ ] Noticed the difference in speed and detail between models
- [ ] Know which model to use for different types of tasks
