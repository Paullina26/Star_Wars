import { conteiner, films, home, loader, people, planets } from './elements.js';
import { PEOPLE_URL } from './api.js';
import { createSingleCardPeople } from './cardPeople.js';

const createPeopleCard = peoples => {
  peoples.forEach(people => {
    createSingleCardPeople(people, true);
  });
};

export const showPeople = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
  fetch(PEOPLE_URL)
    .then(response => response.json())
    .then(data => {
      createPeopleCard(data.results);
      loader.style.display = 'none';
    });
};
