document.getElementById('addGame').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/games', {
    title: document.getElementById('title').value
  })
    .then(({ data }) => {
      let gameElem = document.createElement('li')
      gameElem.innerHTML = `
        ${document.getElementById('title').value}
        <button class="deleteGame" data-id="${data.insertId}">X</button>
      `
      document.getElementById('games').append(gameElem)
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteGame') {
    axios.delete(`/api/games/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})