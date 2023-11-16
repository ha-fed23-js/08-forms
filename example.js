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