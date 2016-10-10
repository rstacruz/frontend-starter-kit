module.exports = {
  entries: [__dirname + '/../js/app.js'],
  bundleExternal: false,
  external: require('./vendor.browserify.js').require
}
