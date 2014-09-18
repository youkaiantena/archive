var browserify = require('browserify'),
    gulp       = require('gulp'),
    source     = require('vinyl-source-stream');

gulp.task('browserify', function(){
  return browserify('./assets/javascript/apps/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['browserify']);
