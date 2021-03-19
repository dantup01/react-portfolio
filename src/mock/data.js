import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Tuppen | Developer',
  lang: 'en',
  description: 'Welcome to my portfolio website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Daniel Tuppen',
  subtitle: 'React, Rails & JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1z8oHuGNimwUWa_vL9lFXSS6e7JFa-UaM/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'screenshot-open-rehearsal-crop.jpg',
    title: 'Open Rehearsal',
    info: 'A team rails app developed for musicians to connect, find local rehearsals and play the music they love.',
    info2: '',
    url: 'http://www.openrehearsal.co.uk',
    repo: 'https://github.com/dantup01/open-rehearsal',
  },
  {
    id: nanoid(),
    img: 'screenshot-garden-escape.png',
    title: 'Garden Escapes',
    info: 'A team rails app developed for the user to host or rent their favourite gardens.',
    info2: '',
    url: 'http://garden-escape.herokuapp.com/',
    repo: 'https://github.com/dantup01/garden-escape',
  },
  {
    id: nanoid(),
    img: 'screenshot-instadans.jpg',
    title: 'InstaDans',
    info: 'A personal project creating a clone of Instagram for users to post pictures.',
    info2: '',
    url: 'https://instadans.herokuapp.com/',
    repo: 'https://github.com/dantup01/instadans',
  },
  {
    id: nanoid(),
    img: 'screenshot-brewery288.jpg',
    title: 'Brewery 288',
    info: 'A local independent brewery in West Sussex have launched a collection of new beers. I built their e-commerce website to help them reach their customers.',
    info2: '',
    url: 'http://www.brewery288.co.uk',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'screenshot-cocktail-experience.png',
    title: 'Cocktail Experience',
    info: 'Solo rails app designed for the user to store a collection of their favourite cocktails.',
    info2: '',
    url: 'http://dans-cocktail-experience.herokuapp.com/',
    repo: 'https://github.com/dantup01/rails-cocktail-party',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'daniel.tuppen1@gmail.com',
};

// FOOTER DATAs
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-t-14ab5952/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://www.github.com/dantup01',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
