const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

module.exports = ({ config }) => {
	config.module.rules[3].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		include: srcDir,
		use: [
			{
				loader: require.resolve('babel-loader'),
			},
		],
	});
	config.module.rules.push({
		test: /\.(svg)$/,
		include: srcDir,
		loader: '@svgr/webpack',
		options: {
			dimensions: false,
			svgoConfig: {
				removeViewBox: false,
				removeDimensions: true,
			},
		},
	});
	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
