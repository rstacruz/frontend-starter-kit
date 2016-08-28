#!/usr/bin/env bash

# set_json_data package.json babel "{ presets: ['es2015'] }"
set_json_data() {
node <(cat << EOF
  var data = JSON.parse(require('fs').readFileSync(\`$1\`, 'utf-8'))
  var parts = \`$2\`.split('.')
  var last = parts.pop()
  var here = data

  parts.forEach(key => {
    if (!here[key]) here[key] = {}
    here = here[key]
  })

  here[last] = eval(\`($3)\`)
  require('fs').writeFileSync(\`$1\`, JSON.stringify(data, null, 2), 'utf-8')
EOF)
}

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

set_json_data package.json babel.plugins '[ "syntax-jsx", [ "transform-react-jsx", { "pragma": "element" } ] ]'
