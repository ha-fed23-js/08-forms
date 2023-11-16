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
