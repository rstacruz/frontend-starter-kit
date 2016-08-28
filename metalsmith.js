var Metalsmith = require('metalsmith')

var b = require('metalsmith-browserify')('assets/app.js', {
  entries: ['js/app.js'],
  cache: {},
  packageCache: {}
})
b.bundle.transform('babelify')

if (process.env.NODE_ENV === 'production') {
  b.bundle.transform({ global: true }, 'uglifyify')
}

if (process.env.NODE_ENV === 'development') {
  b.bundle.plugin('watchify')
}

var app = Metalsmith(__dirname)
  .source('./web')
  .destination('./public')
  .use(require('metalsmith-jstransformer')())
  .use(require('metalsmith-sense-sass')())
  .use(b)

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}
