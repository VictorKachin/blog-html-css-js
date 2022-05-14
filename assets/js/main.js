// Grab elements
const selectedElement = selector => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(
		`Something went, make sure that ${selector} exists or is typed correctly.`
	);
};

// console.log(selectedElement('.navbar'))

// Nav styles on scroll
const scrollHeader = () => {
	const headerElement = selectedElement('#header');
	if (this.scrollY >= 15) {
		headerElement.classList.add('activated');
	} else {
		headerElement.classList.remove('activated');
	}
};

window.addEventListener('scroll', scrollHeader);

// Open menu and search pop-up 41:20
const menuToggleIcon = selectedElement('#menu-toggle-icon');

const toggleMenu = () => {
	const mobileMenu = selectedElement('#menu');
	mobileMenu.classList.toggle('activated');
	menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// https://www.youtube.com/watch?v=Aj7HLsJenVg

// Open/Close search from pop-up
const formOpenBtn = selectedElement('#search-icon');
const formCloseBtn = selectedElement('#form-close-btn');
const searchFormContainer = selectedElement('#search-form-container');

formOpenBtn.addEventListener('click', () =>
	searchFormContainer.classList.add('activated')
);

formCloseBtn.addEventListener('click', () =>
	searchFormContainer.classList.remove('activated')
);

// -- Close the search from popup on ESC keypress
window.addEventListener('keyup', event => {
	if (event.key === 'Escape')
		searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectedElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
	bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
	bodyElement.classList.toggle('light-theme');

	if (bodyElement.classList.contains('light-theme')) {
		localStorage.setItem('currentTheme', 'themeActive');
	} else {
		localStorage.removeItem('currentTheme');
	}
});
// Swiper
