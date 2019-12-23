import { task, src } from 'gulp';
import ghPages from 'gulp-gh-pages';

task('deploy', function() {
  return src('./dist/**/*')
    .pipe(ghPages());
});