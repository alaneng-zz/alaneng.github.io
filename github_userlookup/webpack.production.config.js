var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./public/index.jsx",
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
