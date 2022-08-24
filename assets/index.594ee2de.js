(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(r,s,i){const{Runtime:o,Title:e,Plot:t,Poster:c,imdbRating:a,Genre:n}=r;return`<div class="movie-serach-box">
    <img src=${c} alt="" class="cover">
    <div class="info-movie">
      <div class="title-box">
        <h1 class="movie-title">${e}</h1>
        <p class="star">\u2B50 ${a}</p>
      </div>
      <div class="about-info" >
        <p class="time">${o}</p>
        <p class="genre">${n}</p>
        <button id='${s}' class="add-to-watch-list">${i==="plus"?"<img class='plus' src='/plus.svg' alt=''>":"<img class='plus' src='/min.svg' alt=''>"} Watchlist </button>
        
      </div>
      <div class="text-info">
        <p class="text">${t}</p>
        </div>
        </div>
    </div> `}const u=document.querySelector(".search"),d=JSON.parse(localStorage.getItem("myFilm"));let l;d?l=d:l=[];const m=async()=>{document.querySelector(".movielist").innerHTML="";const s=`https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&s=${u.value}`;try{const o=await(await fetch(s)).json();o.Search.forEach((e,t)=>y(e.Title,t).then(c=>{document.querySelector(".movielist").innerHTML+=c,document.querySelectorAll(".add-to-watch-list").forEach(a=>{a.addEventListener("click",n=>{const f=n.target;f.style.opacity="0";const p=n.target.id;l.push(o.Search[p]),localStorage.setItem("myFilm",JSON.stringify(l))})})}))}catch{document.querySelector(".movielist").innerHTML=`<h1 class ="error">Sry can't fine movie</h1>`}},y=async(r,s)=>{const i=`https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&t=${r}`,e=await(await fetch(i)).json();return h(e,s,"plus")},v=r=>{r.key==="Enter"&&m()};document.querySelector(".search-btn").addEventListener("click",m);u.addEventListener("keyup",v);
