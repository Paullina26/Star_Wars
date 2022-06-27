import { FILMS_URL } from './api.js';
import { conteiner, films, loader } from './elements.js';
import { createSingleCard } from './cardFilm.js';

const filmCard = movies => {
  movies.forEach(movie => {
    createSingleCard(movie, true);
    console.log(movie);
  });
};

export const showFilms = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
  fetch(FILMS_URL)
    .then(response => response.json())
    .then(data => {
      filmCard(data.results);
      loader.style.display = 'none';
    });
};
