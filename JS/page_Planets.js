import { conteiner, films, home, loader, people, planets } from './elements.js';
import { PLANETS_URL } from './api.js';

export const showPlanets = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};
