# Exercise 1: Clone the Repo and Run the Setup Script

**Time:** 10 minutes

## Prerequisites

- Warp terminal installed and working (from Pod 01)
- `~/claude_projects/` folder exists (from Pod 01)
- Your facilitator has shared the token instructions document

## Steps

### Step 1: Open Warp and Navigate to Your Projects Folder

```
cd ~/claude_projects
```

Verify you're in the right place:
```
pwd
```

You should see something like `/c/Users/yourname/claude_projects` (Windows) or `/Users/yourname/claude_projects` (Mac).

### Step 2: Clone the Learning Pods Repository

If you already cloned this last week, skip to Step 3.

```
git clone https://github.com/avasthianshul/learning_pods.git
```

You should see output like:
```
Cloning into 'learning_pods'...
remote: Enumerating objects: ...
Resolving deltas: 100% (...), done.
```

If you already have it, pull the latest updates instead:
```
cd ~/claude_projects/learning_pods
git pull
```

### Step 3: Go Into the Repository

```
cd ~/claude_projects/learning_pods
```

List the contents to make sure everything is there:
```
ls
```

You should see folders like `pods/`, `setup/`, `skills/`, `shared/`.

### Step 4: Run the Setup Script

**On Mac / Linux:**
```
./setup/install-mac.sh
```

**On Windows (PowerShell):**
```
.\setup\install-windows.ps1
```

The script will walk you through each tool, one at a time. It will ask for tokens.

### Step 5: Enter Your Tokens

The script will prompt you for each token. Your facilitator will show you where to get each one:

#### GitHub Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Claude Code"
4. Select scopes: `repo`, `workflow`, `read:org`
5. Copy the token and paste it when the script asks

#### Vercel Token
1. Go to https://vercel.com/account/tokens
2. Click "Create"
3. Name it "Claude Code", set scope to your account
4. Copy the token and paste it when the script asks

#### Slack Token
1. Your facilitator will provide the Slack bot token
2. It starts with `xoxb-` or `xoxp-`
3. Paste it when the script asks

#### Google Drive
1. Your facilitator will walk you through the Google OAuth flow
2. You'll be redirected to a Google sign-in page
3. Approve access and the script will save the credentials automatically

#### Zoho Bigin
1. Your facilitator will provide the Bigin API credentials
2. You'll need: Client ID, Client Secret, and Refresh Token
3. Enter each one when the script asks

### Step 6: Verify the Tokens Were Saved

Check that your locked drawer has everything:
```
ls ~/oren-auth/
```

You should see files for each service. These are your keys — they stay on your machine and never get shared.

## Troubleshooting

### "Permission denied" when running the script
- **Mac:** Run `chmod +x setup/install-mac.sh` first, then try again
- **Windows:** Open PowerShell as Administrator, or run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

### "git clone" fails with authentication error
- Make sure you have a GitHub account
- Your facilitator can help you set up SSH keys if needed

### Script says "token invalid" for one of the services
- Double-check you copied the entire token (no extra spaces)
- Make sure you didn't accidentally include a newline at the end
- Try generating a new token and running just that part of setup again

## Success Criteria

- [ ] `~/claude_projects/learning_pods/` exists with all folders
- [ ] Setup script completed without errors
- [ ] `~/oren-auth/` contains credential files for all five services
- [ ] No error messages during setup
