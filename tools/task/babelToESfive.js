
var gulp = require('gulp');
var babel = require('gulp-babel');
var file = require('../lib/file');
var replace = require('gulp-replace');
var cfg = require('../../config');

gulp.task('babelToESfive', ['reCreateBuildDir'], function(cb){
	var _outputDir = 'build/' + cfg.__global.NODE_ENV;
	var _srcFiles = {
		client: cfg.__client.pages.layoutPath + '/*.' + cfg.__client.pages.fileSuffix,
		server: cfg.__server.srcPath + '/*.js'
	};
	file.create(_outputDir)
		.then(
			gulp.src('src/**/**/**')
				.pipe(babel({
					presets: ['stage-0', 'es2015', 'react'],
					plugins: ['transform-runtime', 'transform-class-properties']
				}))
				.pipe(replace("require('../..", "require('../../.."))
				.pipe(gulp.dest(_outputDir))
				.on('end', function(){
					console.log('  --> babel client-src finished.')
					cb();
				})
		);
})
