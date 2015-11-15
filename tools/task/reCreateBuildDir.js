
var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var cfg = require('../../config');

var _outputDir = 'build/' + cfg.__global.NODE_ENV;
gulp.task('reCreateBuildDir', function(){
	del.sync('build/');
	mkdirp.sync(_outputDir);
})
