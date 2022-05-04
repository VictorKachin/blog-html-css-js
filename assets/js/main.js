// Grab elements
const selectedElement = selector => {
	const element = document.querySelector(selector)
	if (element) return element
	throw new Error(
		`Something went, make sure that ${selector} exists or is typed correctly.`
	)
}

// console.log(selectedElement(".navbar"))

// Nav styles on scroll
const scrollHeader = () => {
	const headerElement = selectedElement("#header")
	if (this.scrollY >= 15) {
		headerElement.classList.add("activated")
	} else {
		headerElement.classList.remove("activated")
	}
}

window.addEventListener("scroll", scrollHeader)

// Open menu and search pop-up 41:20
// https://www.youtube.com/watch?v=Aj7HLsJenVg

// Open/Close search from pop-up

// -- Close the search from popup on ESC keypress

// Switch theme/add to local storage

// Swiper
