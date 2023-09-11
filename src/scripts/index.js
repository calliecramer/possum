import '../styles/index.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
require('purecss');

let bio = document.querySelectorAll('.bio-toggle');

bio.forEach((button) => {
    button.addEventListener('click', () => {
        let targetID = button.getAttribute('data-target');
        let target = document.getElementById(targetID);
        if (target.classList.contains("open")){
            target.classList.remove("open");
        } else {
            target.classList.add("open");
        }
    });
});

gsap.to('#text-1', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '#text-1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

gsap.to('#text-2', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '#text-2',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});