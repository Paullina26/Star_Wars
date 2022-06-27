import { conteiner } from './elements.js';

export const createSingleCardPeople = (people, isClickable) => {
  const cardPeople = document.createElement('div');
  cardPeople.className = 'people';
  conteiner.appendChild(cardPeople);

  const name = document.createElement('h2');
  name.innerHTML = `${people.name}`;
  cardPeople.appendChild(name);

  const profilePhoto = document.createElement('div');
  profilePhoto.className = 'profilePhoto';
  cardPeople.appendChild(profilePhoto);
};
