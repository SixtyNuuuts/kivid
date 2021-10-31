import simpleParallax from 'simple-parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const parallaxTop = document.querySelector('.parallax-top');
const parallaxBot = document.querySelector('.parallax-bot');

new simpleParallax(parallaxTop, {
    delay: .8,
    orientation: 'down',
    transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(parallaxBot, {
    delay: .8,
    orientation: 'down',
    transition: 'cubic-bezier(0,0,0,1)'
});


AOS.init();
