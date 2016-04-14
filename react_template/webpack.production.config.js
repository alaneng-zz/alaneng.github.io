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
        include: [path.join(__dirname, 'src/config'),
                  path.join(__dirname, 'src/components'),
                  path.join(__dirname, 'src/utils'),
                  path.join(__dirname, 'public')],
        loaders: ['babel?stage=0'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
