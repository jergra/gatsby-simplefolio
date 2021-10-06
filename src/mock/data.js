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
    info2: 'Django Python JavaScript Bootstrap PostgreSQL',
    url: 'https://jg-django.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'onlineStore.png',
    title: 'Online Store',
    info: 'This demonstrates functionality of an online store. The products and payment are not real.',
    info2: 'MongoDB Express React Node.js ContextAPI',
    url: 'https://ecommerce-jergra.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yt-clone.png',
    title: 'YouTube Videos',
    info: 'Access YouTube videos by latitude and longitude.',
    info2: 'React Redux Firebase YouTubeAPI',
    url: 'https://yt-clone-api.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vueInvoiceApp.png',
    title: 'Invoice App',
    info: 'An invoice app built with Vue3.',
    info2: 'Vue3 sass Firebase',
    url: 'https://inspiring-leakey-dfa50d.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wikipediaPic.png',
    title: 'Wikipedia Picture-of-the-day',
    info: "Wikipedia's daily featured picture on a stand-alone page.",
    info2: 'Flask Python WikipediaAPI',
    url: 'https://wikipedia-pic.herokuapp.com/',
    repo: 'https://github.com/jergra/wikipedia-pic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expensesTracker.png',
    title: 'Expenses Tracker',
    info: 'An expenses tracker built with Svelte.',
    info2: 'Svelte Javascript MongoDB Bulma',
    url: 'https://expense-tracker-jergra43.herokuapp.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jergra@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jergra',
    },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
