---
name: vercel
description: Deploy and manage Vercel deployments — deploy projects, list deployments, and check deployment status. Use when the user wants to deploy a site, check deployment logs, or manage their Vercel projects.
allowed-tools: Bash(npx vercel *)
argument-hint: [action] [path/project]
---

# Vercel Deployment Integration

Deploy and manage projects on Vercel using the Vercel CLI.

## Authentication

No credential file is needed. The Vercel CLI handles authentication interactively.

If the user is not logged in, instruct them to run:
```bash
npx vercel login
```

To check if already authenticated:
```bash
npx vercel whoami
```

## Available Actions

Determine the action from `$ARGUMENTS`. Common patterns:

- `/vercel deploy` — deploy the current directory
- `/vercel deploy /path/to/project` — deploy a specific directory
- `/vercel list` — list recent deployments
- `/vercel status` — check status of the latest deployment
- `/vercel logs DEPLOYMENT_URL` — view deployment logs
- `/vercel inspect DEPLOYMENT_URL` — inspect a deployment

## CLI Reference

### Deploy the current directory (preview)
```bash
npx vercel --yes
```
The `--yes` flag skips confirmation prompts and accepts defaults. This creates a preview deployment.

### Deploy to production
```bash
npx vercel --prod --yes
```

### Deploy a specific directory
```bash
npx vercel /absolute/path/to/project --yes
```

### Deploy to production from a specific directory
```bash
npx vercel /absolute/path/to/project --prod --yes
```

### List recent deployments
```bash
npx vercel list
```
Shows recent deployments with their URLs, status, and creation time.

### List deployments for a specific project
```bash
npx vercel list PROJECT_NAME
```

### Inspect a deployment
```bash
npx vercel inspect DEPLOYMENT_URL
```
Shows detailed information: status, created time, build duration, domains, and more.

### View deployment logs
```bash
npx vercel logs DEPLOYMENT_URL
```
Shows build and runtime logs for a specific deployment.

### View environment variables
```bash
npx vercel env ls
```

### Pull environment variables locally
```bash
npx vercel env pull .env.local
```

### Link a local directory to a Vercel project
```bash
npx vercel link --yes
```

### Remove a deployment
```bash
npx vercel remove DEPLOYMENT_URL --yes
```

## Important Rules

1. **Check auth first** — before any operation, verify the user is logged in with `npx vercel whoami`. If not authenticated, instruct them to run `npx vercel login`.
2. **Confirm before production deploys** — before deploying to production (`--prod`), show the user the project path and ask for confirmation. Preview deployments are safe and do not need confirmation.
3. **Use absolute paths** — when deploying a specific directory, always use absolute paths.
4. **Use --yes flag** — always include `--yes` to avoid interactive prompts that would hang the CLI.
5. **Report deployment URL** — after a successful deploy, always show the user the deployment URL from the command output.
6. **Handle errors** — if a deployment fails, show the error output and suggest checking logs with `npx vercel logs`.
7. **Preview vs Production** — by default, `npx vercel` creates a preview deployment. Only use `--prod` when the user explicitly asks for a production deployment.
8. **Project detection** — Vercel auto-detects the framework (Next.js, Vite, etc.) from the project directory. If detection fails, the user may need to run `npx vercel link` first.
