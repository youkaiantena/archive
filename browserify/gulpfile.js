var browserify = require('browserify'),
    gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    uglify     = require('gulp-uglify');

gulp.task('browserify', function(){
  browserify('./src/javascripts/apps/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('uglify', function(){
  gulp.src('./build/bundle.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./assets/javascripts/'))
});

gulp.task('default', ['browserify', 'uglify']);
