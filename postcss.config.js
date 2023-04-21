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
 */

// TODO Spawn postcss-sorting into its own PostCSS config object for cleaning up source files.

const env = `${process.env.NODE_ENV}` || 'development';
const cssNanoRules = {
	...require('./resources/config/linters/postcss/cssnano/globals'),
	...require(`./resources/config/linters/postcss/cssnano/${env}.js`)
};

module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		'tailwindcss': {},
		'postcss-easings': {},
		'postcss-input-range': {},
		'autoprefixer': {},
		'postcss-sort-media-queries': {},
		'cssnano': {
			preset: 'cssnano-preset-advanced',
			cssNanoRules
		}
	}
};
