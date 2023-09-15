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

ScrollTrigger.normalizeScroll(true);

let mm = gsap.matchMedia();

//var tl = gsap.timeline();
gsap.to(".img-bg", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "0% 20%"
});
gsap.to(".img-2", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "0% 100%"
});

gsap.to(".intro-video", {
        scrollTrigger: {
            trigger: ".intro-video",
            start: "top top",
            end: "+=200",
            scrub: 1,
            pin: true,
        },
        opacity: 0
    });  

// logline and why text section
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

// poster section
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
        }
    });
});

// Residents section
gsap.from (".note", {
    scrollTrigger: {
        start: "center center",
        trigger: ".note",
        scrub: 1
    },
    opacity: 0,
    duration: 2,
    ease: "power1.inOut",
    stagger: 2
});
gsap.from (".arrow", {
    scrollTrigger: {
        start: "center center",
        trigger: ".note",
        scrub: 1
    },
    opacity: 0,
    duration: 2,
    ease: "power1.inOut",
    stagger: 2
});

// Timeline section
var point = gsap.utils.toArray('.point');

point.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section, 
            start: 'center center'
        },
        opacity: 0,
        rotation: 0,
        ease: "power1.inOut"
    });
});

var line = gsap.utils.toArray('.line');

line.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section, 
            start: 'top center'
        },
        opacity: 0,
        rotation: 0,
        ease: "power1.inOut"
    });
});

var header = gsap.utils.toArray('.header');

header.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section, 
            start: 'center center'
        },
        opacity: 0,
        rotation: 0,
        ease: "power1.inOut"
    });
});

var handwritten = gsap.utils.toArray('.date');

handwritten.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section, 
            start: 'center center'
        },
        opacity: 0,
        ease: "power1.inOut"
    });
});

var timelineContent = gsap.utils.toArray('.content');

timelineContent.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section, 
            start: 'center center'
        },
        opacity: 0,
        ease: "power1.inOut"
    });
});

// Crew section

// statement and funding text section
gsap.from(".statement", {
    scrollTrigger: {
        trigger: ".statement",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1,
    },
    x: "-120%",
});

gsap.from(".funding", {
    scrollTrigger: {
        trigger: ".funding",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1
    },
    x: "130%",
});

// @todo: fix mobile issues
mm.add("(min-width: 768px)", () => {
    gsap.to ("#text-2", {
        scrollTrigger: {
            trigger: "#text-2",
            start: "top top",
            end: "+=500",
            pin: true
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
});*/