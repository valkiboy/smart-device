// Swiper 7.4.1
// import './vendor/swiper';

import './vendor/moveto';
import MoveTo from './vendor/moveto';


const moveTo = new MoveTo({
  duration: 1000,
});

const links = document.querySelectorAll('.js-trigger');

links.forEach(function (link) {
  moveTo.registerTrigger(link);
});
