/**
 *  TailwindCSS::Theme::Colors::Default Colors
 * @see https://tailwindcss.com/docs/customizing-colors
 */

const Color = require('color');
const tailwindDefaultColors = require('tailwindcss/colors');

const createColorPalette = hex => {
	const rootColor = Color(hex);
	const hsl = rootColor.hsl();
	return {
		50: hsl.lighten(0.93).hex(),
		100: hsl.lighten(0.9).hex(),
		200: hsl.lighten(0.6).hex(),
		300: hsl.lighten(0.45).hex(),
		400: hsl.lighten(0.3).hex(),
		500: rootColor.hex(),
		600: hsl.darken(0.12).hex(),
		700: hsl.darken(0.18).hex(),
		800: hsl.darken(0.3).hex(),
		900: hsl.darken(0.51).hex(),
		DEFAULT: rootColor.hex()
	};
};

module.exports = {
	colors: {
		inherit: 'inherit',
		current: 'currentColor',
		transparent: 'transparent',
		black: '#000',
		white: '#fff',
		primary: createColorPalette('#2EB7B0'),
		secondary: createColorPalette('#575D90'),
		tertiary: createColorPalette('#F487B6'),
		amber: tailwindDefaultColors.amber,
		blue: tailwindDefaultColors.blue,
		cyan: tailwindDefaultColors.cyan,
		emerald: tailwindDefaultColors.emerald,
		fuchsia: tailwindDefaultColors.fuchsia,
		gray: tailwindDefaultColors.gray,
		green: tailwindDefaultColors.green,
		indigo: createColorPalette('#575D90'),
		lime: tailwindDefaultColors.lime,
		neutral: tailwindDefaultColors.neutral,
		orange: tailwindDefaultColors.orange,
		pink: createColorPalette('#F487B6'),
		purple: tailwindDefaultColors.purple,
		red: tailwindDefaultColors.red,
		rose: tailwindDefaultColors.rose,
		sky: tailwindDefaultColors.sky,
		stone: tailwindDefaultColors.stone,
		teal: createColorPalette('#2EB7B0'),
		violet: tailwindDefaultColors.violet,
		yellow: tailwindDefaultColors.yellow,
		zinc: tailwindDefaultColors.zinc,
		slate: tailwindDefaultColors.slate
	}
};
