
var gulp = require('gulp');
var babel = require('gulp-babel');
var file = require('../lib/file');
var replace = require('gulp-replace');
var cfg = require('../../config');

gulp.task('babelToESfive', ['reCreateBuildDir'], function(cb){
	
	var _outputDir = 'build/' + cfg.__global.NODE_ENV;
	
	file.create(_outputDir)
		.then(
			gulp.src(['src/**/*.js', 'src/**/**/*.jsx'])
				.pipe(babel({
					presets: ['stage-0', 'es2015', 'react'],
					plugins: ['transform-runtime', 'transform-class-properties']
				}))
				.pipe(replace("require('../..", "require('../../.."))
				.pipe(gulp.dest(_outputDir))
				.on('end', function(){
					file.copy('src/layout', 'build/production/layout/', {filter: RegExp('.*.jsx')})
						.then(cb())
				})
		);
})
