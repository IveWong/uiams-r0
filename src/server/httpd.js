
import koa from 'koa';
import reactRender from './reactRender';
import { __server } from '../../config';

const httpd = module.exports = koa();

httpd.use(reactRender());

if (!module.parent) httpd.listen(__server.port);
console.log('[Success] HTTP Server is runing at http://localhost:' + __server.port);
