var gulp = require('gulp'),
  watch = require('gulp-watch');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('es6', function() {
  return gulp.src('./js/*.js')
  .pipe(babel({
    "presets": ["es2015"]
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));
});
gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['es6'])
});
gulp.task('default', ['es6', 'watch']);
