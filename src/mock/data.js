import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Burt Evans.',
  subtitle: "I'm a Web Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'infoFeed.png',
    title: 'Information Feed',
    info: 'A website which functions as an information feed.',
    info2: '',
    url: 'https://jg-django.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'onlineStore.png',
    title: 'Online Store',
    info: 'This demonstrates functionality of an online store. The products and payment are not real.',
    info2: '',
    url: 'https://ecommerce-jergra.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yt-clone.png',
    title: 'YouTube Videos',
    info: 'Access YouTube videos by latitude and longitude.',
    info2: '',
    url: 'https://yt-clone-api.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'username@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/burt.evans',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/burt.evans',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/burt.evans/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/burt.evans',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
