const pxToRem = require('../../js/oscillator/helpers/pxToRem');

module.exports = {
	fontFamily: {
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
	},
	fontSize: {
		'sm': pxToRem(15),
		'base': pxToRem(18),
		'xl': pxToRem(24),
		'2xl': pxToRem(30),
		'3xl': pxToRem(36),
		'4xl': pxToRem(42),
		'5xl': pxToRem(60)
	},
	fontWeight: {
		thin: '100',
		light: '200',
		book: '300',
		regular: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		black: '800',
		ultra: '900'
	}
};
