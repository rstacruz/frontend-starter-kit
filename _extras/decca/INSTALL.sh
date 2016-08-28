#!/usr/bin/env bash

curl -sSL https://github.com/rstacruz/frontend-starter-kit/archive/master.tar.gz \
 | tar zxv --strip-components=3 \
 --exclude='INSTALL.sh' \
 '*/_extras/decca'

npm install --cache-min Infinity --save --save-exact \
  riot-route \
  decca \
  redux \
  redux-thunk \
  build-reducer
