import renderHTML from "./renderHtml"

function renderLocalList(arr) {
    const uniqueArray = arr.filter((value, index, self) =>
        index === self.findIndex((t) => t.Title === value.Title))

    document.querySelector('.movielist').innerHTML = ''
    uniqueArray.forEach((move, i) => {
        document.querySelector('.movielist').innerHTML += renderHTML(move, i, 'min')
    })
    document.querySelector('.movielist').addEventListener('click', (e) => {
        if (e.target.matches('.add-to-watch-list')) {
            const filmID = e.target.id
            let movis = arr.filter(item => item !== arr[filmID])
            arr = movis
            localStorage.setItem("myFilm", JSON.stringify(arr))
            renderLocalList(arr)
        }
    })
}
export default renderLocalList