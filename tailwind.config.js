/**
	*  Tailwind.js → Configuration file
	*  @see https://tailwindcss.com/docs/guides/laravel
 */

import aspectRatio from './resources/styles/oscillator/tailwindcss/aspectRatio';
import colors from './resources/styles/oscillator/tailwindcss/colors';
import screens from './resources/styles/oscillator/tailwindcss/screens';
import { fontFamily, fontSize, fontWeight } from './resources/styles/oscillator/tailwindcss/typography';

const config = {
	content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.js',
		'./resources/**/*.vue',
		'!./resources/config/**'
	],
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	],
	theme: {
		fontFamily,
		screens,
		extend: {
			aspectRatio,
			colors,
			fontSize,
			fontWeight
		}
	},
	variants: {}
};

export default config;
