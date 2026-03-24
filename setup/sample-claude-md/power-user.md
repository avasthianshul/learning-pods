# My Project — Power User Template

> This is an annotated version of a real-world CLAUDE.md used daily at Oren.
> Copy it, customize the [BRACKETS], and delete the comments (lines starting with >).

## What This Project Does
[Replace with your project description]

## Communication
- Plain English only. No jargon unless you explain it.
- Keep responses short — one paragraph, not five.
- When you create files, say what each file is for in one sentence.
- If something fails, explain the error like you're talking to a smart non-programmer.

## Rules
- Ask before deleting any files
- Never run destructive commands: rm -rf, git push --force, git reset --hard, git checkout .
- Always commit to git before making big changes
- Never commit files containing secrets (.env, credentials, tokens)
- If a task is complex (3+ steps), use Plan Mode first

> Why these rules? They prevent data loss. The "Plan Mode for complex tasks" rule means
> Claude thinks before acting on anything non-trivial — like getting an architect's drawing
> before starting construction.

## Defaults
- **Web pages:** Plain HTML + CSS + vanilla JS. No React, no frameworks, no build steps.
- **Charts:** Chart.js via CDN
- **Data analysis:** Python with pandas, matplotlib
- **Deployment:** Vercel (via /vercel skill)
- **Version control:** Git + GitHub (via /github skill)

## Theme & Branding
- Background: #1a1a2e (dark navy)
- Card/Panel: #16213e
- Text: #e0e0e0 (light gray)
- Headings: #ffffff (white)
- Primary: #1E2C56 (Oren blue)
- Secondary: #2B7A4B (Oren green)
- Highlight: #4A90D9 (light blue)
- Font: Inter for web, Lato for presentations

## Workflow Preferences

### Plan First
- For any task with 3+ steps, enter Plan Mode before executing
- Write a brief plan, get approval, then build
- If something goes wrong, stop and re-plan instead of pushing forward

### Verification
- Never mark something as done without testing it
- For web pages: open in browser and verify visually
- For data scripts: run with sample data and check the output
- For deployments: verify the live URL works

## Available Skills
- /slack — send and read Slack messages
- /google-drive — read and search Google Drive files
- /zoho-bigin — query Zoho Bigin CRM (deals, contacts, pipeline)
- /vercel — deploy projects to a live URL
- /github — manage GitHub repos, issues, PRs

## My Info
- Name: [YOUR NAME]
- Role: [YOUR ROLE] at Oren
- Team: [YOUR TEAM]

> Tip: The more context you give Claude about who you are and what you do,
> the better it tailors its responses. A sales person gets different answers
> than an engineer — that's a feature.
