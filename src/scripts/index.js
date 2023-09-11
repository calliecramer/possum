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

let mm = gsap.matchMedia();

//var tl = gsap.timeline();
gsap.to(".img-bg", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "0% 20%"
});

gsap.to(".intro-video", {
        scrollTrigger: {
            trigger: ".intro-video",
            start: "top top",
            end: "+=200",
            scrub: 1,
            pin: true,
        },
        opacity: 0, 
        start: "100",
    });  

gsap.from(".logline", {
    scrollTrigger: {
        trigger: ".logline",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1,
    },
    x: "-120%",
});

gsap.from(".why", {
    scrollTrigger: {
        trigger: ".why",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1
    },
    x: "130%",
});

gsap.to ("#text-1", {
    scrollTrigger: {
        trigger: "#text-1",
        start: "top top",
        end: "+=500",
        pin: true
    }
});


gsap.from (".poster-text", {
    scrollTrigger: {
        start: "center center",
        trigger: ".poster",
        scrub: 1
    },
    opacity: 0,
    duration: 2,
    ease: "power1.inOut",
    stagger: 1
});

gsap.to (".poster .overlay", {
    scrollTrigger: {
        start: "center center",
        trigger: ".poster",
        scrub: 1
    },
    opacity: 0.25,
    duration: 2,
    ease: "power1.inOut",
    stagger: 1
});

mm.add("(min-width: 768px)", () => {
    gsap.to (".comps", {
        scrollTrigger: {
            trigger: ".comps",
            start: "center center",
            end: "+=700",
            pin: true,
            markers: true
        }
    });
});


/*gsap.to('#text-1', {
    backgroundPosition: '0 -100000%',
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
});*/