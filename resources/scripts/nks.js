import './oscillator/bootstrap.js';
import * as Enquire from 'enquire.js';

// TODO Add documentation.
// TODO Move mobile menu and contact form into their own files.

const $mobileMenu = document.querySelector('#mobileMenu');
const $triggerOpenMobileMenu = document.querySelector('#mobileMenuOpen');
const $triggerCloseMobileMenu = document.querySelector('#mobileMenuClose');

const closeMobileMenu = () => {
	$mobileMenu.classList.add('hidden');
	$mobileMenu.classList.remove('block');
	document.removeEventListener('keydown', closeMenuViaEscape);
};

const openMobileMenu = () => {
	$mobileMenu.classList.add('block');
	$mobileMenu.classList.remove('hidden');
	document.addEventListener('keydown', closeMenuViaEscape);
};

const closeMenuViaEscape = (event) => {
	if (event.keyCode === 27) {
		closeMobileMenu();
	}
};

const addEventListeners = () => {
	$triggerOpenMobileMenu.addEventListener('mousedown', openMobileMenu);
	$triggerCloseMobileMenu.addEventListener('mousedown', closeMobileMenu);
};

const removeEventListeners = () => {
	$triggerOpenMobileMenu.removeEventListener('mousedown', openMobileMenu);
	$triggerCloseMobileMenu.removeEventListener('mousedown', closeMobileMenu);
};

Enquire.register('screen and (min-width: 1024px', {
	match: () => {
		closeMobileMenu();
		removeEventListeners();
	},
	unmatch: () => {
		addEventListeners();
	},
	setup: () => {
		addEventListeners();
	}
});
