

'use strict';

var fs = require('fs');
var gulp = require('gulp');
var webp = require('gulp-webp');
var clean = require('gulp-clean');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});



 /**
 * Start conversion of images
 *The conversion is applied in te folder contains that images
 */
gulp.task('convert', function () {
    return gulp.src('src/assets/JPG/**')
        .pipe(webp())
        .pipe(gulp.dest('src/assets/WEBP'));
});



gulp.task('clean-image', function () {
  return gulp.src('src/assets/images/*.png', {read: false})
    .pipe(clean());
});

/**
*This code is old and couldn't funcion in format webp no more,
*but function in the format jpg
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task ('compression', function()
    {
        gulp.src('src/assets/b/6/[KS] Kingdom_53/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/c'));
    }     );
*/
