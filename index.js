const conteiner = document.querySelector('.conteiner');
const films = document.querySelector('.films');
const loader = document.querySelector('.loader');
const home = document.querySelector('.home');
const people = document.querySelector('.people');
const planets = document.querySelector('.planets');

//!Link
const basicLink = 'https://swapi.dev/api/';
const linkFilms = 'https://swapi.dev/api/films/';
const textHome =
  'Project using the Star Wars API, to learn programming in JavaScript, HTML, CSS';
const imgMoveCovers = [
  {
    episode: 1,
    img: '/img/covers_films/episode_1.jpg',
  },
  {
    episode: 2,
    img: '/img/covers_films/episode_2.jpg',
  },
  {
    episode: 3,
    img: '/img/covers_films/episode_3.jpg',
  },
  {
    episode: 4,
    img: '/img/covers_films/episode_4.jpg',
  },
  {
    episode: 5,
    img: '/img/covers_films/episode_5.jpg',
  },
  {
    episode: 6,
    img: '/img/covers_films/episode_6.jpg',
  },
];

//!Home
const showHomePage = () => {
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
  p.innerHTML = textHome;
  section.appendChild(p);
};

//!Films

const checkingEpisode = (movie, imgCover) => {
  imgMoveCovers.forEach(cover => {
    if (cover.episode === movie.episode_id) {
      imgCover.setAttribute('src', cover.img);
    }
  });
};

const filmCard = movies => {
  movies.forEach(movie => {
    const cardMovie = document.createElement('div');
    cardMovie.className = 'movie';
    conteiner.appendChild(cardMovie);

    const title = document.createElement('h2');
    title.innerHTML = `${movie.title}`;
    cardMovie.appendChild(title);

    const episodeCover = document.createElement('div');
    episodeCover.className = 'conteinerCover';
    cardMovie.appendChild(episodeCover);

    const imgCover = document.createElement('img');
    imgCover.className = 'imgCover';
    episodeCover.appendChild(imgCover);

    const episode = document.createElement('p');
    episode.innerHTML = `Episode: ${movie.episode_id}`;
    cardMovie.appendChild(episode);

    const releaseDate = document.createElement('p');
    releaseDate.innerHTML = `Date Of Production: ${movie.release_date}`;
    cardMovie.appendChild(releaseDate);
    checkingEpisode(movie, imgCover);
  });
};

const showFilms = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
  fetch(linkFilms)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      filmCard(data.results);
      loader.style.display = 'none';

      const cardMovie = document.querySelector('.movie');
      cardMovie.addEventListener('click', showDetailsFilm);
    });
};

//!People

const showPeople = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};

//!Planets

const showPlanets = () => {
  loader.style.display = 'block';
  conteiner.innerHTML = '';
};

//! Details Film

const showDetailsFilm = () => {
  conteiner.innerHTML = '';
  loader.style.display = 'block';
};

films.addEventListener('click', showFilms);
home.addEventListener('click', showHomePage);
showHomePage();
people.addEventListener('click', showPeople);
planets.addEventListener('click', showPlanets);
