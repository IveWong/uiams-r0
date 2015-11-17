
var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var cfg = require('../../config');

gulp.task('Re-Create Build Directory', function(){
	del.sync(cfg.__project.OUTDIR);
	mkdirp.sync(cfg.__project.OUTDIR + cfg.__global.NODE_ENV);
})
