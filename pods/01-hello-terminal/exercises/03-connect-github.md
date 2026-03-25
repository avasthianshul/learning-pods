# Exercise 3: Connect to GitHub

**Time:** 10 minutes

## What You'll Do

Connect Claude Code to GitHub so your work is always saved and shareable. This has three parts — Claude does most of the work for you.

## Steps

### Part 1: Install GitHub CLI (Inside Claude Code)

1. In your Claude Code session (from Exercise 2), type:

   > Install the GitHub command-line tool for me

2. Claude will figure out your operating system and run the right command:
   - On Mac, it runs `brew install gh`
   - On Windows, it runs `winget install GitHub.cli`

3. If Claude asks for permission to run a command, say **yes**

4. Wait for the install to finish — Claude will tell you when it's done

### Part 2: Log In to GitHub (In Warp — Not Claude Code)

This is the one step you do outside of Claude Code, because GitHub needs to open your browser:

1. **Don't close your Claude Code session!** Open a **new Warp tab** instead (click the + button at the top)

2. In the new tab, type:
   ```
   gh auth login
   ```

3. You'll see a series of questions. Choose these answers:
   - **Where do you use GitHub?** → `GitHub.com`
   - **Preferred protocol for Git?** → `HTTPS`
   - **Authenticate Git with your GitHub credentials?** → `Yes`
   - **How would you like to authenticate?** → `Login with a web browser`

4. It will show you a **one-time code** and open your browser

5. In your browser:
   - Paste the code when asked
   - Click **Authorize**
   - You'll see a success message

6. **Close this Warp tab** and go back to your Claude Code tab

### Part 3: Verify (Back in Claude Code)

1. In your Claude Code session, type:

   > Check if GitHub is connected

2. Claude will run `gh auth status` and show you the result

3. You should see your GitHub username — that means it worked!

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `gh: command not found` after install | Close Warp completely and reopen it, then try `gh auth login` again |
| Browser didn't open | Copy the URL that `gh auth login` printed and paste it in your browser manually |
| "Bad credentials" error | Run `gh auth login` again — you may have taken too long on the browser step |
| Forgot GitHub password | Go to github.com, click "Forgot password", and reset it |

## Success Criteria

- [ ] GitHub CLI is installed (Claude did this for you)
- [ ] You ran `gh auth login` in a Warp tab
- [ ] You authorized in your browser
- [ ] Claude confirmed the connection works (gh auth status shows your username)
