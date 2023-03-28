/**
 *  PostCSS::Configuration file
 *  @see https://cssnano.co/docs/config-file
 *  @see https://github.com/postcss/autoprefixer
 *  @see https://github.com/yunusga/postcss-sort-media-queries
 *  @see https://github.com/TCotton/postcss-mq-keyframes
 *  @see https://github.com/csstools/postcss-input-range
 *  @see https://github.com/postcss/postcss-easings
 *  @see https://github.com/larsenwork/postcss-easing-gradients
 *  @see https://github.com/azat-io/postcss-instagram
 *  @see https://github.com/2createStudio/postcss-sprites
 *  @see https://github.com/iamstarkov/postcss-color-mix
 *  @see https://tailwindcss.com/
 *  @see https://github.com/postcss/postcss-import
 *  @see https://github.com/dimitrinicolas/postcss-import-ext-glob
 */

const env = process.env.NODE_ENV || 'development';
const cssNanoRules = {
	...require('./resources/config/linters/postcss/cssnano/globals'),
	...require(`./resources/config/linters/postcss/cssnano/${env}.js`)
};

module.exports = {
	plugins: {
		'postcss-import-ext-glob': {},
		'postcss-import': {},
		'postcss-css-variables': {},
		'tailwindcss/nesting': {},
		'tailwindcss': {},
		// TODO Add input range to Tailwind.
		'postcss-input-range': {},
		// TODO Add easings file to Tailwind.
		'postcss-easings': {},
		'postcss-sort-media-queries': {},
		'webp-in-css/plugin': {
			webpClass: 'has-webp',
			noWebpClass: 'no-webp'
		},
		'autoprefixer': {},
		// 'postcss-sorting': {
		// 	'order': [
		// 		'custom-properties',
		// 		'dollar-variables',
		// 		'declarations',
		// 		'rules',
		// 		'at-rules'
		// 	],
		// 	'properties-order': 'alphabetical',
		// 	'unspecified-properties-position': 'top'
		// },
		'cssnano': {
			preset: [
				'advanced',
				cssNanoRules
			]
		}
	}
};
