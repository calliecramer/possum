import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Renderer, Camera, Transform, Box, Program, Mesh } from 'ogl';

gsap.registerPlugin(ScrollTrigger);

addEventListener("load", () => {
    document.body.classList.remove('no-scroll');
    document.getElementById("loading").style.display = 'none';
});

import Scene from '@/js/components/scene'

(() => {
  // scene
  new Scene()
})()

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
    backgroundPosition: "20% 0%"
});
gsap.to(".img-2", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "100% 0%"
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

    gsap.to(".scene", {
        scrollTrigger: {
            trigger: ".scene-trigger",
            start: "top top",
            end: "+=200",
            scrub: 1,
            pin: true,
        },
        opacity: 0
    });  

/*let video = document.querySelector('video');
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
        end: "+=500",
        scrub: 1,
        pin: true,
    },
    opacity: 0
});  
*/
gsap.to(".footprint-a", {
    scrollTrigger: {
        trigger: "#footprints-trigger",
        start: "start center",
        end: "+=500",
        toggleActions: "restart pause none none", 
        scrub: 1
    },
    opacity: 1,
    stagger: .9
});

gsap.to(".footprint-a", {
    scrollTrigger: {
        trigger: ".logline",
        start: "end end",
        end: "+=300",
        toggleActions: "restart pause none none", 
        scrub: 1,
    },
    opacity: 0,
    stagger: .9
});

// logline and why text section
gsap.from(".logline", {
    scrollTrigger: {
        trigger: ".logline",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1
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

mm.add("(max-width: 768px)", () => {
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
});

gsap.to(".footprint-b", {
    scrollTrigger: {
        trigger: "#footprints-trigger-2",
        start: "start center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1
    },
    opacity: 1,
    stagger: .9
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