import { FILM_URL } from './api.js';
import { imgMoveCovers } from './images.js';
import { conteiner, films, loader } from './elements.js';
import { showDetailsFilm } from './detaiksFilm.js';

const checkingEpisode = (movie, imgCover) => {
  imgMoveCovers.forEach(cover => {
    if (cover.episode === movie.episode_id) {
      imgCover.setAttribute('src', cover.img);
    }
  });
};

const filmCard = movies => {
  movies.forEach(movie => {
    const cardMovie = document.createElement('div');
    cardMovie.className = 'movie';
    conteiner.appendChild(cardMovie);

    const title = document.createElement('h2');
    title.innerHTML = `${movie.title}`;
    cardMovie.appendChild(title);

    const episodeCover = document.createElement('div');
    episodeCover.className = 'conteinerCover';
    cardMovie.appendChild(episodeCover);

    const imgCover = document.createElement('img');
    imgCover.className = 'imgCover';
    episodeCover.appendChild(imgCover);

    const episode = document.createElement('p');
    episode.innerHTML = `Episode: ${movie.episode_id}`;
    cardMovie.appendChild(episode);

    const releaseDate = document.createElement('p');
    releaseDate.innerHTML = `Date Of Production: ${movie.release_date}`;
    cardMovie.appendChild(releaseDate);
    checkingEpisode(movie, imgCover);

    console.log(movie);
    cardMovie.addEventListener('click', () => showDetailsFilm(movie.url));
  });
};

export const showFilms = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
  fetch(FILM_URL)
    .then(response => response.json())
    .then(data => {
      filmCard(data.results);
      loader.style.display = 'none';
    });
};
