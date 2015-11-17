
var gulp = require('gulp');
var webpack = require('webpack');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var through = require('through2');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var cfg = require('../../config');
var ncp = require('ncp');

var nullHandle = through.obj();
var _outputDir = cfg.__gulp.OUTDIR + cfg.__global.NODE_ENV + '/';
var _server_srcDir = cfg.__gulp.SRCDIR + cfg.__server.srcDirName;

var babelConfig = {
	presets: ['stage-0', 'es2015', 'react'],
	plugins: ['transform-runtime', 'transform-class-properties', 'transform-async-to-generator']
};

function transfromSrcToESfive(opts){
	var opts = opts || {};
	var browserifyHandle = browserify({
		cache: opts.cache || {},
		packageCache: opts.packageCache || {},
		fullPath: opts.fullPath || false,
		entries: opts.entries || '',
		extensions: opts.extensions || '',
		debug: opts.debug || false
	});

	var bundler = function(){
		return browserifyHandle
			.external(opts.external || '')
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source(opts.destFile))
			.pipe(gulp.dest(opts.destDir));
	};

	browserifyHandle.transform(babelify, opts.babelrc || {});

	if (opts.debug) {
		browserifyHandle = watchify(browserifyHandle);
		browserifyHandle.on('update', bundler);
	};

	return bundler();
}

gulp.task('transfromClientSrcToESfive', function(){
	transfromSrcToESfive({
		entries: ['src/layout/HomePage/HomePage.jsx', 'src/layout/IndexPage/IndexPage.jsx'],
		debug: cfg.__global.DEBUG,
		external: cfg.__project.foundation,
		destFile: cfg.__client.destFile,
		destDir: _outputDir + cfg.__client.outDirName,
		babelrc: babelConfig
	});
})

gulp.task('transfromServerSrcToESfive', function(){
	if (cfg.__global.DEBUG) {
		return gulp.src(['src/server/*.js'])
			.pipe(babel({
				presets: ['stage-0', 'es2015', 'react'],
				plugins: ['transform-runtime', 'transform-class-properties', 'transform-async-to-generator']
			}))
			.pipe(replace("../../config", "../../../config"))
			.pipe(gulp.dest(_outputDir + cfg.__server.outDirName))
	} else {
		transfromSrcToESfive({
			entries: cfg.__server.srcDir + cfg.__server.indexFile,
			debug: cfg.__global.DEBUG,
			destFile: cfg.__server.destFile,
			destDir: _outputDir + cfg.__server.outDirName,
			babelrc: babelConfig
		});
	}
})

// var _Server = gulp.src(_server_srcDir + '/*.js')
// 	.pipe(babel(babelConfig))
// 	.pipe(replace("../../config", "../../../config"))
// 	.pipe(cfg.__global.DEBUG ? nullHandle : concat(cfg.__server.destFileName + '.js'))
// 	// .pipe(cfg.__global.DEBUG ? nullHandle : uglify())
// 	.pipe(gulp.dest(_outputDir + cfg.__server.srcDirName));

// var _Client = gulp.src(_client_layout_srcDir + '/**/*.' + _client_page_fileSuffix)
// 	.pipe(babel(babelConfig))
// 	.pipe(replace("../../config", "../../../config"))
// 	.pipe(cfg.__global.DEBUG ? nullHandle : concat(cfg.__client.pages.destFileName + '.js'))
// 	// .pipe(cfg.__global.DEBUG ? nullHandle : uglify())
// 	.pipe(gulp.dest(_outputDir + cfg.__client.outDirName))

// gulp.task('babelServer', function(){
// 	return _Server;
// })

// gulp.task('babelClient', function(){
// 	return gulp.src(_client_layout_srcDir + '/**/*.' + _client_page_fileSuffix)
// 		.pipe(babel(babelConfig))
// 		.pipe(replace("../../config", "../../../config"))
// 		.pipe(concat(cfg.__client.pages.destFileName + '.js'))
// 		// .pipe(cfg.__global.DEBUG ? nullHandle : uglify())
// 		.pipe(gulp.dest(_outputDir + cfg.__client.outDirName))
// })
