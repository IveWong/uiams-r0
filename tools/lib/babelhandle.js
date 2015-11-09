
var gulp = require('gulp');
var babel = require('gulp-babel');
var replace = require('gulp-replace');
var cfg = require('../../config');
var file = require('../lib/file');

var _outputDir = 'build/' + cfg.__global.NODE_ENV;
var handle = function(cback){
	return gulp.src(['src/**/*.js', 'src/**/**/*.jsx'])
		.pipe(babel({
			presets: ['stage-0', 'es2015', 'react'],
			plugins: ['transform-runtime', 'transform-class-properties', 'transform-async-to-generator']
		}))
		.pipe(replace("require('../..", "require('../../.."))
		.pipe(gulp.dest(_outputDir))
		.on('end', function(){
			file.copy('src/layout', 'build/production/layout/', {filter: RegExp('.*.jsx')})
				.then(cback())
		})
};

module.exports = handle;
