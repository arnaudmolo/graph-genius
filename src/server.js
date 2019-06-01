import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import tryData from './backend';
import proxy from 'http-proxy-middleware';
import zlib from 'zlib';
import session from 'express-session';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = express();

const myProxy = proxy({
	target: 'https://api.genius.com',
	changeOrigin: true,
	selfHandleResponse: true, // so that the onProxyRes takes care of sending the response
	onProxyRes: (proxyRes, req, res) => {
		let originalBody = Buffer.from([]);

		proxyRes.on('data', data => {
			originalBody = Buffer.concat([originalBody, data]);
		});

		proxyRes.on('end', () => {
			try {
				const bodyString = zlib.gunzipSync(originalBody).toString('utf8');
				const newBody = bodyString;
				res.set({
					'content-type': 'text/html; charset=utf-8',
					'content-encoding': 'gzip'
				});
				req.session.data = JSON.parse(newBody);
				res.redirect(301, req.originalUrl);
			} catch (error) {
				console.log('et bien non');
				console.error(error);
			}
		});
	},
});

app // You can also use Express
	.use(session({ secret: 'coucou' }))
	.use('/api', tryData, myProxy)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
