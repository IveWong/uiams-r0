
var gulp = require('gulp');
var babel = require('gulp-babel');
var through = require('through2');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var cfg = require('../../config');
var ncp = require('ncp');

var nullHandle = through.obj();
var _outputDir = 'build/' + cfg.__global.NODE_ENV + '/';
var _server_srcDir = cfg.__gulp.SRCDIR + cfg.__server.srcDirName;
var _client_layout_srcDir = cfg.__gulp.SRCDIR + cfg.__client.pages.layoutDirName;
var _client_page_fileSuffix = cfg.__client.pages.fileSuffix;

var babelConfig = {
	presets: ['stage-0', 'es2015', 'react'],
	plugins: ['transform-runtime', 'transform-class-properties', 'transform-async-to-generator']
};

var babelServer = function(cb){
	return gulp.src(_server_srcDir + '/*.js')
		.pipe(babel(babelConfig))
		.pipe(replace("../../config", "../../../config"))
		.pipe(cfg.__global.DEBUG ? nullHandle : concat(cfg.__server.destFileName + '.js'))
		// .pipe(cfg.__global.DEBUG ? nullHandle : uglify())
		.pipe(gulp.dest(_outputDir + cfg.__server.srcDirName))
		.on('end', function(){ cb })
};

var babelClient = function(cb){
	return gulp.src(_client_layout_srcDir + '/**/*.' + _client_page_fileSuffix)
		.pipe(babel(babelConfig))
		.pipe(replace("../../config", "../../../config"))
		.pipe(concat(cfg.__client.pages.destFileName + '.js'))
		// .pipe(cfg.__global.DEBUG ? nullHandle : uglify())
		.pipe(gulp.dest(_outputDir + cfg.__client.outDirName))
		.on('end', function(){ cb })
};

gulp.task('babelServer', function(cb){
	return gulp.src(_server_srcDir + '/*.js')
		.pipe(babel(babelConfig))
		.pipe(replace("../../config", "../../../config"))
		.pipe(cfg.__global.DEBUG ? nullHandle : concat('serverd.js'))
		.pipe(cfg.__global.DEBUG ? nullHandle : uglify())
		.pipe(gulp.dest(_outputDir + cfg.__server.srcDirName))
		.on('end', cb())
})

gulp.task('babelClient', function(){
	return gulp.src(_client_layout_srcDir + '/**/*.' + _client_page_fileSuffix)
		.pipe(babel(babelConfig))
		.pipe(replace("../../config", "../../../config"))
		.pipe(concat('pages.js'))
		.pipe(cfg.__global.DEBUG ? nullHandle : uglify())
		.pipe(gulp.dest(_outputDir + cfg.__client.outDirName))
		.on('end', cb())
		// .on('end', function(){
		// 	// ncp(_client_layout_srcDir, _outputDir + cfg.__client.pages.layoutDirName, {filter: RegExp('.*.jsx')})
		// })
})

module.exports = {
	babelServer: babelServer,
	babelClient: babelClient
};
