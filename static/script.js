console.log('up and running!!')

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM Content was loaded')
	document.getElementById('delete-form').addEventListener('submit', (e) => {
		console.log('You clicked delete!')
		if (confirm('Are you sure you wish to delete?')) {
			return true
		}
		else {
			e.preventDefault()
			return false
		}
	})
})