var gulp       = require('gulp');
var bowerFiles = require('gulp-bower-files');
var uglify     = require('gulp-uglify');

gulp.task('compress', function() {
  gulp.src('src/javascripts/**/*.js')
    .pipe(uglify(preserveComments: 'some'))
    .pipe(gulp.dest('assets/javascripts/'))
});
