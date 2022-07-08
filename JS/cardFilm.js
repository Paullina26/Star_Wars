import { showDetailsFilm } from './subpage_Films_Details.js';
import { conteiner } from './elements.js';
import { imgMoveCovers } from './images.js';
import { checkingImage } from './checkingImage.js';

export const createSingleCardFilm = (film, isClickable) => {
  conteiner.className = 'conteinerCardColumns';

  const cardMovie = document.createElement('div');
  cardMovie.className = 'movie';
  conteiner.appendChild(cardMovie);

  const title = document.createElement('h2');
  title.innerHTML = `${film.title}`;
  cardMovie.appendChild(title);

  const episodeCover = document.createElement('div');
  episodeCover.className = 'conteinerCover';
  cardMovie.appendChild(episodeCover);

  const imgCover = document.createElement('img');
  imgCover.className = 'imgCover';
  episodeCover.appendChild(imgCover);

  const episode = document.createElement('p');
  episode.innerHTML = `Episode: ${film.episode_id}`;
  cardMovie.appendChild(episode);

  const releaseDate = document.createElement('p');
  releaseDate.innerHTML = `Date Of Production: ${film.release_date}`;
  cardMovie.appendChild(releaseDate);

  checkingImage(imgMoveCovers, film, imgCover, {
    first: 'episode',
    second: 'episode_id',
  });

  if (isClickable)
    cardMovie.addEventListener('click', () => showDetailsFilm(film.url));
};
