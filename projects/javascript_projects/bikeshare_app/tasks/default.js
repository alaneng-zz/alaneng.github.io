var gulp = require("gulp");

gulp.task('build', ['clean', 'html', 'css', 'javascript']);
gulp.task('watch', ['watch-html', 'watch-javascript']);
gulp.task('default', ['clean', 'build', 'watch']);
gulp.task('prod', ['clean', 'build', 'css', 'html', 'javascript']);