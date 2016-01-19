var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  devtool: "#cheap-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel?presets[]=es2015'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel?presets[]=react,presets[]=es2015'],
      },
      {
       test: /\.scss$/,
       loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
    ]
  }
};
