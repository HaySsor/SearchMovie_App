const find = (value) => {
    const searchMovie = []

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

export default find