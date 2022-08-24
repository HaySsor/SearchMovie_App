import getSpecialInfo from './getSpecialInfoFormApi'

const renderFetchMovieList = (data) => {
    data.Search.forEach((item, i) => {
        return getSpecialInfo(item.Title, i).then(move => {
            document.querySelector('.movielist').innerHTML += move
            document.querySelectorAll('.add-to-watch-list').forEach(button => {
                button.addEventListener('click', (e) => {
                    const button = e.target
                    button.style.opacity = '0'
                    const filmID = e.target.id
                    addedfilm.push(data.Search[filmID])
                    localStorage.setItem("myFilm", JSON.stringify(addedfilm))
                })
            })
        })
    })
}
export default renderFetchMovieList