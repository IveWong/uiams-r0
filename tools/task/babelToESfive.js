
var gulp = require('gulp');
var cfg = require('../../config');
var mkdirp = require('mkdirp');
var cp = require('child_process');
var handle = require('../lib/babelhandle');

var _outputDir = 'build/' + cfg.__global.NODE_ENV;
gulp.task('babelToESfive', ['reCreateBuildDir'], function(cb){
	mkdirp(_outputDir, function(err){
		handle(cb);
	})
})
