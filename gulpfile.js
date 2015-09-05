var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon');

gulp.task('run', function() {
  livereload.listen();

  nodemon({
    script: 'bin/www',
    ext: 'js',
    ignore: ['public/*'],
  }).on('restart', function() {
    // when the app has restarted, run livereload.
    setTimeout(function() {
      gulp.src('bin/www')
        .pipe(livereload())
    }, 500);
  })
});

gulp.task('reload', function() {
  gulp.src('public/**')
    .pipe(livereload());
});


gulp.task('default', ['run'], function() {
  livereload.listen();
  gulp.watch('public/**', ['reload']);
});
