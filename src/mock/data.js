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
  subtitle: 'React & Rails Developer',
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
    img: 'screenshot-garden-escape.jpg',
    title: 'Garden Escapes',
    info: 'A team rails app developed for the user to host or rent their favourite gardens.',
    info2: '',
    url: 'http://garden-escape.herokuapp.com/',
    repo: 'https://github.com/dantup01/garden-escape',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
