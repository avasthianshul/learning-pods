#!/bin/bash
# Oren Learning Pods — Mac Setup Script
# Run: bash setup/install-mac.sh
#
# This script installs and configures all tools needed for the learning pod series.
# It's safe to run multiple times (idempotent).

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'
BOLD='\033[1m'

echo ""
echo "${BOLD}=================================================${NC}"
echo "  Oren Learning Pods — Mac Setup"
echo "${BOLD}=================================================${NC}"
echo ""

# --- Step 1: Homebrew ---
echo "${BOLD}[1/8] Checking Homebrew...${NC}"
if command -v brew &> /dev/null; then
    echo "${GREEN}[OK]${NC} Homebrew is installed"
else
    echo "${YELLOW}[INSTALLING]${NC} Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# --- Step 2: Node.js ---
echo ""
echo "${BOLD}[2/8] Checking Node.js...${NC}"
if command -v node &> /dev/null; then
    echo "${GREEN}[OK]${NC} Node.js $(node --version)"
else
    echo "${YELLOW}[INSTALLING]${NC} Node.js..."
    brew install node
fi

# --- Step 3: Git ---
echo ""
echo "${BOLD}[3/8] Checking Git...${NC}"
if command -v git &> /dev/null; then
    echo "${GREEN}[OK]${NC} $(git --version)"
else
    echo "${YELLOW}[INSTALLING]${NC} Git..."
    brew install git
fi

# --- Step 4: GitHub CLI ---
echo ""
echo "${BOLD}[4/8] Checking GitHub CLI...${NC}"
if command -v gh &> /dev/null; then
    echo "${GREEN}[OK]${NC} $(gh --version | head -1)"
else
    echo "${YELLOW}[INSTALLING]${NC} GitHub CLI..."
    brew install gh
fi

# --- Step 5: Claude Code ---
echo ""
echo "${BOLD}[5/8] Checking Claude Code...${NC}"
if command -v claude &> /dev/null; then
    echo "${GREEN}[OK]${NC} Claude Code is installed"
else
    echo "${YELLOW}[INSTALLING]${NC} Claude Code..."
    npm install -g @anthropic-ai/claude-code
fi

# --- Step 6: Auth directory ---
echo ""
echo "${BOLD}[6/8] Setting up auth directory...${NC}"
AUTH_DIR="$HOME/oren-auth"
mkdir -p "$AUTH_DIR"
echo "${GREEN}[OK]${NC} Auth directory: $AUTH_DIR"

# Slack token
if [ ! -f "$AUTH_DIR/slack.env" ]; then
    echo ""
    echo "${YELLOW}Slack Setup${NC}"
    echo "Ask Anshul for your Slack bot token, then paste it here."
    read -p "Slack bot token (or press Enter to skip): " SLACK_TOKEN
    if [ -n "$SLACK_TOKEN" ]; then
        echo "SLACK_BOT_TOKEN=$SLACK_TOKEN" > "$AUTH_DIR/slack.env"
        echo "${GREEN}[OK]${NC} Slack token saved"
    else
        echo "${YELLOW}[SKIP]${NC} Slack — you can add this later"
    fi
else
    echo "${GREEN}[OK]${NC} Slack credentials found"
fi

# Zoho token
if [ ! -f "$AUTH_DIR/zoho.json" ]; then
    echo ""
    echo "${YELLOW}Zoho Bigin Setup${NC}"
    echo "Ask Anshul for your Zoho refresh token, then paste it here."
    read -p "Zoho refresh token (or press Enter to skip): " ZOHO_TOKEN
    if [ -n "$ZOHO_TOKEN" ]; then
        cat > "$AUTH_DIR/zoho.json" << ZOHOEOF
{
  "client_id": "SHARED_CLIENT_ID",
  "client_secret": "SHARED_CLIENT_SECRET",
  "refresh_token": "$ZOHO_TOKEN",
  "base_url": "https://www.zohoapis.in",
  "accounts_url": "https://accounts.zoho.in"
}
ZOHOEOF
        echo "${GREEN}[OK]${NC} Zoho credentials saved"
        echo "${YELLOW}Note:${NC} Anshul will update client_id and client_secret during the session."
    else
        echo "${YELLOW}[SKIP]${NC} Zoho — you can add this later"
    fi
else
    echo "${GREEN}[OK]${NC} Zoho credentials found"
fi

# --- Step 7: Copy skills ---
echo ""
echo "${BOLD}[7/8] Installing Claude Code skills...${NC}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
bash "$SCRIPT_DIR/copy-skills.sh"

# --- Step 8: Setup notification hook ---
echo ""
echo "${BOLD}[8/8] Setting up notification hook...${NC}"
CLAUDE_SETTINGS="$HOME/.claude/settings.json"
mkdir -p "$HOME/.claude"

if [ -f "$CLAUDE_SETTINGS" ]; then
    echo "${GREEN}[OK]${NC} Claude settings file exists — add notification hook manually if needed"
else
    echo "${YELLOW}[INFO]${NC} Claude settings will be configured during the session"
fi

# --- Authentication flows ---
echo ""
echo "${BOLD}=================================================${NC}"
echo "  Now let's log into your accounts"
echo "${BOLD}=================================================${NC}"

# GitHub auth
echo ""
echo "${BOLD}GitHub Login${NC}"
if gh auth status &> /dev/null; then
    echo "${GREEN}[OK]${NC} Already logged in to GitHub"
else
    echo "This will open your browser for GitHub login..."
    gh auth login -w
fi

# Vercel auth
echo ""
echo "${BOLD}Vercel Login${NC}"
if npx vercel whoami &> /dev/null 2>&1; then
    echo "${GREEN}[OK]${NC} Already logged in to Vercel"
else
    echo "This will open your browser for Vercel login..."
    npx vercel login
fi

# Google Drive auth
echo ""
echo "${BOLD}Google Drive Setup${NC}"
if [ -f "$AUTH_DIR/gdrive-token.json" ]; then
    echo "${GREEN}[OK]${NC} Google Drive credentials found"
else
    echo "${YELLOW}[INFO]${NC} Google Drive OAuth will be configured during the session."
    echo "        We'll walk through this together."
fi

# --- Done ---
echo ""
echo "${BOLD}=================================================${NC}"
echo "  ${GREEN}Setup complete!${NC}"
echo ""
echo "  Run the verification script to check everything:"
echo "  ${BOLD}python3 setup/verify.py${NC}"
echo "${BOLD}=================================================${NC}"
echo ""
