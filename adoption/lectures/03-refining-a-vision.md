# Lecture 3: Refining a Vision

---

## Your First Draft Is Never the Final Product

Last lecture, we got a first draft out fast. This lecture is about what happens next.

The best builders don't write one perfect prompt. They **revise.** Over and over.

Think of it like editing a document:
- First draft: get the ideas down
- Second draft: reorganize and clarify
- Third draft: polish the details

Claude Code works the same way. The revision loop is where the real quality happens.

---

## The Revision Loop

Here's the pattern:

1. **Look at what you have** — open it, click around, use it
2. **Notice what's wrong** — too cluttered? Missing a feature? Wrong colors?
3. **Describe the change** — be specific about what to fix
4. **Let Claude update it** — watch the change happen
5. **Repeat**

Each loop takes 1-2 minutes. After 5-6 loops, you have something genuinely good.

**The key insight: don't try to think of everything upfront.** React to what you see. Your taste is your guide.

---

## Good Revision Prompts

Revisions work best when you're specific about *what* to change and *why*:

| Instead of... | Say... |
|---------------|--------|
| "Make it better" | "The table is hard to read — add alternating row colors and more padding" |
| "Fix the layout" | "Move the summary cards to the top and make them smaller" |
| "It looks weird" | "The font is too small on mobile — make body text at least 16px" |
| "Add more features" | "Add a search bar at the top that filters the table by name" |

Notice the pattern: **what** + **how** (or **what** + **why**).

---

## Try It Now

Open the project you built last lecture. Look at it with fresh eyes.

Write down 3 things you'd change. Then open Claude Code and describe each change, one at a time.

**Take 5 minutes. Revise. See how it improves.**

---

## Don't Use Browser Automation

Quick tip as you get more ambitious:

If you want Claude to interact with a website — pulling data, filling forms, checking status — there are two approaches:

| Approach | Speed | Reliability |
|----------|-------|-------------|
| **API / CLI** | Fast (~300ms) | Very reliable |
| **Browser automation** (clicking through a browser) | Slow (~10s+) | Breaks often |

**Always prefer the API or CLI.** Browser automation looks cool in demos but it breaks constantly — buttons move, pages change, loading times vary.

Most services you use (Slack, Google Drive, Zoho, GitHub) have APIs. Tell Claude to use the API, not the browser.

---

## Let's Ship It

Today we're putting something on the internet.

You've built a project. You've revised it. Now let's make it live — a real URL that anyone can visit.

We'll use **Vercel** — it takes your project and hosts it at a public URL in about 30 seconds.

---

## Deploying to Vercel

In Claude Code, say:

```
Deploy this project to Vercel. Give me a live URL I can share.
```

Claude will:
1. Set up the deployment
2. Push your project to Vercel
3. Give you a URL like `your-project.vercel.app`

Open that URL. Share it with someone. **You just shipped a live website by describing it in English.**

---

## Try It Now

Deploy the project you've been working on. Once it's live:

1. Open the URL on your phone — does it look right?
2. Send the link to a teammate — ask them to try it
3. If something's off, go back to Claude Code and fix it, then redeploy

**This is the full loop: build, revise, ship, get feedback, revise again.**

---

## What We Built Across 3 Lectures

Let's step back and look at the journey:

**Lecture 1:** We set up our workspace, connected to GitHub, and built our first HTML page.

**Lecture 2:** We learned to be specific, got a first draft of a real project, and ran it locally.

**Lecture 3:** We revised it until it was good, then shipped it live to the internet.

You went from "I've never used a terminal" to "I have a live website" in 3 sessions.

---

## What Surprised You?

Open discussion:

- What was easier than you expected?
- What was harder?
- What would you build next, now that you know how this works?
- How does this change the way you think about your day-to-day work?

---

## Chat Review

Final chat review for this arc. Let's look at conversations from the past week.

Focus on:
- How has your prompting improved since Lecture 1?
- Where are you still being vague when you could be specific?
- What's your workflow now? Has it changed?

*Who wants to share?*

---

## Recap

What we covered today:

1. The revision loop — build, react, describe changes, repeat
2. Good revision prompts: what + how, what + why
3. Don't use browser automation — prefer APIs and CLI
4. Vercel deployment — ship a live site in 30 seconds
5. The full loop: build, revise, ship, feedback, revise again

**You now have the foundation. Everything from here builds on these skills.**
