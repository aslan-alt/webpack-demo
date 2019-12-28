yarn build &&
git add . &&
git commit -m '更新' &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -