
var gulp = require('gulp');
var file = require('../lib/file');
var cfg = require('../../config');

gulp.task('babelToESfive', ['reCreateBuildDir'], function(cb){
	file.create('build/' + cfg.__global.NODE_ENV)
		.then(
			
		);

	if (cfg.__global.DEBUG) {

	} else {

	};

	cb();
})
