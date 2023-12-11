import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Renderer, Camera, Transform, Box, Program, Mesh } from 'ogl';

gsap.registerPlugin(ScrollTrigger);

addEventListener("load", () => {
    document.body.classList.remove('no-scroll');
    document.getElementById("loading").style.display = 'none';
});

import Scene from '@/js/components/scene'

var phone = window.matchMedia("(min-width: 640px)")
if (phone.matches) {
    (() => {
    // scene
    new Scene()
    })()
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

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


var cx, cy, shadow, setOffsets;
shadow = document.getElementById("shadow");
cx = cy = 0;
setOffsets = function() {
    cx = shadow.offset().left + h1.width() / 2;
    return cy = shadow.offset().top + shadow.height() / 2;
};

if (phone.matches) {
    addEventListener("mousemove", (e) => {
        var dx, dy, mx, my;
        mx = e.clientX;
        my = e.clientY;
        dx = cx - mx;
        dy = cy - my;
        shadow.style.left=dx/50 + "px";
        shadow.style.top=dy/50 + "px";
    });
}

ScrollTrigger.normalizeScroll(false);

let mm = gsap.matchMedia();

var tl = gsap.timeline();
tl.to(".img-bg", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "20% 0%"
});
tl.to(".img-2", {
    scrollTrigger: {
        trigger: ".text-screen",
        scrub: 1
    },
    backgroundPosition: "100% 0%"
});
tl.to(".intro-video", {
    scrollTrigger: {
        trigger: ".intro-video",
        start: "top top",
        end: "+=200",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    },
    opacity: 0
});  
tl.to(".scene", {
    scrollTrigger: {
    trigger: ".scene-trigger",
    start: "top top",
    end: "+=200",
    scrub: 1,
    pin: true,
    anticipatePin: 1
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
tl.to(".footprint-a", {
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

tl.to(".footprint-a", {
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
tl.from(".logline", {
    scrollTrigger: {
        trigger: ".logline",
        start: "top center",
        end: "+=200",
        toggleActions: "restart pause none none", 
        scrub: 1
    },
    opacity: "0"
});

tl.to ("#text-1", {
    scrollTrigger: {
        trigger: "#text-1",
        start: "top top",
        end: "+=500",
        pin: true,
        anticipatePin: 1
    }
});

mm.add("(max-width: 768px)", () => {
    var notes = gsap.utils.toArray('.note');
    notes.forEach((note) => {
        gsap.to(note, {
            scrollTrigger: {
                trigger: note,
                start: "start center",
                end: "+=100",
                toggleActions: "restart pause none none", 
                scrub: 1
            },
            opacity: 1,
            stagger: .5
        });
    })
    var arrows = gsap.utils.toArray('.arrow');
    arrows.forEach((arrow) => {
        gsap.to(arrow, {
            scrollTrigger: {
                trigger: arrow,
                start: "start center",
                end: "+=100",
                toggleActions: "restart pause none none", 
                scrub: 1
            },
            opacity: 1,
            stagger: .5
        });
    })
    var names = gsap.utils.toArray('.name');
    names.forEach((name) => {
        gsap.to(name, {
            scrollTrigger: {
                trigger: name,
                start: "start-=200 center",
                end: "+=100",
                toggleActions: "restart pause none none", 
                scrub: 1
            },
            opacity: 1,
            stagger: .5
        });
    })
});

tl.to(".footprint-b", {
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