var Metalsmith = require('metalsmith')

var b = require('metalsmith-browserify')('assets/app.js', {
  entries: ['js/app.js'],
  cache: {},
  packageCache: {}
})
b.bundle.transform('babelify')

if (process.env.NODE_ENV === 'development') {
  b.bundle.plugin('watchify')
}

var app = Metalsmith(__dirname)
  .source('./web')
  .destination('./public')
  .ignore([
    '_layouts',
    '_includes'
  ])
  .use(require('metalsmith-jstransformer')())
  .use(require('metalsmith-sense-sass')())
  .use(b)

if (process.env.NODE_ENV === 'production') {
  app = app.use(require('metalsmith-uglifyjs')({
    override: true,
    uglifyOptions: {
      mangle: true, compress: { unused: false, warnings: true }
    }
  }))
}

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}
