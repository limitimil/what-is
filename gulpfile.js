'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const revertPath = require('gulp-revert-path');
const del = require('del');

const JS_JSX_SRC = [
    './src/**/*.js',
    './src/**/*.jsx',
    '!./src/**/*.test.js',
    '!./src/**/*.meta.js',
    '!./src/**/*.stories.js',
];

const PKG_META_FILES = [
    'package.json',
];

const BASE = './src/';
const DEST = './dist/';

function clean() {
    return del(DEST);
}

gulp.task('clean', clean);

gulp.task('js', function() {
    return gulp.src(JS_JSX_SRC)
        .pipe(babel())
        .on('error', function(error) { console.log(error.message); })
        .pipe(revertPath())
        .pipe(gulp.dest(DEST));
});

gulp.task('package-meta', function () {
    return gulp.src(PKG_META_FILES, { base: '.' })
        .pipe(gulp.dest(DEST));
});

gulp.task('default', gulp.series('clean', gulp.parallel('js', 'package-meta')));

