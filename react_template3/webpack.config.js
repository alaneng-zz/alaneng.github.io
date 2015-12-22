var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./public/index.jsx",
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'src/config'),
                  path.join(__dirname, 'src/components'),
                  path.join(__dirname, 'src/utils'),
                  path.join(__dirname, 'public')],
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
