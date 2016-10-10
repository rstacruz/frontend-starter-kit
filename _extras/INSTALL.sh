#!/usr/bin/env bash

curl -sSL https://github.com/rstacruz/frontend-starter-kit/archive/master.tar.gz \
 | tar zxv --strip-components=1 \
 --exclude='README.md' \
 --exclude='INSTALL.sh' \
 --exclude='_extras'

mv _README.md README.md
npm install --cache-min Infinity
