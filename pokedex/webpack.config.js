var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname),
    sourceMapFilename: 'bundle.js.map',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel?presets[]=es2015'],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
