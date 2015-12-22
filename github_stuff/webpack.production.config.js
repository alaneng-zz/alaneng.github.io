var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./public/index.jsx",
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/config'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/components'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/utils'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'public'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
