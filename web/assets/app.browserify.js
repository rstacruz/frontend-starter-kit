module.exports = {
  entries: [__dirname + '/../js/app.js'],
  exclude: require('./vendor.browserify.js').require
}
