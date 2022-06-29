import { conteiner } from './elements.js';
// import { showPeople } from './page_People.js';
import { imgPepole } from './images.js';

export const checkingProfilePhoto = (people, imgProfile) => {
  imgPepole.forEach(profile => {
    if (profile.name === people.name) {
      imgProfile.setAttribute('src', profile.img);
    }
  });
};

const specesPeople = (species_URL, species) => {
  console.log(species_URL);
  fetch(species_URL)
    .then(response => response.json())
    .then(data => {
      characterDetails(data.name);
      console.log(`specesPeople ${data.name}`);
    });
};

const characterDetails = (detalis, species) => {
  detalis.forEach(detal => {
    console.log(species);
    species.innerHTML = `Species: ${detal.name}`;
    console.log(`characterDetails ${detal.name}`);
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

  const species = document.createElement('p');
  const speciesURL = people.species;
  console.log(`zmianna speciesURL ${speciesURL}`);
  // if (speciesURL) specesPeople(speciesURL[1]);

  if (people.species.length === 0) {
    species.innerHTML = `Species: Human`;
  } else {
    characterDetails(speciesURL, species);
  }
  cardPeople.appendChild(species);

  // checkingProfilePhoto(people, imgProfile);

  if (isClickable)
    cardPeople.addEventListener('click', () => showPeopleDetalis(people.url));
};
