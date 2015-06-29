var path = require("path");

var commonLoaders = [
	{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		loaders: ['jsx-loader']
	},
	{ test: /\.png$/, loader: "url-loader" },
	{ test: /\.jpg$/, loader: "file-loader" },
	{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
	{ test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
	{ test: /\.woff?/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
	{ test: /\.woff2/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2' },
	{ test: /\.ttf/,  loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
	{ test: /\.eot/,  loader: 'file-loader' },
	{ test: /\.svg/,  loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
];
var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "assets/";

module.exports = [
	{
		// The configuration for the client
		name: "browser",
		entry: "./app/entry.js",
		output: {
			path: assetsPath,
			filename: "[hash].js",
			publicPath: publicPath
		},
		module: {
			loaders: commonLoaders.concat([
				{ test: /\.css$/, loader: "style-loader!css-loader" }
			])
		},
		plugins: [
			function(compiler) {
				this.plugin("done", function(stats) {
					require("fs").writeFileSync(path.join(__dirname, "server", "stats.generated.json"), JSON.stringify(stats.toJson()));
				});
			}
		]
	},
	{
		// The configuration for the server-side rendering
		name: "server-side rendering",
		entry: "./server/page.js",
		target: "node",
		output: {
			path: assetsPath,
			filename: "../../server/page.generated.js",
			publicPath: publicPath,
			libraryTarget: "commonjs2"
		},
		externals: /^[a-z\-0-9]+$/,
		module: {
			loaders: commonLoaders.concat([
				{ test: /\.css$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" }
			])
		}
	}
];