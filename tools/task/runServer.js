
var gulp = require('gulp');
var cp = require('child_process');
var cfg = require('../../config');
var chalk = require('chalk');

gulp.task('runServer', ['build'], function(cb){
	function start() {
    var server = cp.spawn(
      'node',
      ['build/' + cfg.__global.NODE_ENV + '/server/' + cfg.__global.DEBUG ? cfg.__server.destFileName + '.js' : cfg.__server.index],
      {
        env: Object.assign({ NODE_ENV: cfg.__global.NODE_ENV }, process.env),
        silent: false,
      }
    );
    server.stdout.on('data', data => {
      process.stdout.write(chalk.green(data));
    });
    server.stderr.on('data', data => process.stderr.write(data));
    // server.on('error', err => reject(err));
    // process.on('exit', () => server.kill('SIGTERM'));
    return server;
  }

  var server = start();
  console.log(chalk.gray('>>>>>>>>>>>>> ') + 'HTTP Server is runing at ' + chalk.magenta('http://localhost:' + cfg.__server.port));

  var handle = function(cb){
    return gulp.task('reBabel', ['babelServer', 'babelClient'], function(){
      cb();
    })
  };

	gulp.watch('src/**', function(event){
		console.log('[' + chalk.yellow('filesWatching...') + '] file ' + chalk.cyan(event.path) + ' was ' + event.type);
		handle(function(){
			server.kill('SIGTERM');
      server = start();
		});
	})
})
