"""
Learning Pods — Connection Verification Script

Checks that all tools are installed and connected correctly.
Run: python setup/verify.py
"""

import json
import os
import shutil
import subprocess
import sys
from pathlib import Path


GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
RESET = "\033[0m"
BOLD = "\033[1m"

OK = f"{GREEN}[OK]{RESET}"
FAIL = f"{RED}[FAIL]{RESET}"
WARN = f"{YELLOW}[WARN]{RESET}"


def run_cmd(cmd, timeout=15):
    """Run a shell command and return (success, output)."""
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            shell=True,
        )
        return result.returncode == 0, result.stdout.strip()
    except (subprocess.TimeoutExpired, FileNotFoundError, OSError) as e:
        return False, str(e)


def check_command_exists(name, cmd):
    """Check if a CLI tool is installed."""
    ok, output = run_cmd(cmd)
    if ok and output:
        version = output.split("\n")[0][:60]
        print(f"  {OK} {name} — {version}")
        return True
    else:
        print(f"  {FAIL} {name} — not found. Install it first.")
        return False


def check_gh_auth():
    """Check GitHub CLI authentication."""
    ok, output = run_cmd("gh auth status")
    if ok:
        print(f"  {OK} GitHub CLI — authenticated")
        return True
    else:
        print(f"  {FAIL} GitHub CLI — not authenticated. Run: gh auth login")
        return False


def check_vercel_auth():
    """Check Vercel CLI authentication."""
    ok, output = run_cmd("npx vercel whoami")
    if ok and output:
        user = output.strip().split("\n")[-1]
        print(f"  {OK} Vercel CLI — logged in as {user}")
        return True
    else:
        print(f"  {FAIL} Vercel CLI — not logged in. Run: npx vercel login")
        return False


def check_claude():
    """Check Claude Code is available."""
    ok, output = run_cmd("claude --version")
    if ok:
        print(f"  {OK} Claude Code — {output[:40]}")
        return True
    else:
        print(f"  {FAIL} Claude Code — not found. Install via: npm install -g @anthropic-ai/claude-code")
        return False


def check_auth_file(service, filename, description, required_keys=None):
    """Check if an auth file exists and has required fields."""
    home = Path.home()
    auth_dir = home / "oren-auth"
    filepath = auth_dir / filename

    if not filepath.exists():
        print(f"  {FAIL} {service} — {filename} not found in ~/oren-auth/")
        print(f"         Fix: Ask Anshul for your {description}")
        return False

    if required_keys and filepath.suffix == ".json":
        try:
            with open(filepath) as f:
                data = json.load(f)
            missing = [k for k in required_keys if k not in data]
            if missing:
                print(f"  {FAIL} {service} — missing fields: {', '.join(missing)}")
                return False
        except json.JSONDecodeError:
            print(f"  {FAIL} {service} — {filename} is not valid JSON")
            return False

    print(f"  {OK} {service} — credentials found")
    return True


def check_skills():
    """Check if skills are installed in ~/.claude/skills/."""
    skills_dir = Path.home() / ".claude" / "skills"
    expected = ["slack", "google-drive", "zoho-bigin", "vercel", "github"]
    all_ok = True

    for skill in expected:
        skill_file = skills_dir / skill / "SKILL.md"
        if skill_file.exists():
            print(f"  {OK} Skill: {skill}")
        else:
            print(f"  {FAIL} Skill: {skill} — not installed. Run the copy-skills script.")
            all_ok = False

    return all_ok


def main():
    print(f"\n{BOLD}{'=' * 50}")
    print("  Oren Learning Pods — Connection Verifier")
    print(f"{'=' * 50}{RESET}\n")

    results = {}
    total_ok = 0
    total_checks = 0

    # Section 1: CLI Tools
    print(f"{BOLD}CLI Tools{RESET}")
    checks = [
        ("Node.js", "node --version"),
        ("Git", "git --version"),
        ("GitHub CLI", "gh --version"),
    ]
    for name, cmd in checks:
        total_checks += 1
        if check_command_exists(name, cmd):
            total_ok += 1

    total_checks += 1
    if check_claude():
        total_ok += 1

    print()

    # Section 2: Auth & Connections
    print(f"{BOLD}Authenticated Services{RESET}")

    total_checks += 1
    if check_gh_auth():
        total_ok += 1

    total_checks += 1
    if check_vercel_auth():
        total_ok += 1

    auth_checks = [
        ("Slack", "slack.env", "Slack bot token", None),
        ("Google Drive", "gdrive-token.json", "Google Drive OAuth token",
         ["access_token", "refresh_token"]),
        ("Zoho Bigin", "zoho.json", "Zoho Bigin credentials",
         ["client_id", "client_secret", "refresh_token"]),
    ]
    for args in auth_checks:
        total_checks += 1
        if check_auth_file(*args):
            total_ok += 1

    print()

    # Section 3: Skills
    print(f"{BOLD}Claude Code Skills{RESET}")
    total_checks += 1
    if check_skills():
        total_ok += 1

    print()

    # Summary
    print(f"{BOLD}{'=' * 50}{RESET}")
    if total_ok == total_checks:
        print(f"  {GREEN}{BOLD}ALL CHECKS PASSED ({total_ok}/{total_checks}){RESET}")
        print(f"  You're ready to go! 🎉")
    else:
        failed = total_checks - total_ok
        print(f"  {YELLOW}{BOLD}{total_ok}/{total_checks} passed, {failed} need attention{RESET}")
        print(f"  Fix the items marked [FAIL] above, then run this script again.")
    print(f"{BOLD}{'=' * 50}{RESET}\n")

    return 0 if total_ok == total_checks else 1


if __name__ == "__main__":
    sys.exit(main())
