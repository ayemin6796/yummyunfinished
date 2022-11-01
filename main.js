import "./style.scss";
import counterUp from "counterup2";
import ScrollReveal from "scrollreveal";
import "aos/dist/aos.css";
import "isotope-layout";
import "animate.css";
import "swiper/swiper.scss";

let backBtn = document.querySelector(".back-to-top");

let slideUp = {
  distance: "65px",
  duration: 600,
  easing: "ease-in",
  origin: "bottom",
  opacity: null,
  cleanup: true,
  reset: false,
};
ScrollReveal({}).reveal("#reveal", slideUp);

// hero-left-section
ScrollReveal().reveal(".head-left", {
  distance: "30px",
  origin: "bottom",
  easing: "ease-in",
  delay: 500,
  interval: 120,
  cleanup: true,
  reset: false,
});

// hero-right-section
ScrollReveal().reveal(".head-right", {
  distance: "8px",
  scale: 1.15,
  easing: "ease-in",
  delay: 500,
  cleanup: true,
  reset: false,
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

//About Section Waypoints
// For heading of about section waypoint

ScrollReveal().reveal(".about-head", {
  distance: "40px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  interval: 50,
  cleanup: true,
  reset: false,
});

// about body
ScrollReveal().reveal(".body-about", {
  distance: "40px",
  origin: "bottom",
  easing: "ease-in",
  delay: 500,
  interval: 120,
  cleanup: true,
  reset: false,
});

// about sec parts
ScrollReveal().reveal(".sec-about", {
  distance: "40px",
  origin: "bottom",
  easing: "ease-in",
  delay: 600,
  interval: 150,
  cleanup: true,
  reset: false,
});

// Menu Section
ScrollReveal().reveal(".menu-head", {
  distance: "28px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  interval: 150,
  cleanup: true,
  reset: false,
});

// Menu Nav Bar
ScrollReveal().reveal(".menu-nav", {
  distance: "28px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  interval: 150,
  cleanup: true,
  reset: false,
});
// menu item
ScrollReveal().reveal(".menu-items", {
  distance: "28px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  cleanup: true,
  reset: false,
});

// Testimonials
ScrollReveal().reveal(".head-testi", {
  distance: "28px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  interval: 150,
  cleanup: true,
  reset: false,
});

// Carousel of testimonials
ScrollReveal().reveal(".testi-carousel", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  cleanup: true,
  reset: false,
});

// For Events
ScrollReveal().reveal(".head-event", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

// for event-carousel
ScrollReveal().reveal(".event-carousel", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

//for chef section
ScrollReveal().reveal(".chef-head", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

// chef card section
ScrollReveal().reveal(".chef", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  cleanup: true,
  reset: false,
});

// for book head section
ScrollReveal().reveal(".book-head", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

// for booking photo
ScrollReveal().reveal(".img-book", {
  distance: "8px",
  scale: 1.15,
  easing: "ease-in",
  delay: 400,
  cleanup: true,
  reset: false,
});

// for booking input gp
ScrollReveal().reveal(".book-input", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 400,
  cleanup: true,
  reset: false,
});

// for gallery head
ScrollReveal().reveal(".gal-head", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

// for gallery carousel
ScrollReveal().reveal(".gal-swiper", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 400,
  cleanup: true,
  reset: false,
});

// for contact head
ScrollReveal().reveal(".contact-head", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 350,
  interval: 150,
  cleanup: true,
  reset: false,
});

// contact-item
ScrollReveal().reveal(".contact-item", {
  distance: "35px",
  origin: "bottom",
  easing: "ease-in",
  delay: 400,
  cleanup: true,
  reset: false,
});

// Back To Top Button
new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
    if (direction == "down") {
      backBtn.style.visibility = "visible";
      backBtn.style.opacity = 1;
      backBtn.classList.add("animate__fadeInUp");
    } else {
      backBtn.classList.replace("animate__fadeInUp", "animate__fadeOutDown");
      setTimeout(function () {
        backBtn.classList.remove("animate__fadeOutDown");
        backBtn.style.visibility = "hidden";
        backBtn.style.opacity = 0;
      }, 150);
    }
  },
  offset: "200px",
});

// navigation active
const sections = document.querySelectorAll("section");
const navItem = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

window.addEventListener("scroll", function () {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop);
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
      console.log(current);
    }
  });

  navItem.forEach((item) => {
    item.classList.remove("active");
    if (item.classList.contains(current)) {
      item.classList.add("active");
    }
  });
});
// Btn Animation
let mainBtn = document.querySelector(".main-btn");
