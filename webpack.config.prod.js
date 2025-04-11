const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: 'production',
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [['mozjpeg', { quality: 70 }]]
					}
				}
			})
		],
		minimize: true
	}
});
