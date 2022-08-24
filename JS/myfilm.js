import render from './render'
import '../style/style.scss'

let myFilm = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myFilm"))



if (leadsFromLocalStorage) {
    myFilm = leadsFromLocalStorage
    renderLocalList()
}

function renderLocalList() {

    const uniqueArray = myFilm.filter((value, index, self) =>
        index === self.findIndex((t) => t.Title === value.Title))


    document.querySelector('.movielist').innerHTML = ''
    uniqueArray.forEach((move, i) => {
        document.querySelector('.movielist').innerHTML += render(move, i, 'min')
        document.querySelectorAll('.add-to-watch-list').forEach(item => {
            item.addEventListener('click', (e) => {
                const filmID = e.target.id
                let movis = myFilm.filter(item => item !== myFilm[filmID])
                myFilm = movis
                localStorage.setItem("myFilm", JSON.stringify(myFilm))
                renderLocalList()
            })
        })
    })
}

const find = (value) => {
    let searchMovie = []

    if (value.trim().length !== 0) {
        myFilm.forEach(move => {
            const match = new RegExp(value, 'i').test(move.Title)
            if (match) {
                searchMovie.push(move)
            } else {
                return
            }
        })
    } else {
        searchMovie = leadsFromLocalStorage
    }

    myFilm = searchMovie
    renderLocalList()
}


document.querySelector(".search").addEventListener('keyup', (e) => {
    find(e.target.value)
})