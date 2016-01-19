var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const PORT = 3000

new WebpackDevServer(webpack(config), {
  // publicPath: config.output.publicPath,
  // contentBase: config.devServer.contentBase,
  hot: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening to http://localhost:${PORT}/`);
});
