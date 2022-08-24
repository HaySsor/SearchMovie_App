import '../style/style.scss'
import renderFetchMovieList from './renderFetchMovieList'


const inputTitleMovie = document.querySelector('.search')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myFilm"))

let addedfilm = []

if (leadsFromLocalStorage) {
  addedfilm = leadsFromLocalStorage
} else {
  addedfilm = []
}

const getData = async () => {
  document.querySelector('.movielist').innerHTML = ''
  const moveTitle = inputTitleMovie.value

  const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&s=${moveTitle}`

  try {
    const res = await fetch(URL)
    const data = await res.json()

    renderFetchMovieList(data)

  } catch (err) {
    document.querySelector('.movielist').innerHTML = `<h1 class ="error">Sry can't fine movie</h1>`
  }

}

const enterKayCheck = e => {
  if (e.key === "Enter") {
    getData();
  }
};

document.querySelector('.search-btn').addEventListener('click', getData)
inputTitleMovie.addEventListener("keyup", enterKayCheck);

