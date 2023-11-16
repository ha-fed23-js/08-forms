// Plocka ut element: 2 input, button, #name-tag
// Events!

const nameInput = document.querySelector('#nameInput')
const colorInput = document.querySelector('#colorInput')
const nametagButton = document.querySelector('#nametagButton')
const nametag = document.querySelector('#name-tag')

nametagButton.addEventListener('click', () => {
	nametag.innerText = nameInput.value
	nametag.style.backgroundColor = colorInput.value
})

nameInput.addEventListener('input', event => {
	nametag.innerText = event.target.value
})
