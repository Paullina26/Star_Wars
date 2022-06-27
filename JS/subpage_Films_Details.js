import { conteiner, films, home, loader, people, planets } from './elements.js';

export const showDetailsFilm = url => {
  conteiner.innerHTML = '';
  loader.style.display = 'block';
  console.log(url);
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     filmCard(data.results);
  //     loader.style.display = 'none';
  //   });
};
