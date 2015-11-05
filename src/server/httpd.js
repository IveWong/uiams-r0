
import koa from 'koa';
import render from './render';
import router from './router';
import { __server } from '../../config';
import rules from './rules';

const httpd = module.exports = koa();

httpd.use(router(rules).render());

if (!module.parent) httpd.listen(__server.port);
console.log('[Success] HTTP Server is runing at http://localhost:' + __server.port);
