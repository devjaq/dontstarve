"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./app/public/styles/mainstyle.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./app/public/styles/'))
})

gulp.task('sass:watch', function(){
  gulp.watch('./app/public/styles/mainstyle.scss', gulp.series('sass'));
})