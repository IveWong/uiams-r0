
import koa from 'koa';
import render from './render';
import router from './router';
import { __server } from '../../config';
import rules from './rules';
import logger from 'koa-logger';

const httpd = module.exports = koa();

// httpd.use(function *() {
// 	if (this.path == '/home') {
// 		this.body = "home!";
// 	};
// })

httpd.use(logger());

// httpd.use(router(rules));
httpd.use(render());


if (!module.parent) httpd.listen(__server.port);
console.log('[Success] HTTP Server is runing at http://localhost:' + __server.port);
