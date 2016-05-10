let gulp = require('gulp');
let runSequence = require('run-sequence');
let webpack = require('webpack-stream');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();
let historyApiFallback = require('connect-history-api-fallback');
let reload = browserSync.reload;

function handleError(error) {
  console.log(err.toString());
  this.emit('end');
}
