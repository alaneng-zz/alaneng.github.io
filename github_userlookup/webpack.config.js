var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./public/index.jsx",
  ],
  output: {
    publicPath: '/github_userlookup/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/config'),
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/components'),
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/utils'),
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'public'),
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
