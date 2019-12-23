var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
import { task, src } from 'gulp';
import ghPages from 'gulp-gh-pages';

task('deploy', function() {
  return src('./dist/**/*')
    .pipe(ghPages());
});