// Användarprofil
const defaultUser = {
	name: 'Guy Fierri',
	courses: [
		{ title: 'HTML', isDone: true },
		{ title: 'JavaScript', isDone: false },
		{ title: 'UX', isDone: false },
		{ title: 'Agila metoder', isDone: false }
	]
}

function renderUser(user) {
	const profileName = document.querySelector('.profile-name')
	const courseList = document.querySelector('.courses')
	
	profileName.innerText = user.name
	
	let idCounter = 0
	user.courses.forEach(course => {
		const id = 'course-checkbox-' + idCounter
		idCounter++
		console.log('Course är: ', course);
		const p = document.createElement('p')
		
		const checkbox = document.createElement('input')
		checkbox.id = id
		checkbox.type = 'checkbox'
		checkbox.checked = course.isDone
		p.append(checkbox)
	
		const label = document.createElement('label')
		label.htmlFor = id
		label.innerText = course.title
		p.append(label)
	
		courseList.append(p)
	})
}

renderUser(defaultUser)
