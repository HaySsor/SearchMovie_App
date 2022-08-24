import getSpecialInfo from './getSpecialInfo'

const renderFetchMovieList = (data, arr) => {

    data.Search.forEach((item, i) => {
        return getSpecialInfo(item.Title, i).then(move => {
            document.querySelector('.movielist').innerHTML += move
        })
    })
    document.querySelector('.movielist').addEventListener('click', (e) => {
        if (e.target.matches('.add-to-watch-list')) {
            const button = e.target
            button.style.opacity = '0'
            const filmID = button.id
            arr.push(data.Search[filmID])
            localStorage.setItem("myFilm", JSON.stringify(arr))
        }
    })
}
export default renderFetchMovieList
