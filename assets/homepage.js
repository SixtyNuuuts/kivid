import simpleParallax from 'simple-parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const parallaxTop = document.querySelector('.parallax-top');
const parallaxBot = document.querySelector('.parallax-bot');
const btnGoToTop = document.querySelector('.btn-go-to-top');

if (parallaxTop || parallaxBot || btnGoToTop) {
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

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnGoToTop.style.display = "flex";
        } else {
            btnGoToTop.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    btnGoToTop.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    AOS.init();
}



