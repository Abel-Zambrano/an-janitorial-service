const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss') // takes every file ending in .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

 
gulp.task('css', async function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

gulp.task('run', gulp.parallel('sass', 'css'));

gulp.task('default', function(){
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));

    return
});