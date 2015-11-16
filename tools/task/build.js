
var gulp = require('gulp');
var babelServer = require('./babelToESfive').babelServer;
var babelClient = require('./babelToESfive').babelClient;
var cfg = require('../../config');

gulp.task('build', ['reCreateBuildDir', 'transfromServerSrcToESfive'])
