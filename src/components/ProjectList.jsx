import techneSwapPhoto from '../assets/projects/techneswap.jpg';
import notesKitePhoto from '../assets/projects/noteskitephoto.jpg';
import toDoPhoto from '../assets/projects/getyourStogether.jpg';
import techneVideo from '../assets/projects/techneswapvid.mp4';
import notesKiteVideo from '../assets/projects/noteskite.mp4';
import toDoVideo from '../assets/projects/todlist.mp4';

export const ProjectList = [ 
  {
    title: 'TechneSwap', 
    description: 'A skill-swapping platform built with React, Node.js, Express, and MongoDB, offering seamless skill exchange and filtering.', 
    image: techneSwapPhoto, 
    video: techneVideo, 
    gitHublink: {front: 'https://github.com/islandarber/TechneSwapFE', back: 'https://github.com/islandarber/techneswap-server'}, 
    liveLink: 'https://techneswap.onrender.com/'
  },
  {
    title: 'NotesKite', 
    description: 'A note-taking app built with React, Node.js, Express, and MongoDB that allows users to color customize, edit, pin, archive, and manage notes.',
    image: notesKitePhoto, 
    video: notesKiteVideo, 
    gitHublink: {front: 'https://github.com/islandarber/NotesPJ1F', back: 'https://github.com/islandarber/notesPJ1'}, 
    liveLink: 'https://noteskite.onrender.com/'
  },
  {
    title: 'GetYourStuffTogether', 
    description: 'A to-do list app built with React to help users efficiently create and manage their tasks.', 
    image: toDoPhoto, 
    video: toDoVideo, 
    gitHublink: {front: 'https://github.com/islandarber/toDoListCCReact'}
  },
  {
    title: 'Nasos Portfolio', 
    description: 'A portfolio website built with React, Node.js, Express, and MongoDB, allowing the user to add and edit projects through an admin panel. This project is still in progress.',
    image: "https://health.wyo.gov/wp-content/uploads/2023/06/page-under-construction-icon.jpg", 
    gitHublink: {front: 'https://github.com/islandarber/nasospech', back: 'https://github.com/islandarber/nasospechs'}, 
    liveLink: 'https://nasospech.onrender.com/'
  },
];
