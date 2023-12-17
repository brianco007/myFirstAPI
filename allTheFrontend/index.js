'use strict'
const aURL = 'http://localhost:3000/api/';
// const aURL = 'http://localhost:3000/api/657e5cfa035b6d197804fa26';

const cards = document.getElementById('cards');

window.addEventListener('DOMContentLoaded', showMovies);

// creating a function to fetch the API
async function apiFetcher(url){
  try{
    let res = await fetch(url);
    return await res.json();
  } catch (error){
    console.log('You', error)
  }
}

// function that renders the api content
async function showMovies(){
  const apiContent = await apiFetcher(aURL);
  let cardsContent = '';
  for(let i in apiContent){
    const aMovie = apiContent[i];
    cardsContent += `
      <div class="card">
        <img src=" ${aMovie.cover} " class="movie-cover"/>
        <div class="card-texts">
          <h3> ${aMovie.title} </h3>
          <p> ${'⭐'.repeat(aMovie.stars)} </p>
          <p> ${aMovie.plot} </p>
          <button>Watch now</button>  
        </div>
      </div>
    `;
  }

  cards.innerHTML = cardsContent;
}