var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/js/app.js',
  out: 'public',
  clearBeforeBuild: true
});