/**
 *  TailwindCSS::Methods::Generate Spacing
 * @see https://tailwindcss.com/docs/customizing-spacing
 */

const pxToRem = require('./pxToRem');

module.exports = (steps = 3, max = 300, settings = {}) => {
	let obj = {};

	for (let i = 0; i <= max; i++) {
		if (i <= 20) {
			obj[i] = pxToRem(i);
		}

		if ((i > 20) && (i % steps === 0)) {
			obj[i] = pxToRem(i);
		}
	}
	return obj;
};
