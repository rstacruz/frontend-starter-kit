#!/usr/bin/env bash
# This bootstraps the frontend kit, but builds from
# `web/static` into `priv/static` (according to Phoenix conventions).

if ! which yarn >/dev/null; then
  echo "! You need yarn. See: https://yarnpkg.com/"
  exit 1
fi

TMP=_frontendkit.$RANDOM
mkdir -p $TMP
cd $TMP

curl -sSL https://github.com/rstacruz/frontend-starter-kit/archive/master.tar.gz \
 | tar zxv --strip-components=1 \
 --exclude='*.md' \
 --exclude='INSTALL.sh' \
 --exclude='_extras'

cd -

# Make /web/static
mkdir -p web/static
mv $TMP/web/* web/static

# Make package.json
mv $TMP/package.json .

# Make metalsmith.js
cat $TMP/metalsmith.js \
  | sed 's#/web/assets#/web/static/assets#' \
  | sed 's#/public#/priv/static#' \
  > metalsmith.js

# Put back Phoenix stuff
yarn add file:deps/phoenix
yarn add file:deps/phoenix_html

mkdir -p priv/static

# Cleanup
rm -rf $TMP

yarn

echo ""
echo "Update config/dev.exs:"
echo ""
echo '  watchers: [node: ["node_modules/.bin/metalsmith-start"]]'
echo ""
echo "And your build command is now \"npm run build\""
