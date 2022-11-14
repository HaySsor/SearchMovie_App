(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(r,s,o){const{Runtime:i,Title:e,Plot:t,Poster:c,imdbRating:u,Genre:m}=r;return`<div class="movie-serach-box">
    <img src=${c} alt="" class="cover">
    <div class="info-movie">
      <div class="title-box">
        <h1 class="movie-title">${e}</h1>
        <p class="star">\u2B50 ${u}</p>
      </div>
      <div class="about-info" >
        <p class="time">${i}</p>
        <p class="genre">${m}</p>
        <button id='${s}' class="add-to-watch-list">${o==="plus"?"<img class='plus' src='/plus.svg' alt=''>":"<img class='plus' src='/min.svg' alt=''>"} Watchlist </button>
        
      </div>
      <div class="text-info">
        <p class="text">${t}</p>
        </div>
        </div>
    </div> `}const p=async(r,s)=>{const o=`https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&t=${r}`,e=await(await fetch(o)).json();return f(e,s,"plus")},h=(r,s)=>{r.Search.forEach((o,i)=>p(o.Title,i).then(e=>{document.querySelector(".movielist").innerHTML+=e})),document.querySelector(".movielist").addEventListener("click",o=>{if(o.target.matches(".add-to-watch-list")){const i=o.target;i.style.opacity="0";const e=i.id;s.push(r.Search[e]),localStorage.setItem("myFilm",JSON.stringify(s))}})},a=document.querySelector(".search"),l=JSON.parse(localStorage.getItem("myFilm"));let n=[];l?n=l:n=[];const d=async()=>{document.querySelector(".movielist").innerHTML="";const s=`https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&s=${a.value}`;try{const i=await(await fetch(s)).json();h(i,n)}catch{document.querySelector(".movielist").innerHTML=`<h1 class ="error">Sry can't fine movie</h1>`}},v=r=>{r.key==="Enter"&&d()};document.querySelector(".search-btn").addEventListener("click",d);a.addEventListener("keyup",v);
