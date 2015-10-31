
var gulp = require('gulp');
var file = require('../lib/file');

gulp.task('reCreateBuildDir', function(cb){
	file.dele(['build/*'], { dot: true });
	file.create('build/');
	cb();
})
