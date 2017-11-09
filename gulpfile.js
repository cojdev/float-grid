/**
 * Author: Charles Ojukwu
 */

var gulp = require('gulp'),

    //--General
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),

    //--CSS
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano');

//--Parse and minify Sass
gulp.task('sass', function() {
return gulp.src('src/scss/**/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('docs/css'))
    .pipe(filter('**/*.css'))
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('docs/css'))
});

//--Run tasks once
gulp.task('run', ['sass']);

//--Watch edits
gulp.task('watch', function(){
gulp.watch('src/**/*.scss', ['sass']);
});

//--Default task
gulp.task('default', ['run', 'watch']);