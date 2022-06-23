import { conteiner, films, home, loader, people, planets } from './elements.js';
import { BASIC_URL, FILM_URL } from './api.js';

import { showHomePage } from './home.js';
import { showFilms } from './films.js';

//!People

const showPeople = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};

//!Planets

const showPlanets = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};

//! Details Film

const showDetailsFilm = url => {
  conteiner.innerHTML = '';
  loader.style.display = 'block';
  console.log(url);
};

films.addEventListener('click', showFilms);
home.addEventListener('click', showHomePage);
showHomePage();
people.addEventListener('click', showPeople);
planets.addEventListener('click', showPlanets);
