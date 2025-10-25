#!/bin/bash

# Quick Commits Script
# Creates multiple meaningful commits for improvements

echo "🎯 Quick Commits for Portfolio Improvements"
echo "============================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to commit changes
commit_changes() {
    local type=$1
    local message=$2
    local files=$3
    
    echo -e "${BLUE}📝 Committing: $message${NC}"
    git add $files
    git commit -m "$type: $message"
    echo -e "${GREEN}✅ Done${NC}"
    echo ""
}

# Check if there are changes
if [[ -z $(git status -s) ]]; then
    echo "❌ No changes to commit"
    exit 0
fi

echo "This script will create multiple commits for different improvements."
read -p "Continue? (y/n): " confirm

if [[ $confirm != "y" && $confirm != "Y" ]]; then
    echo "❌ Cancelled"
    exit 0
fi

echo ""
echo "Creating commits..."
echo ""

# 1. SEO improvements
if git status -s | grep -q "robots.txt\|sitemap.xml"; then
    commit_changes "feat" "add SEO optimization with robots.txt and sitemap.xml" "public/robots.txt public/sitemap.xml"
fi

# 2. Code quality tools
if git status -s | grep -q ".prettierrc\|.editorconfig"; then
    commit_changes "chore" "setup code formatting with Prettier and EditorConfig" ".prettierrc .prettierignore .editorconfig"
fi

# 3. Custom hooks
if git status -s | grep -q "src/hooks"; then
    commit_changes "feat" "add custom React hooks for common UI patterns" "src/hooks/"
fi

# 4. Skeleton component
if git status -s | grep -q "Skeleton"; then
    commit_changes "feat" "add skeleton loading components for better UX" "src/components/UI/Skeleton.*"
fi

# 5. CI/CD
if git status -s | grep -q ".github/workflows"; then
    commit_changes "ci" "setup CI/CD pipeline with GitHub Actions" ".github/workflows/"
fi

# 6. TypeScript improvements
if git status -s | grep -q "tsconfig.json\|env.d.ts"; then
    commit_changes "chore" "improve TypeScript configuration and type safety" "tsconfig.json src/types/env.d.ts"
fi

# 7. Build configuration
if git status -s | grep -q "vite.config.ts\|package.json"; then
    commit_changes "perf" "optimize build configuration and add useful scripts" "vite.config.ts package.json"
fi

# 8. VSCode settings
if git status -s | grep -q ".vscode"; then
    commit_changes "chore" "add VSCode settings and recommended extensions" ".vscode/"
fi

# 9. Security and deployment
if git status -s | grep -q "_headers\|_redirects"; then
    commit_changes "security" "add security headers and deployment configuration" "public/_headers public/_redirects"
fi

# 10. Documentation
if git status -s | grep -q "CHANGELOG\|IMPROVEMENTS\|COMMIT_TEMPLATE"; then
    commit_changes "docs" "add comprehensive documentation and changelog" "CHANGELOG.md IMPROVEMENTS.md .github/COMMIT_TEMPLATE.md"
fi

# 11. Scripts
if git status -s | grep -q "scripts/"; then
    commit_changes "chore" "add helper scripts for development workflow" "scripts/"
fi

# Check if there are remaining changes
remaining=$(git status -s)
if [[ -n "$remaining" ]]; then
    echo ""
    echo "⚠️  Remaining uncommitted files:"
    echo "$remaining"
    echo ""
    read -p "Commit all remaining changes? (y/n): " commit_all
    
    if [[ $commit_all == "y" || $commit_all == "Y" ]]; then
        read -p "Enter commit message: " message
        git add .
        git commit -m "chore: $message"
        echo -e "${GREEN}✅ Committed remaining changes${NC}"
    fi
fi

echo ""
echo -e "${GREEN}🎉 All commits created successfully!${NC}"
echo ""
echo "📊 Commit history:"
git log --oneline -n 12
echo ""
read -p "🚀 Push all commits to remote? (y/n): " push_confirm

if [[ $push_confirm == "y" || $push_confirm == "Y" ]]; then
    git push
    echo -e "${GREEN}✅ Pushed to remote! Your GitHub activity will be updated.${NC}"
else
    echo "ℹ️  You can push later with: git push"
fi

echo ""
echo -e "${GREEN}✨ Done! Check your GitHub profile for the green squares!${NC}"

