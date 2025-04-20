const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
	mode: 'development',
	plugins: [
		new ESLintPlugin({
			failOnError: false
		})
	],
	devServer: {
		port: 3000,
		hot: true,
		open: true
	}
});
