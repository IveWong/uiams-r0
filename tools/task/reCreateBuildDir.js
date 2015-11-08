
var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');

gulp.task('reCreateBuildDir', function(){
	del.sync('build/');
	mkdirp.sync('build/');
})
