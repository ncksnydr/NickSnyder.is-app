/**
	*  Oscillator → Components → Email
	*  @see
 */

const $contactForm = document.querySelector('#contact form');

$contactForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const contactFormMessage = {
		to: 'nick@nicksnyder.is',
		from: contactFormCheckEmailField('email'),
		subject: 'Contact form request',
		name: contactFormCheckTextFields('full-name'),
		html: contactFormCheckTextFields('message')
	};

	sendmail({
		from: 'no-reply@yourdomain.com',
		to: 'test@qq.com, test@sohu.com, test@163.com ',
		subject: 'test sendmail',
		html: 'Mail of test sendmail '
	}, function (err, reply) {
		console.log(err && err.stack);
		console.dir(reply);
	});
});

const validateEmail = (email) => {
	const regexValidEmail = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');
	return regexValidEmail.test(email);
};

const contactFormTriggerError = (formField) => {
	document.querySelector('#contact form #contactFormErrorMessage').classList.remove('hidden');
	formField.classList.add('border-danger-600');
};

const contactFormCheckEmailField = (formFieldId) => {
	const formField = document.querySelector(`#contact form #${formFieldId}`);

	if (!formField.value) {
		contactFormTriggerError(formField);
		return null;
	}

	if (!validateEmail(formField.value)) {
		document.querySelector('#contactFormErrorMessage').innerHTML = 'Please provide a valid email address.';
		contactFormTriggerError(formField);
		return null;
	}

	return formField.value;
};

const contactFormCheckTextFields = (formFieldId) => {
	const formField = document.querySelector(`#contact form #${formFieldId}`);
	if (!formField.value) {
		document.querySelector('#contact form #contactFormErrorMessage').classList.remove('hidden');
		formField.classList.add('border-danger-600');
		return null;
	}
	return formField.value;
};
