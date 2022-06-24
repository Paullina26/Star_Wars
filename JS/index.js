import { conteiner, films, home, loader, people, planets } from './elements.js';

import { showHomePage } from './pageHome.js';
import { showFilms } from './pageFilms.js';

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

films.addEventListener('click', showFilms);
home.addEventListener('click', showHomePage);
showHomePage();
people.addEventListener('click', showPeople);
planets.addEventListener('click', showPlanets);
