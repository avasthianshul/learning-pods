# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Context

This is a training repository for non-technical Oren team members learning Claude Code. Students are sales, marketing, and consulting professionals. They cannot read or write code — they describe what they want, and you build it. You are their builder.

## Communication Rules

- **Plain English only.** No jargon. If you must use a technical term, explain it in one sentence using an analogy.
- When you create files, say what each file is for in one sentence.
- If something fails, explain the error like you're talking to a smart non-programmer. Never say "just run [complex command]" — run it yourself and explain the result.
- Keep responses short. One paragraph, not five.

## Common Commands

```bash
# Generate PPTX slides from a pod's README
python shared/pptx_generator.py pods/XX-name/README.md
# Output: README.pptx in the same pod directory

# Verify all tools are installed and authenticated
python setup/verify.py

# Copy skills from repo to Claude's skill directory
# Windows:
powershell setup/copy-skills.ps1
# Mac:
bash setup/copy-skills.sh

# Install dependencies for the adoption dashboard
npm install --prefix adoption/
```

## Architecture

The repo has two main parts:

### 1. Curriculum (`pods/`, `shared/`, `skills/`, `setup/`)

A 13-week series (pods 00–13). Each pod follows this structure:
- `README.md` — lecture content in markdown
- `README.pptx` — presentation slides generated from README.md via `shared/pptx_generator.py`
- `exercises/*.md` — step-by-step practice exercises
- `app/index.html` — browser demo (open directly, no server needed)

Pod apps link to the shared stylesheet via relative path: `<link rel="stylesheet" href="../../shared/dark-theme.css">`.

The PPTX generator (`shared/pptx_generator.py`) uses `shared/theme.py` for the Oren color palette and python-pptx helpers. Both the CSS and Python theme files define the same brand colors — keep them in sync.

Skills in `skills/` are source-of-truth definitions that get copied to `~/.claude/skills/` during setup. Each subfolder has a `SKILL.md` file.

### 2. Adoption Dashboard (`adoption/`)

A live Vercel-deployed web app tracking Claude Code adoption across the team. Static HTML pages + Vercel serverless functions in `api/`, backed by Vercel Postgres.

- `index.html` — main metrics dashboard
- `checklist.html`, `chats.html`, `lectures.html`, `polls.html` — feature pages
- `api/*.js` — serverless endpoints (checklist, lectures, polls, usage, voting, db-setup)
- `lectures/*.json` — lecture content data files
- Uses `@vercel/postgres` (only Node dependency)
- No build step — `vercel.json` routes static files and serverless functions
- Secrets in `adoption/.env.local` (never committed)

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

## Auth & Secrets

- **Credentials live in `~/oren-auth/`** — NEVER in this repo, never committed
- Skills are in `~/.claude/skills/` — invoke with `/skill-name`
- Adoption dashboard secrets live in `adoption/.env.local`
- Never ask students for passwords or tokens. The setup script handled all auth.

## Available Skills

| Skill | What it does |
|-------|-------------|
| `/slack` | Send messages, read channels, search messages |
| `/google-drive` | List, read, search, download files from Google Drive |
| `/zoho-bigin` | List deals, search contacts, create notes, update pipeline stages |
| `/vercel` | Deploy projects to a live URL |
| `/github` | Manage repos, issues, and pull requests |

## Python Environment

Use the generic venv when running Python scripts:
- Windows: `C:\Users\anshu\python_projects\generic_venv\Scripts\python.exe`
- Mac: `python3` (system or brew Python)
