var plugins = require("gulp-load-plugins")();
var gulp = require("gulp");
var React = require("react");
var del = require("del");

gulp.task('css', function() {
  return gulp.src('stylesheets/bootstrap.min').pipe(gulp.dest('static'));
});

gulp.task('html', function(){
  delete require.cache[require.resolve('../components/application.js')];

  var Application = require("../components/application");
  var application = React.renderToStaticMarkup(<Application/>);
  var html = 
  `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="bootstrap.min.css">
        <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
        <title>New Application</title>
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
      </head>
      <body>
        <main id="root">
          ${application}
        </main>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  return plugins.file('index.html', html, {src: true}).pipe(gulp.dest('static'));
});

gulp.task('watch-html', function(){
  // todo: determine if this is the correct filepath
  console.log('in gulp/watch-html')
  gulp.watch('../components/**/*.js', ['html']);
  console.log('finished gulp/watch-html')
});

gulp.task('clean', function (done) {
  del('public', done)
});  