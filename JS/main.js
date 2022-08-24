import '../style/style.scss'
import render from './render'

const inputTitleMovie = document.querySelector('.search')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myFilm"))

 let addedfilm
 
if (leadsFromLocalStorage) {
  addedfilm = leadsFromLocalStorage
}else{
  addedfilm =[]
}


const getData = async () => {
  document.querySelector('.movielist').innerHTML = ''
  const MoveTitle = inputTitleMovie.value

  const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&s=${MoveTitle}`

  try {
    const res = await fetch(URL)
    const data = await res.json()




    data.Search.forEach((item, i) => {
      return GetSpecialInfo(item.Title, i).then(move => {
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


  } catch (err) {
    document.querySelector('.movielist').innerHTML = `<h1 class ="error">Sry can't fine movie</h1>`
  }

}


const GetSpecialInfo = async (title, i) => {
  const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&t=${title}`

  const res = await fetch(URL)
  const data = await res.json()

  const html = render(data, i, 'plus')
  return html
}
const enterKayCheck = e => {
  if (e.key === "Enter") {
    getData();
  }
};

document.querySelector('.search-btn').addEventListener('click', getData)
inputTitleMovie.addEventListener("keyup", enterKayCheck);

