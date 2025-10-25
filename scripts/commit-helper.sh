#!/bin/bash

# Commit Helper Script
# Makes it easy to create properly formatted commits

echo "🚀 Commit Helper"
echo "=================="
echo ""

# Check if there are changes to commit
if [[ -z $(git status -s) ]]; then
    echo "❌ No changes to commit"
    exit 0
fi

echo "📝 Staged files:"
git status -s
echo ""

# Commit type selection
echo "Select commit type:"
echo "1) feat     - New feature"
echo "2) fix      - Bug fix"
echo "3) docs     - Documentation"
echo "4) style    - Code style/formatting"
echo "5) refactor - Code refactoring"
echo "6) perf     - Performance improvement"
echo "7) test     - Tests"
echo "8) chore    - Maintenance"
echo "9) ci       - CI/CD changes"
echo ""

read -p "Enter number (1-9): " type_choice

case $type_choice in
    1) commit_type="feat" ;;
    2) commit_type="fix" ;;
    3) commit_type="docs" ;;
    4) commit_type="style" ;;
    5) commit_type="refactor" ;;
    6) commit_type="perf" ;;
    7) commit_type="test" ;;
    8) commit_type="chore" ;;
    9) commit_type="ci" ;;
    *) echo "❌ Invalid choice"; exit 1 ;;
esac

echo ""
read -p "📝 Commit message (short description): " message

if [[ -z "$message" ]]; then
    echo "❌ Message cannot be empty"
    exit 1
fi

echo ""
read -p "📄 Detailed description (optional, press Enter to skip): " description

# Stage all changes
git add .

# Create commit message
full_message="$commit_type: $message"

if [[ -n "$description" ]]; then
    full_message="$full_message

$description"
fi

echo ""
echo "📋 Commit preview:"
echo "===================="
echo "$full_message"
echo "===================="
echo ""

read -p "✅ Confirm commit? (y/n): " confirm

if [[ $confirm == "y" || $confirm == "Y" ]]; then
    git commit -m "$full_message"
    echo ""
    echo "✅ Committed successfully!"
    echo ""
    read -p "🚀 Push to remote? (y/n): " push_confirm
    
    if [[ $push_confirm == "y" || $push_confirm == "Y" ]]; then
        git push
        echo "✅ Pushed to remote!"
    fi
else
    echo "❌ Commit cancelled"
    git reset
fi

