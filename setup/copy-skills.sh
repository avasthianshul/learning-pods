#!/bin/bash
# Copy skills from the learning_pods repo to ~/.claude/skills/
# Usage: bash setup/copy-skills.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_SKILLS="$SCRIPT_DIR/../skills"
TARGET_SKILLS="$HOME/.claude/skills"

echo "=== Copying Claude Code Skills ==="
echo "From: $REPO_SKILLS"
echo "To:   $TARGET_SKILLS"
echo ""

mkdir -p "$TARGET_SKILLS"

for skill_dir in "$REPO_SKILLS"/*/; do
    skill_name=$(basename "$skill_dir")
    target_dir="$TARGET_SKILLS/$skill_name"

    mkdir -p "$target_dir"
    cp "$skill_dir"SKILL.md "$target_dir/SKILL.md"
    echo "[OK] Copied: $skill_name"
done

echo ""
echo "Done! All skills installed to ~/.claude/skills/"
echo "Claude Code will pick them up automatically in your next session."
