
import find from '../components/findMovieonWatchlist'
import renderLocalList from '../components/renderLocalList'
import '../../style/style.scss'

let myFilm = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myFilm"))



if (leadsFromLocalStorage) {
    myFilm = leadsFromLocalStorage
    renderLocalList(myFilm)
}

renderLocalList(myFilm)

document.querySelector(".search").addEventListener('keyup', (e) => {
    find(e.target.value, myFilm)
})
