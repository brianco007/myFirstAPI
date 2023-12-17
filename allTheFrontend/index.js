'use strict'
const aURL = 'http://localhost:3000/api/';
// const aURL = 'http://localhost:3000/api/657f222619d49510644ad60a';

const cards = document.getElementById('cards');
const loader = document.getElementById('loader');


window.addEventListener('DOMContentLoaded', showMovies);

// creating a function to fetch the API
async function apiFetcher(url){
  loader.classList.toggle('hide');
  try{
    let res = await fetch(url);
    return await res.json();
  } catch (error){
    loader.classList.toggle('message');
    loader.textContent = 'Something went wrong!';
  } finally {
    loader.classList.toggle('hide');
  }
}

// function that renders the api content
async function showMovies(){
  const apiContent = await apiFetcher(aURL);
  let cardsContent = '';
  if(apiContent.length > 1){
    for(let i in apiContent){
      const aMovie = apiContent[i];
      cardsContent += `
        <div class="card ${aMovie.title} ${aMovie.genre}">
          <img src=" ${aMovie.cover} " class="movie-cover"/>
          <div class="card-texts">
            <h3> ${aMovie.title} </h3>
            <p> ${'⭐'.repeat(aMovie.stars)} </p>
            <p> ${aMovie.plot} </p>
            <span class="kids ${aMovie.isForEveryone}"> • </span>
            <button class="cta">Watch now</button>  
          </div>
        </div>
      `;
    }
    cards.innerHTML = cardsContent;
    

  } else {
    cardsContent += `
        <div class="card">
          <img src=" ${apiContent.cover} " class="movie-cover"/>
          <div class="card-texts id">
            <h3>Title: ${apiContent.title} </h3>
            <p>Genre: ${apiContent.genre} </p>
            <p>Rating: ${'⭐'.repeat(apiContent.stars)} </p>
            <p>Description: ${apiContent.plot} </p>
            <span class="kids ${apiContent.isForEveryone}"> • </span>
            <button class="cta">Watch now</button>  
          </div>
        </div>
      `;
  }
  cards.innerHTML = cardsContent;
}


