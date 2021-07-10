'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
  return gulp
    .src('app/scss/main.scss')
    .pipe(
      sass({
        errorLogToConsole: true,
      })
    )
    .on('error', console.error.bind(console))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('scripts', function () {
  return gulp
    .src('app/js/index.js')
    .pipe(concat('application.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('clean', function () {
  return del('public');
});

gulp.task('assets', function () {
  return gulp.src('app/assets/**').pipe(gulp.dest('public'));
});

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'assets'))
);

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.*', gulp.series('styles'));
  gulp.watch('app/js/**/*.*', gulp.series('scripts'));
  gulp.watch('app/assets/**/*.*', gulp.series('assets'));
});

// gulp.task('serve', function () {
//   browserSync.init({
//     server: 'public',
//   });
//   browserSync.watch('public/**/*.*').on('change', browserSync.reload);
// });

// gulp.task('dev', gulp.series('watch', 'build'));
