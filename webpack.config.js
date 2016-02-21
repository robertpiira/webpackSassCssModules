var webpack = require('webpack');
	ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

	entry: './src/index.js',

	output: {
		path: './build',
		filename: 'bundle.js'
	},

	resolve: {
		modulesDirectories: [
			'./src/lib',
			'node_modules'
		]
	},

	module: {
		noParse: [
			/(node_modules|~)\/(crappy\-bundled\-lib|jquery)\//gi
		],

		preLoaders: [
			{ loader: 'source-map' }
		],

		loaders: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract("style?sourceMap", "css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!autoprefixer?browsers=last 2 version!sass-loader")
			}
		]
	},

	plugins: ([

		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin('style.css', { allChunks: true })

	]).concat(process.env.WEBPACK_ENV==='dev' ? [] : [

		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: { comments: false },
			exclude: [ /\.min\.js$/gi ]
		})

	]),

	stats: { colors: true },

	devtool: 'source-map',

	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './src',
		historyApiFallback: true
	}

};
