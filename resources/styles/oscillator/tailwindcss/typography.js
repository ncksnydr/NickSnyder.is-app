/**
 *  TailwindCSS → Theme → Typography
 *  @see https://tailwindcss.com/docs/theme
 */

import { generateRemSpacing, pxToRem } from '../../../scripts/utilities/tailwindBuildHelpers';

export const fontFamily = {
	sans: [
		'Tofino',
		'Helvetica Neue',
		'Helvetica',
		'Arial',
		'sans-serif'
	],
	serif: [
		'Ideal Sans SSm A',
		'Ideal Sans SSm B',
		'Lucida Bright',
		'Georgia',
		'serif'
	]
};

export const fontSize = {
	...generateRemSpacing(1, 1, 18),
	...generateRemSpacing(3, 21, 120),
	'xs': pxToRem(13),
	'sm': pxToRem(15),
	'md': pxToRem(18),
	'base': pxToRem(18),
	'lg': pxToRem(21),
	'xl': pxToRem(24),
	'2xl': pxToRem(30),
	'3xl': pxToRem(36),
	'4xl': pxToRem(42),
	'5xl': pxToRem(60),
	'6xl': pxToRem(72)
};

export const fontWeight = {
	thin: '100',
	light: '200',
	book: '300',
	regular: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
	black: '800',
	ultra: '900'
};

export default {
	fontFamily,
	fontSize,
	fontWeight
};
