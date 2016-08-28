#!/usr/bin/env bash

curl -sSL https://github.com/rstacruz/frontend-starter-kit/archive/master.tar.gz \
 | tar zxv --strip-components=1 \
 --exclude='*.md' \
 --exclude='INSTALL.sh' \
 --exclude='_extras'

npm install --cache-min Infinity
