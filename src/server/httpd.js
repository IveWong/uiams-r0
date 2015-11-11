
import koa from 'koa';
import render from './render';
import router from './router';
import { __server } from '../../config';
import rules from './rules';
import logger from 'koa-logger';
import favicon from 'koa-favicon';
import assets from './assets';

const httpd = module.exports = koa();

httpd.use(logger());
httpd.use(favicon('src/assets/favicon.ico'));
httpd.use(assets({
	filter: 'css|js|png|jpg|jpeg|gif|font|swf|mp4|bmp'
}))

httpd.use(router(rules));
httpd.use(render());


if (!module.parent) httpd.listen(__server.port);
