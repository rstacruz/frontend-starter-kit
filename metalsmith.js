var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .source('./web/assets')
  .destination('./public')
  .use(require('metalsmith-jstransformer')())
  .use(require('metalsmith-sense-sass')())
  .use(browserify({
    output: 'app.js',
    input: ['web/js/app.js'],
    transform: ['babelify'],
    plugin: process.env.NODE_ENV === 'development' ? ['watchify'] : []
  }))

if (process.env.NODE_ENV === 'production') {
  app = app.use(require('metalsmith-uglifyjs')({
    override: true,
    uglifyOptions: {
      mangle: true, compress: { warnings: false }
    }
  }))
}

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) { console.error(err); process.exit(1) } })
}

/*
 * metalsmith-browserify helper
 */

function browserify (options) {
  var b = require('metalsmith-browserify')(options.output, {
    entries: options.input,
    cache: options.cache || {},
    packageCache: options.packageCache || {}
  })

  ;(options.transform || []).forEach(pkg => {
    b.bundle.transform.apply(b.bundle, Array.isArray(pkg) ? pkg : [pkg])
  })

  ;(options.plugin || []).forEach(pkg => {
    b.bundle.plugin.apply(b.bundle, Array.isArray(pkg) ? pkg : [pkg])
  })

  return b
}
