#!/usr/bin/env sh

curl -sSL https://github.com/rstacruz/frontend-starter-kit/archive/master.tar.gz \
 | tar zxv --strip-components=3 '*/_extras/decca' \
 --exclude='INSTALL.sh'

npm install --cache-min Infinity --save --save-exact \
  riot-route \
  decca \
  redux \
  redux-thunk \
  build-reducer
