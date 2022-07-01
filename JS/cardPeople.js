import { conteiner } from './elements.js';
// import { showPeople } from './page_People.js';
import { imgPepole } from './images.js';

// export const checkingProfilePhoto = (people, imgProfile) => {
//   imgPepole.forEach(profile => {
//     if (profile.name === people.name) {
//       imgProfile.setAttribute('src', profile.img);
//     }
//     // else {
//     //   imgProfile.setAttribute('src', 'img/noPicture.jpg');
//     // }
//   });
// };

const characterDetails = (urls, species) => {
  urls.forEach(url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        species.innerHTML = `Species: ${data.name}`;
      });
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
  cardPeople.appendChild(species);

  if (people.species.length === 0) {
    species.innerHTML = `Species: Human`;
  } else {
    characterDetails(speciesURL, species);
  }

  // checkingProfilePhoto(people, imgProfile);

  if (isClickable)
    cardPeople.addEventListener('click', () => showPeopleDetalis(people.url));
};
