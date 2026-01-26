/*
fetch('/movies')
    .then(response =>response.json())
    .then(data => {
        console.log(data)
    })
*/

const respuesta = await fetch("/movies")
const movies = await respuesta.json()

const tableBody = document.querySelector("#tabla")

movies.forEach(movie => createMovie(movie))

function createMovie(movie) {
    const tr = document.createElement("tr")
    const tdID = document.createElement("td")
    const tdTitle = document.createElement("td")
    const tdGenres = document.createElement("td")
    
    tdID.textContent = movie.id
    tdTitle.textContent = movie.title
    tdGenres.textContent = movie.genre.replaceAll("|",",")
    
    tr.appendChild(tdID)
    tr.appendChild(tdTitle)
    tr.appendChild(tdGenres)
    tableBody.appendChild(tr)
    
}