const toggleButton = document.querySelector('#toggle-button')
const birdList = document.querySelector('.bird-list')

// Bra felsökningsmetod:
// console.log('elements:', toggleButton, birdList);

toggleButton.addEventListener('click', () => {
	// birdList.classList.add('highlight')
	const list = Array.from(birdList.children)
	list.forEach(bird => {
		if( Math.random() < 0.75 ) {
			bird.classList.toggle('highlight')
		}
	})
})


const bubbleDiv = document.querySelector('.bubbling')
const bubbleSection = document.querySelector('.bubbling > section')
const bubbleButton = document.querySelector('.bubbling > section > button')

// Mål: klick på knappen ska bara hända på knappen
// Klick på section ska även hända på div
bubbleDiv.addEventListener('click', () => {
	console.log('Klickade på div');
})
bubbleSection.addEventListener('click', () => {
	console.log('Klickade på section');
})
bubbleButton.addEventListener('click', event => {
	event.stopPropagation()
	console.log('Klickade på button');
})



// Prevent default
const nameInput = document.querySelector('#nameInput')

// input, change, keydown, keyup
nameInput.addEventListener('input', event => {
	console.log('input event: ', event.data, event.target.value);
})
nameInput.addEventListener('change', event => {
	console.log('change event: ', event.target.value);
})
nameInput.addEventListener('keydown', event => {
	console.log(`keydown event: code=${event.code}, key=${event.key}, target value=${event.target.value}. `);
	if( event.target.value.length < 1 ) {
		console.log('Namnfältet är tomt');
		event.preventDefault()
		event.target.value = event.key.toUpperCase()
	}
	
	if( event.key === 'f' ) {
		event.preventDefault()
		console.log('keydown: Prevented default');
	}
})
