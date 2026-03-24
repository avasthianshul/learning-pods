# Copy skills from the learning_pods repo to ~/.claude/skills/
# Usage: powershell setup/copy-skills.ps1

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoSkills = Join-Path $ScriptDir "..\skills"
$TargetSkills = Join-Path $env:USERPROFILE ".claude\skills"

Write-Host "=== Copying Claude Code Skills ==="
Write-Host "From: $RepoSkills"
Write-Host "To:   $TargetSkills"
Write-Host ""

if (-not (Test-Path $TargetSkills)) {
    New-Item -ItemType Directory -Path $TargetSkills -Force | Out-Null
}

Get-ChildItem -Path $RepoSkills -Directory | ForEach-Object {
    $skillName = $_.Name
    $targetDir = Join-Path $TargetSkills $skillName

    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    $sourceFile = Join-Path $_.FullName "SKILL.md"
    if (Test-Path $sourceFile) {
        Copy-Item $sourceFile (Join-Path $targetDir "SKILL.md") -Force
        Write-Host "[OK] Copied: $skillName" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Done! All skills installed to ~/.claude/skills/"
Write-Host "Claude Code will pick them up automatically in your next session."
