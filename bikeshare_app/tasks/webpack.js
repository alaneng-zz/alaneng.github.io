var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();

var webpackConfig = {
  entry: {
    application: './components/application.js'
  },
  output: {
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      }]
  },      
  quiet: false
};

gulp.task('javascript', function() {
  console.log('gulp/javascript')
  return gulp.src('./components/**/*.js')
    .pipe(plugins.webpack(webpackConfig))
    .pipe(gulp.dest('static'));
});

gulp.task('watch-javascript', function() {
  console.log('gulp/watch-javascript')
  return gulp.src('./components/**/*.js')
    .pipe(plugins.webpack(Object.assign({}, webpackConfig, {watch: true})))
    .pipe(gulp.dest('static'));
});