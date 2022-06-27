import { conteiner, films, home, loader, people, planets } from './elements.js';
import { PEOPLE_URL } from './api.js';

export const showPeople = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};
