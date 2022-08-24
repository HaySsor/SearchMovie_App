import renderLocalList from "./renderLocalList"
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myFilm"))

const find = (value, arr) => {
    let searchMovie = []

    if (value.trim().length !== 0) {
        arr.forEach(move => {
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

    arr = searchMovie
    renderLocalList(arr)
}

export default find