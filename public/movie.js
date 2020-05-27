document.getElementById('addMovie').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/movies', {
    title: document.getElementById('title').value
  })
    .then(({ data }) => {
      let movieElem = document.createElement('li')
      movieElem.innerHTML = `
        ${document.getElementById('title').value}
        <button class="deleteMovie" data-id="${data.insertId}">X</button>
      `
      document.getElementById('movies').append(movieElem)
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteMovie') {
    axios.delete(`/api/movies/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})