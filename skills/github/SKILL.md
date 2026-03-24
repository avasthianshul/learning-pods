---
name: github
description: Interact with GitHub — create and manage repos, issues, and pull requests. Use when the user wants to perform GitHub operations like creating repos, filing issues, opening PRs, or browsing repositories.
allowed-tools: Bash(gh *)
argument-hint: [action] [resource] [arguments]
---

# GitHub Integration

Interact with GitHub using the GitHub CLI (`gh`).

## Authentication

No credential file is needed. The GitHub CLI handles authentication interactively.

If the user is not authenticated, instruct them to run:
```bash
gh auth login
```

To check if already authenticated:
```bash
gh auth status
```

## Available Actions

Determine the action from `$ARGUMENTS`. Common patterns:

- `/github create-repo my-new-repo` — create a new repository
- `/github list-repos` — list your repositories
- `/github create-issue owner/repo Bug title` — create an issue
- `/github list-issues owner/repo` — list issues
- `/github create-pr` — create a pull request from the current branch
- `/github view-pr owner/repo 42` — view a pull request
- `/github clone owner/repo` — clone a repository

## CLI Reference

### Repositories

#### Create a new public repository
```bash
gh repo create REPO_NAME --public --description "Description here"
```

#### Create a new private repository
```bash
gh repo create REPO_NAME --private --description "Description here"
```

#### Create a repo and clone it locally
```bash
gh repo create REPO_NAME --public --clone --description "Description here"
```

#### List your repositories
```bash
gh repo list --limit 30
```

#### List repos for an organization
```bash
gh repo list ORG_NAME --limit 30
```

#### View repository details
```bash
gh repo view OWNER/REPO
```

#### Clone a repository
```bash
gh repo clone OWNER/REPO
```

#### Clone to a specific directory
```bash
gh repo clone OWNER/REPO /absolute/path/to/directory
```

### Issues

#### Create an issue
```bash
gh issue create --repo OWNER/REPO --title "Issue title" --body "Issue description"
```

#### Create an issue with labels
```bash
gh issue create --repo OWNER/REPO --title "Issue title" --body "Description" --label "bug,priority:high"
```

#### List open issues
```bash
gh issue list --repo OWNER/REPO --limit 30
```

#### List issues with filters
```bash
gh issue list --repo OWNER/REPO --label "bug" --state open --limit 30
```

#### View an issue
```bash
gh issue view ISSUE_NUMBER --repo OWNER/REPO
```

#### Close an issue
```bash
gh issue close ISSUE_NUMBER --repo OWNER/REPO
```

### Pull Requests

#### Create a pull request from current branch
```bash
gh pr create --title "PR title" --body "PR description"
```

#### Create a PR targeting a specific base branch
```bash
gh pr create --base main --title "PR title" --body "PR description"
```

#### Create a PR with reviewers
```bash
gh pr create --title "PR title" --body "PR description" --reviewer user1,user2
```

#### List open pull requests
```bash
gh pr list --repo OWNER/REPO --limit 30
```

#### View a pull request
```bash
gh pr view PR_NUMBER --repo OWNER/REPO
```

#### View PR diff
```bash
gh pr diff PR_NUMBER --repo OWNER/REPO
```

#### View PR checks/status
```bash
gh pr checks PR_NUMBER --repo OWNER/REPO
```

#### Merge a pull request
```bash
gh pr merge PR_NUMBER --repo OWNER/REPO --squash
```

#### List PR comments
```bash
gh api repos/OWNER/REPO/pulls/PR_NUMBER/comments
```

### General

#### View notifications
```bash
gh api notifications --method GET
```

#### Search repositories
```bash
gh search repos "search query" --limit 10
```

#### Search issues across GitHub
```bash
gh search issues "search query" --limit 10
```

## Important Rules

1. **Check auth first** — before any operation, verify the user is authenticated with `gh auth status`. If not authenticated, instruct them to run `gh auth login`.
2. **Confirm before destructive actions** — before deleting repos, closing issues, or merging PRs, show the user what will happen and ask for confirmation.
3. **Use --repo flag** — when operating outside a git repository, always specify `--repo OWNER/REPO` explicitly.
4. **Repo name resolution** — users may say just the repo name (e.g., "my-project"). If the owner is ambiguous, check `gh auth status` to determine the current user, or ask the user to clarify the owner.
5. **Format results nicely** — when listing repos, issues, or PRs, present the key fields (title, number, state, URL) in a readable format.
6. **Handle errors** — if a `gh` command fails, report the error message. Common issues: not authenticated, repo not found, insufficient permissions.
7. **PR context** — when creating a PR, the command must be run from within a git repository with the current branch pushed to remote. If not, instruct the user to push first.
8. **Avoid interactive flags** — never use `-i` or `--interactive` flags. Always provide all required fields via command flags.
