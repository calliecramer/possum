import '../styles/index.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
require('purecss');

addEventListener("load", () => {
    document.body.classList.remove('no-scroll');
    document.getElementById("loading").style.display = 'none';
});

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

let video = document.querySelector('video');
addEventListener("scroll", () => {
    video.pause();
});

let playButton = document.querySelector('.play-button');
let videoPlayer = document.getElementById('video-player');
let videoClose=document.getElementById("video-close");

playButton.addEventListener('click', () => {
    videoPlayer.style.zIndex="20";
    videoPlayer.parentElement.style.zIndex="20";
    videoClose.style.zIndex="25";
    video.play();
});

videoClose.addEventListener('click', () => {
    videoPlayer.style.zIndex="-25";
    videoPlayer.parentElement.style.zIndex="-25";
    videoClose.style.zIndex="-25";
    video.pause();
});

gsap.to("#video-player", {
    scrollTrigger: {
        trigger: "#video-player",
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
    opacity: "0"
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

// Crew section


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