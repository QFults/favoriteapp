document.getElementById('addSong').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/songs', {
    title: document.getElementById('title').value,
    artist: document.getElementById('artist').value
  })
    .then(() => {
      let songElem = document.createElement('li')
      songElem.textContent = `${document.getElementById('title').value} by ${document.getElementById('artist').value}`
      document.getElementById('songs').append(songElem)
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteSong') {
    axios.delete(`/api/songs/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})