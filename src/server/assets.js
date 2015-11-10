
import fs from 'fs';
import send from 'koa-send';

function assets(opts) {
	return function *(next) {
		opts = opts || {};
		const req_url = this.originalUrl;
		if (opts.filter) {
			let reg = new RegExp(`.*\.(${opts.filter})`);
			yield !reg.test(req_url) ? next : send(this, this.originalUrl)
		}
	}
}

export default assets;
