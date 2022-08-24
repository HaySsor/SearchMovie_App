import render from './renderHtml'
import find from './findMovieonWatchlist'
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


document.querySelector(".search").addEventListener('keyup', (e) => {
    find(e.target.value)
})