import "./style.scss";
import { counterUp } from "counterup2";
import ScrollReveal from "scrollreveal";
import "venobox";
import "aos/dist/aos.css";
import "isotope-layout";
import "animate.css";
import "bootstrap";
import Swiper from "swiper/bundle";

let backBtn = document.querySelector(".back-to-top");

// slide up
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

// On DOM ready.
const el = document.querySelectorAll(".counter");
new Waypoint({
  element: document.querySelector(".last-about"),
  handler: function () {
    el.forEach(function (e) {
      counterUp(e, {
        duration: 2000,
        delay: 16,
      });
    });
    this.destroy();
  },
  offset: "bottom-in-view",
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

// Menu dish
ScrollReveal().reveal(".dish", {
  distance: "15px",
  origin: "bottom",
  easing: "ease-in",
  delay: 300,
  interval: 150,
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
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
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

// For Testimonials
$(".single-item").slick({
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 820,
  easing: "linear",
  dots: true,
});

// For Events
$(".event-slick").slick({
  autoplay: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 2500,
  speed: 820,
  loop: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "50px",
  easing: "linear",
  dots: true,
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});

// for gallery
new Swiper(".gal-swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1180: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    660: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 1,
      // spaceBetween: 20,
      slidesToShow: 1,
      centeredSlides: false,
    },
  },
});

new VenoBox({
  selector: ".my-link",
});

new VenoBox({
  selector: ".gal-link",
});

new VenoBox({
  selector: ".menu-gal",
});
