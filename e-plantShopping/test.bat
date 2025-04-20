git checkout --orphan gh-pages
echo "placeholder" > index.html
git add index.html
git commit -m "Create gh-pages branch"
git push origin gh-pages
git checkout main
