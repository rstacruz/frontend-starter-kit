var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .source('./web/assets')
  .destination('./public')
  .use(require('metalsmith-jstransformer')())
  .use(require('metalsmith-sense-sass')())
  .use(require('metalsmith-browserify')({
    output: 'app.js',
    input: ['web/js/app.js'],
    cache: {},
    packageCache: {},
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
