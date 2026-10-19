#!/usr/bin/env bash
# Build for GitHub Pages (served from /ravana-mr/) and publish dist/ to the gh-pages branch.
# Usage (from the project root, Git Bash on Windows): bash tools/deploy-pages.sh
set -euo pipefail
REMOTE=$(git remote get-url origin)
npm run build:pages
rm -f dist/models/ravana_full.glb   # optional 63 MB model is not hosted
touch dist/.nojekyll
cd dist
git init -q -b gh-pages
git config core.longpaths true
git add -A
git commit -q -m "Deploy GitHub Pages build"
git push -f "$REMOTE" gh-pages
echo "Deployed: https://$(echo "$REMOTE" | sed -E 's#.*github.com[:/]([^/]+)/([^/.]+).*#\1.github.io/\2#')/"
