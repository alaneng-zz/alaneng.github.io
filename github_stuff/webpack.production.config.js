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
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/components'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/utils'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'public'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
