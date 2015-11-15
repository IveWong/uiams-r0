
var gulp = require('gulp');
var babelServer = require('./babelToESfive').babelServer;
var babelClient = require('./babelToESfive').babelClient;

gulp.task('build', ['reCreateBuildDir'], function(){
	babelClient(babelServer());
	// babelClient()
})
