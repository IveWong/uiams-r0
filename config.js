
const isRelease = process.argv.indexOf('--release') >= 0 ? true : false;
const isVerbose = process.argv.indexOf('--verbose') >= 0 ? true : false;

module.exports = {
	__global: {
		DEBUG: !isRelease,
		VERBOSE: isVerbose,
		WATCH: true,
		NODE_ENV: !isRelease ? "development" : "production"
	},
	__project: {
		foundation: ['react']
	},
	__gulp: {
		splitLog: false,									//是否将access信息跟debug信息分开两个窗口
		OUTDIR: "build/",
		SRCDIR: "src/",
		DOCDIR: "doc/"
	},
	__server: {
		port: 5050,
		outDirName: 'server',
		indexFile: 'httpd.js',
		srcDir: 'src/server/',
		destFile: 'serverd.js'
	},
	__client: {
		outDirName: 'client',
		destFile: 'client.js',
		libDir: 'lib',
		pages: {
			layoutDirName: 'layout',
			fileSuffix: 'jsx',
			destFileName: 'pages'
		}
	},
	__deploy: {}
};
