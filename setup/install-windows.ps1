# Oren Learning Pods — Windows Setup Script
# Run: powershell setup/install-windows.ps1
#
# This script installs and configures all tools needed for the learning pod series.
# It's safe to run multiple times (idempotent).
# Requires: Windows 10/11 with winget available

$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "=================================================" -ForegroundColor White
Write-Host "  Oren Learning Pods — Windows Setup"
Write-Host "=================================================" -ForegroundColor White
Write-Host ""

# --- Step 1: Node.js ---
Write-Host "[1/8] Checking Node.js..." -ForegroundColor White
$node = Get-Command node -ErrorAction SilentlyContinue
if ($node) {
    $nodeVersion = node --version
    Write-Host "  [OK] Node.js $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "  [INSTALLING] Node.js..." -ForegroundColor Yellow
    winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

# --- Step 2: Git ---
Write-Host ""
Write-Host "[2/8] Checking Git..." -ForegroundColor White
$git = Get-Command git -ErrorAction SilentlyContinue
if ($git) {
    $gitVersion = git --version
    Write-Host "  [OK] $gitVersion" -ForegroundColor Green
} else {
    Write-Host "  [INSTALLING] Git..." -ForegroundColor Yellow
    winget install Git.Git --accept-source-agreements --accept-package-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

# --- Step 3: GitHub CLI ---
Write-Host ""
Write-Host "[3/8] Checking GitHub CLI..." -ForegroundColor White
$gh = Get-Command gh -ErrorAction SilentlyContinue
if ($gh) {
    $ghVersion = (gh --version | Select-Object -First 1)
    Write-Host "  [OK] $ghVersion" -ForegroundColor Green
} else {
    Write-Host "  [INSTALLING] GitHub CLI..." -ForegroundColor Yellow
    winget install GitHub.cli --accept-source-agreements --accept-package-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

# --- Step 4: Python ---
Write-Host ""
Write-Host "[4/8] Checking Python..." -ForegroundColor White
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    $pyVersion = python --version
    Write-Host "  [OK] $pyVersion" -ForegroundColor Green
} else {
    Write-Host "  [INSTALLING] Python..." -ForegroundColor Yellow
    winget install Python.Python.3.13 --accept-source-agreements --accept-package-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

# --- Step 5: Claude Code ---
Write-Host ""
Write-Host "[5/8] Checking Claude Code..." -ForegroundColor White
$claude = Get-Command claude -ErrorAction SilentlyContinue
if ($claude) {
    Write-Host "  [OK] Claude Code is installed" -ForegroundColor Green
} else {
    Write-Host "  [INSTALLING] Claude Code..." -ForegroundColor Yellow
    npm install -g @anthropic-ai/claude-code
}

# --- Step 6: Auth directory ---
Write-Host ""
Write-Host "[6/8] Setting up auth directory..." -ForegroundColor White
$AuthDir = Join-Path $env:USERPROFILE "oren-auth"
if (-not (Test-Path $AuthDir)) {
    New-Item -ItemType Directory -Path $AuthDir -Force | Out-Null
}
Write-Host "  [OK] Auth directory: $AuthDir" -ForegroundColor Green

# Slack token
$SlackFile = Join-Path $AuthDir "slack.env"
if (-not (Test-Path $SlackFile)) {
    Write-Host ""
    Write-Host "Slack Setup" -ForegroundColor Yellow
    Write-Host "Ask Anshul for your Slack bot token, then paste it here."
    $SlackToken = Read-Host "Slack bot token (or press Enter to skip)"
    if ($SlackToken) {
        "SLACK_BOT_TOKEN=$SlackToken" | Out-File -FilePath $SlackFile -Encoding utf8
        Write-Host "  [OK] Slack token saved" -ForegroundColor Green
    } else {
        Write-Host "  [SKIP] Slack - you can add this later" -ForegroundColor Yellow
    }
} else {
    Write-Host "  [OK] Slack credentials found" -ForegroundColor Green
}

# Zoho token
$ZohoFile = Join-Path $AuthDir "zoho.json"
if (-not (Test-Path $ZohoFile)) {
    Write-Host ""
    Write-Host "Zoho Bigin Setup" -ForegroundColor Yellow
    Write-Host "Ask Anshul for your Zoho refresh token, then paste it here."
    $ZohoToken = Read-Host "Zoho refresh token (or press Enter to skip)"
    if ($ZohoToken) {
        $zohoConfig = @{
            client_id = "SHARED_CLIENT_ID"
            client_secret = "SHARED_CLIENT_SECRET"
            refresh_token = $ZohoToken
            base_url = "https://www.zohoapis.in"
            accounts_url = "https://accounts.zoho.in"
        }
        $zohoConfig | ConvertTo-Json | Out-File -FilePath $ZohoFile -Encoding utf8
        Write-Host "  [OK] Zoho credentials saved" -ForegroundColor Green
        Write-Host "  Note: Anshul will update client_id and client_secret during the session." -ForegroundColor Yellow
    } else {
        Write-Host "  [SKIP] Zoho - you can add this later" -ForegroundColor Yellow
    }
} else {
    Write-Host "  [OK] Zoho credentials found" -ForegroundColor Green
}

# --- Step 7: Copy skills ---
Write-Host ""
Write-Host "[7/8] Installing Claude Code skills..." -ForegroundColor White
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
& powershell (Join-Path $ScriptDir "copy-skills.ps1")

# --- Step 8: Setup notification hook ---
Write-Host ""
Write-Host "[8/8] Setting up notification hook..." -ForegroundColor White
$ClaudeDir = Join-Path $env:USERPROFILE ".claude"
if (-not (Test-Path $ClaudeDir)) {
    New-Item -ItemType Directory -Path $ClaudeDir -Force | Out-Null
}
Write-Host "  [INFO] Claude notification hooks will be configured during the session" -ForegroundColor Yellow

# --- Authentication flows ---
Write-Host ""
Write-Host "=================================================" -ForegroundColor White
Write-Host "  Now let's log into your accounts"
Write-Host "=================================================" -ForegroundColor White

# GitHub auth
Write-Host ""
Write-Host "GitHub Login" -ForegroundColor White
$ghAuth = gh auth status 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "  [OK] Already logged in to GitHub" -ForegroundColor Green
} else {
    Write-Host "  This will open your browser for GitHub login..."
    gh auth login -w
}

# Vercel auth
Write-Host ""
Write-Host "Vercel Login" -ForegroundColor White
$vercelWhoami = npx vercel whoami 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "  [OK] Already logged in to Vercel" -ForegroundColor Green
} else {
    Write-Host "  This will open your browser for Vercel login..."
    npx vercel login
}

# Google Drive
Write-Host ""
Write-Host "Google Drive Setup" -ForegroundColor White
$GDriveFile = Join-Path $AuthDir "gdrive-token.json"
if (Test-Path $GDriveFile) {
    Write-Host "  [OK] Google Drive credentials found" -ForegroundColor Green
} else {
    Write-Host "  [INFO] Google Drive OAuth will be configured during the session." -ForegroundColor Yellow
    Write-Host "         We'll walk through this together."
}

# --- Done ---
Write-Host ""
Write-Host "=================================================" -ForegroundColor White
Write-Host "  Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Run the verification script to check everything:"
Write-Host "  python setup/verify.py" -ForegroundColor White
Write-Host "=================================================" -ForegroundColor White
Write-Host ""
