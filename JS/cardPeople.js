import { conteiner } from './elements.js';
import { showPeople } from './page_People.js';
import { imgPepole } from './images.js';

export const checkingProfilePhoto = (people, imgProfile) => {
  imgPepole.forEach(profile => {
    if (profile.name === people.name) {
      imgProfile.setAttribute('src', profile.img);
    }
  });
};

export const createSingleCardPeople = (people, isClickable) => {
  const cardPeople = document.createElement('div');
  cardPeople.className = 'cardPeople';
  conteiner.appendChild(cardPeople);

  const name = document.createElement('h2');
  name.innerHTML = `${people.name}`;
  cardPeople.appendChild(name);

  const profilePhotoConteiner = document.createElement('div');
  profilePhotoConteiner.className = 'profilePhoto';
  cardPeople.appendChild(profilePhotoConteiner);

  const profilePhoto = document.createElement('img');
  profilePhoto.className = 'imgProfilePhoto';
  profilePhotoConteiner.appendChild(profilePhoto);

  // checkingProfilePhoto(people, imgProfile);

  if (isClickable)
    cardPeople.addEventListener('click', () => showPeopleDetalis(people.url));
};
