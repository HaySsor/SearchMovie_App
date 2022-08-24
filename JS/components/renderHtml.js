export default function renderHTML(data, i, value) {
  const { Runtime, Title, Plot, Poster, imdbRating, Genre } = data
  return `<div class="movie-serach-box">
    <img src=${Poster} alt="" class="cover">
    <div class="info-movie">
      <div class="title-box">
        <h1 class="movie-title">${Title}</h1>
        <p class="star">⭐ ${imdbRating}</p>
      </div>
      <div class="about-info" >
        <p class="time">${Runtime}</p>
        <p class="genre">${Genre}</p>
        <button id='${i}' class="add-to-watch-list">${value === 'plus' ? "<img class='plus' src='/plus.svg' alt=''>" : "<img class='plus' src='/min.svg' alt=''>"} Watchlist </button>
        
      </div>
      <div class="text-info">
        <p class="text">${Plot}</p>
        </div>
        </div>
    </div> `
}