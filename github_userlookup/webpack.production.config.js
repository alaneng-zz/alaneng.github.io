var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel?stage=0'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel?stage=0'],
      },
      {
       test: /\.scss$/,
       loaders: ['style', 'css', 'sass']
      },
    ]
  }
};
