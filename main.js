import "./style.scss";
import counterUp from "counterup2";
import ScrollReveal from "scrollreveal";
import "aos/dist/aos.css";
import "isotope-layout";
import "animate.css";

let slideUp = {
  distance: "65px",
  duration: 600,
  easing: "ease-in",
  origin: "bottom",
  opacity: null,
};
ScrollReveal({}).reveal("#reveal", slideUp);

// hero-left-section
ScrollReveal().reveal(".head-left", {
  distance: "60px",
  origin: "bottom",
  easing: "ease-in",
  delay: 500,
  interval: 120,
});
// hero-right-section
ScrollReveal().reveal(".head-right", {
  distance: "8px",
  scale: 1.15,
  easing: "ease-in",
  delay: 500,
});

//About Section Waypoints
// For heading of about section waypoint
new Waypoint({
  element: document.querySelector(".first-container"),
  handler: function () {
    ScrollReveal().reveal(".about-head", {
      distance: "40px",
      origin: "bottom",
      easing: "ease-in",
      delay: 300,
    });
  },
  offset: "100%",
});
new Waypoint({
  element: document.querySelector(".first-container"),
  handler: function () {
    ScrollReveal().reveal(".body-about", {
      distance: "40px",
      origin: "bottom",
      easing: "ease-in",
      delay: 500,
      interval: 120,
    });
  },
  offset: "85%",
});

// about sec parts
new Waypoint({
  element: document.querySelector(".first-container"),
  handler: function () {
    ScrollReveal().reveal(".sec-about", {
      distance: "40px",
      origin: "bottom",
      easing: "ease-in",
      delay: 600,
      interval: 150,
    });
  },
  offset: "80%",
});

// Last About
let el = document.querySelectorAll(".counter");
new Waypoint({
  element: document.querySelector(".last-about"),
  handler: function () {
    el.forEach(function (e) {
      counterUp(e, {
        duration: 2000,
        delay: 16,
      });
    });
  },
  offset: "85%",
});

// Menu Section
new Waypoint({
  element: document.querySelector(".menu"),
  handler: function () {
    ScrollReveal().reveal(".menu-head", {
      distance: "28px",
      origin: "bottom",
      easing: "ease-in",
      delay: 300,
      interval: 150,
    });
  },
  offset: "85%",
});

// Menu Nav Bar
new Waypoint({
  element: document.querySelector(".menu"),
  handler: function () {
    ScrollReveal().reveal(".menu-nav", {
      distance: "28px",
      origin: "bottom",
      easing: "ease-in",
      delay: 300,
      interval: 150,
    });
  },
  offset: "85%",
});

// menu item
new Waypoint({
  element: document.querySelector(".menu"),
  handler: function () {
    ScrollReveal().reveal(".menu-items", {
      distance: "28px",
      origin: "bottom",
      easing: "ease-in",
      delay: 300,
    });
  },
  offset: "85%",
});

// Testimonials
new Waypoint({
  element: document.querySelector(".testimonials"),
  handler: function () {
    ScrollReveal().reveal(".head-testi", {
      distance: "28px",
      origin: "bottom",
      easing: "ease-in",
      delay: 300,
      interval: 150,
    });
  },
  offset: "85%",
});

// Carousel of testimonials
new Waypoint({
  element: document.querySelector(".testimonials"),
  handler: function () {
    ScrollReveal().reveal(".testi-carousel", {
      distance: "35px",
      origin: "bottom",
      easing: "ease-in",
      delay: 350,
    });
  },
  offset: "90%",
});

// For Events
new Waypoint({
  element: document.querySelector(".events"),
  handler: function () {
    ScrollReveal().reveal(".head-event", {
      distance: "35px",
      origin: "bottom",
      easing: "ease-in",
      delay: 350,
      interval: 150,
    });
  },
  offset: "75%",
});

// for event-carousel
new Waypoint({
  element: document.querySelector(".events"),
  handler: function () {
    ScrollReveal().reveal(".event-carousel", {
      distance: "35px",
      origin: "bottom",
      easing: "ease-in",
      delay: 350,
      interval: 150,
    });
  },
  offset: "85%",
});

//for chef section
new Waypoint({
  element: document.querySelector(".chef-sec"),
  handler: function () {
    ScrollReveal().reveal(".chef-head", {
      distance: "35px",
      origin: "bottom",
      easing: "ease-in",
      delay: 350,
      interval: 150,
    });
  },
  offset: "75%",
});

// chef card section
new Waypoint({
  element: document.querySelector(".chef-sec"),
  handler: function () {
    ScrollReveal().reveal(".chef", {
      distance: "35px",
      origin: "bottom",
      easing: "ease-in",
      delay: 350,
    });
  },
  offset: "85%",
});
// Start counting, do this on DOM ready or with Waypoints.

// Btn Animation
let mainBtn = document.querySelector(".main-btn");
