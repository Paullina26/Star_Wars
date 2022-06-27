import { conteiner, films, home, loader, people, planets } from './elements.js';
import { showHomePage } from './page_Home.js';
import { showFilms } from './page_Films.js';
import { showPeople } from './page_People.js';
import { showPlanets } from './page_Planets.js';

films.addEventListener('click', showFilms);
home.addEventListener('click', showHomePage);
showHomePage();
people.addEventListener('click', showPeople);
planets.addEventListener('click', showPlanets);
