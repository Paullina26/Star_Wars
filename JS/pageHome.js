import { HOME_TEXT } from './constants.js';
import { conteiner, loader } from './elements.js';

export const showHomePage = () => {
  loader.style.display = 'none';
  conteiner.innerHTML = '';
  const title = document.createElement('h1');
  title.innerHTML = 'STAR WARS';
  conteiner.appendChild(title);

  const imgConteiner = document.createElement('div');
  imgConteiner.className = 'imgConteiner';
  conteiner.appendChild(imgConteiner);

  const img = document.createElement('img');
  img.className = 'imgHome';
  img.setAttribute('src', '/img/homeIMG.jpg');
  imgConteiner.appendChild(img);

  const section = document.createElement('div');
  section.className = 'description';
  conteiner.appendChild(section);

  const p = document.createElement('p');
  p.innerHTML = HOME_TEXT;
  section.appendChild(p);
};
