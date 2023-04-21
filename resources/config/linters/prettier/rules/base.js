/**
 *  Prettier::Base configuration
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	jsxSingleQuote: true,
	plugins: [require('prettier-plugin-tailwindcss')],
	quoteProps: 'consistent',
	semi: true,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	vueIndentScriptAndStyle: true
};
