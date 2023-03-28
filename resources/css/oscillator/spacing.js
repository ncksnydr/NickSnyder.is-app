
const pxToRem = require('../../js/oscillator/helpers/pxToRem');

const generateSpacing = settings => {
	const output = {};
	const triggers = [
		settings.trigger,
		`${settings.trigger}x`,
		`${settings.trigger}y`,
		`${settings.trigger}t`,
		`${settings.trigger}r`,
		`${settings.trigger}b`,
		`${settings.trigger}l`
	];

	for (var i = settings.min; i <= settings.max; i += settings.steps) {
		triggers.forEach(trigger => {
			output[`${trigger}-${i}`] = pxToRem(i);
		});
	}
};

module.exports = {
	spacing: generateSpacing({
		trigger: 'p',
		min: 0,
		max: 100,
		steps: 3
	}),
	padding: generateSpacing({
		trigger: 'm',
		min: 0,
		max: 100,
		steps: 3
	})
};
