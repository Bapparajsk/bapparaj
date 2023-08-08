const nav = document.querySelector(".nav-right");
const toggle = document.getElementById("toggle");

let f = false;

toggle.addEventListener("click", () => {
    if (f === false) {
        toggle.classList.remove("fa-bars-staggered");
        toggle.classList.add("fa-xmark");
        f = true;
    }
    else{
        toggle.classList.remove("fa-xmark");
        toggle.classList.add("fa-bars-staggered");
        f = false;
    }

    nav.classList.toggle("left")
});

// Scroll Trigger Script
(function () {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

})();


(function () {
    var contain = "";
    function f1() {
        document.querySelector(".page2>div>h1").textContent.split(" ").forEach((value) =>{
            contain += `<span>${value} </span>`
            document.querySelector(".page2>div>h1").innerHTML = contain;
        })
    }
    f1();
    
    function f2() {
        gsap.to(".hading>h1>span", {
            scrollTrigger : {
                trigger: ".hading>h1>span",
                start : "top, bottom",
                end : "bottom top",
                scroller : "#main",
                scrub : .5,
            },
            stagger : .2,
            color : "#000"
        })
    }

    f2();
})()

