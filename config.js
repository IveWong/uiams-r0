
// const isRelease = process.argv.includes('release');
// const isVerbose = process.argv.includes('verbose');
const isRelease = true;
const isVerbose = true;

module.exports = {
	__global: {
		DEBUG: !isRelease,
		VERBOSE: isVerbose,
		WATCH: true,
		NODE_ENV: !isRelease ? "development" : "production"
	},
	__gulp: {
		OUTDIR: "./build"
	},
	__server: {
		port: 5050
	},
	__client: {},
	__deploy: {}
};
