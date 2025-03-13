// =============== Navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("menuOpen");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

body.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    console.log("hello");
    closeMenu();
  }
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.toggle("menuOpen");
}

// =============== Video play/pause

const video = document.getElementById("video");
const playButton = document.getElementById("playButton");

// When the play button is clicked
playButton.addEventListener("click", () => {
  // Play the video
  video.play();
  // Hide the play button
  playButton.classList.add("hidden");
});

// When the video is clicked (to pause)
video.addEventListener("click", () => {
  // Pause the video
  video.pause();
  // Show the play button
  playButton.classList.remove("hidden");
});

// Show the play button again if the video ends
video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});

/* Swiper Slider =============  */
const swiper = new Swiper(".swiper", {
  grabCursor: true,
  slidesPerView: 1.7,
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 2.75,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
  freeMode: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
