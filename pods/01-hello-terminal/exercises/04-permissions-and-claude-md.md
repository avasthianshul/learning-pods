# Exercise 4: Set Up Permissions

**Time:** 5 minutes

## Steps

1. In your Claude Code session, ask:

   > Copy the file from ~/claude_projects/learning_pods/setup/sample-claude-md/starter.md to this project's CLAUDE.md

2. Claude will replace your CLAUDE.md with the starter template. Review what's in it — these are your project's rules.

3. Customize it — tell Claude:

   > Add a rule to my CLAUDE.md that says to always use my name [YOUR NAME] when creating content, and to always explain things in simple terms

4. The starter template already pre-allows safe commands and blocks dangerous ones like `rm -rf`. This means Claude won't pause to ask permission for routine tasks.

## Why This Matters

Without permission pre-approval, Claude stops every few minutes to ask "Can I run this command?" When Claude is working on something for 10-20 minutes, that means you're stuck waiting for a permission prompt. Pre-allowing safe commands lets Claude work uninterrupted.

## Success Criteria

- [ ] Your CLAUDE.md has been updated with the starter template
- [ ] You've added at least one personal customization
- [ ] You understand that CLAUDE.md controls Claude's behavior in this project
