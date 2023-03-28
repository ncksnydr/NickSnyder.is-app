/**
	*  Tailwind.js → Configuration file
	*  @see https://tailwindcss.com/docs/guides/laravel
 */
const tailwindSettingsPath = './resources/css/oscillator/';

module.exports = {
	content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.js',
		'./resources/**/*.vue'
	],
	plugins: [
	],
	theme: {
		...require(`${tailwindSettingsPath}/colors.js`),
		...require(`${tailwindSettingsPath}/typography.js`)
	},
	variants: {}
};
