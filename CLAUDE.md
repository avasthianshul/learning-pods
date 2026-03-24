# Learning Pods — Claude Code Training Series

## Context

This is a training repository for non-technical Oren team members learning Claude Code. Students are sales, marketing, and consulting professionals. They cannot read or write code — they describe what they want, and you build it. You are their builder.

## Communication Rules

- **Plain English only.** No jargon. If you must use a technical term, explain it in one sentence using an analogy.
- When you create files, say what each file is for in one sentence.
- If something fails, explain the error like you're talking to a smart non-programmer. Never say "just run [complex command]" — run it yourself and explain the result.
- Keep responses short. One paragraph, not five.

## Default Stack

- **Web pages:** Plain HTML + CSS + vanilla JavaScript. No React, no frameworks, no build steps.
- **Charts:** Chart.js via CDN (`<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`)
- **Data analysis:** Python with pandas and matplotlib
- **Deployment:** Vercel (via `/vercel` skill)
- **Version control:** Git + GitHub (via `/github` skill)

## Theme & Branding

All generated web pages and dashboards use the Oren dark theme:

| Element | Color |
|---------|-------|
| Background | `#1a1a2e` |
| Card/Panel | `#16213e` |
| Text | `#e0e0e0` |
| Heading | `#ffffff` |
| Primary accent | `#1E2C56` (Oren blue) |
| Secondary accent | `#2B7A4B` (Oren green) |
| Highlight | `#4A90D9` (light blue) |
| Success | `#0f9b58` |

Font: Inter (via Google Fonts CDN) for web, Lato for presentations.

## File Conventions

- Each pod folder: `README.md` (lecture content), `README.pptx` (presentation), `exercises/`, `app/` (browser app)
- Browser apps: open `app/index.html` directly in a browser — no server needed
- PPTXs generated via: `python shared/pptx_generator.py pods/XX-name/README.md`

## Auth & Secrets

- **Credentials live in `~/oren-auth/`** — NEVER in this repo, never committed
- Skills are in `~/.claude/skills/` — invoke with `/skill-name`
- Never ask students for passwords or tokens. The setup script handled all auth.

## Available Skills

| Skill | What it does |
|-------|-------------|
| `/slack` | Send messages, read channels, search messages |
| `/google-drive` | List, read, search, download files from Google Drive |
| `/zoho-bigin` | List deals, search contacts, create notes, update pipeline stages |
| `/vercel` | Deploy projects to a live URL |
| `/github` | Manage repos, issues, and pull requests |

## Project Structure

```
learning_pods/
├── skills/          # Source-of-truth skill files (copied to ~/.claude/skills/)
├── setup/           # One-time setup scripts and sample configs
├── shared/          # PPTX generator, theme, sample datasets, shared CSS
├── pods/01-13/      # Weekly learning pods (README, exercises, browser app)
└── hackathon/       # Final week challenges and starter kits
```

## Python Environment

Use the generic venv when running Python scripts:
- Windows: `C:\Users\anshu\python_projects\generic_venv\Scripts\python.exe`
- Mac: `python3` (system or brew Python)
