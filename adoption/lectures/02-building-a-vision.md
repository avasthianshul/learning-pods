# Lecture 2: Building a Vision

---

## Be Explicit, Not Implicit

The single biggest difference between good and bad prompts: **specificity.**

Claude can't read your mind. If you're vague, you'll get something generic. If you're specific, you'll get exactly what you want.

---

## Before & After: Vague vs. Specific

**Vague prompt:**
> "Make me a dashboard"

**What Claude hears:** A dashboard... of what? For whom? What should it show? What should it look like?

**Specific prompt:**
> "Create a dashboard that shows our team's weekly sales pipeline. It should have a bar chart showing deals by stage (Lead, Qualified, Proposal, Closed), a total deal value counter at the top, and use the Oren dark theme. Pull sample data from a CSV file."

**What Claude hears:** Got it. Bar chart, 4 stages, summary counter, dark theme, CSV data. Building now.

The second prompt takes 30 extra seconds to write. It saves 10 minutes of back-and-forth.

---

## The Specificity Checklist

Before you hit enter on a prompt, ask yourself:

- **What** am I building? (dashboard, report, automation, page)
- **Who** is it for? (me, the team, a client)
- **What data** does it use? (CSV, API, manual input)
- **What should it look like?** (colors, layout, style)
- **What should it do?** (sort, filter, calculate, display)

You don't need all five every time. But the more you include, the better your first result.

---

## Try It Now

Think of something you actually need at work — a tracker, a report, a simple tool.

Open Claude Code and describe it as specifically as you can. Use the checklist:
- What is it?
- Who is it for?
- What data?
- What does it look like?
- What does it do?

**Take 5 minutes. Write the prompt. Run it. See what happens.**

---

## Use APIs, Build Your Own Workflows

There are tons of pre-built AI workflows out there — templates, automations, plug-and-play tools.

**Use the APIs. Skip the workflows.**

Why? Two reasons:

1. **Practice.** Building your own workflow is how you learn. Using someone else's is like reading about swimming — it doesn't make you a swimmer.
2. **Fit.** Pre-built workflows are designed for the average user. Your needs are specific. Build for your actual situation.

The APIs (Slack, Google Drive, Zoho, GitHub) are building blocks. Claude can wire them together however you need. But *you* have to describe the workflow you want.

---

## Getting an Initial Draft

The best way to start any project with Claude: **get a bad first draft fast.**

Don't try to get it perfect on the first prompt. Instead:

1. **Describe the big picture** — what you're building and why
2. **Let Claude build a first version** — it won't be perfect, that's fine
3. **React to what you see** — "this part is good, change that part"
4. **Iterate** — each round gets closer to what you want

This is faster than trying to write the perfect prompt upfront. You'll figure out what you want by seeing what you don't want.

---

## Let's Build Together

Pick one of these projects (or bring your own idea):

- **A client meeting prep page** — paste a company name, see key info organized nicely
- **A weekly status tracker** — table where you log what you did each day
- **A deal calculator** — input deal parameters, see projected revenue

Start with the big picture prompt. Get the first draft. Then we'll iterate together.

**Open Claude Code and go.**

---

## Local Hosting

Right now, when you build an HTML page, you open the file directly in your browser. That works fine for simple pages.

But for anything that talks to data or updates live, you need a **local server** — a way to "run" your project on your own computer so it behaves like a real website.

---

## Try It Now

In Claude Code, say:

```
Can you serve this project locally so I can see it in my browser?
```

Claude will start a local server and give you a URL (usually `http://localhost:3000` or similar).

Open that URL. Now your project is running like a real app — it can fetch data, respond to clicks, and update in real time.

**This is how you'll work from now on: build, serve locally, iterate.**

---

## Chat Review

Let's look at conversations from this week.

Questions to ask as we review:
- Was the first prompt specific enough?
- How many rounds did it take to get to the right result?
- Where did the conversation go sideways? Why?
- What would you say differently next time?

*Who wants to share?*

---

## Recap

What we covered today:

1. Be explicit, not implicit — specificity is the #1 skill
2. Use the checklist: what, who, data, look, behavior
3. Use APIs as building blocks, build your own workflows
4. Get a bad first draft fast, then iterate
5. Local hosting — serve your project so it runs like a real app

**Next lecture: Refining a Vision — continuous revision and shipping to the world.**
