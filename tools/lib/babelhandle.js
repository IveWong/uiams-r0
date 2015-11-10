
var gulp = require('gulp');
var babel = require('gulp-babel');
var replace = require('gulp-replace');
var cfg = require('../../config');
var ncp = require('ncp');

var _outputDir = 'build/' + cfg.__global.NODE_ENV;
var handle = function(cback){
	return gulp.src(['src/**/*.js', 'src/**/**/*.jsx'])
		.pipe(babel({
			presets: ['stage-0', 'es2015', 'react'],
			plugins: ['transform-runtime', 'transform-class-properties', 'transform-async-to-generator']
		}))
		.pipe(replace("../../config", "../../../config"))
		.pipe(gulp.dest(_outputDir))
		.on('end', function(){
			ncp('src/layout', 'build/production/layout/', {filter: RegExp('.*.jsx')}, function(){
				ncp('src/components', 'build/production/components/', {filter: RegExp('.*.jsx')}, function(){
					cback()
				})
			})
		})
};

module.exports = handle;
