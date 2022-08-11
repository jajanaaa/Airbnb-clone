// STICKY NAV
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// ICONS BAR SCROLL
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const container = document.querySelector(".icons-container");

leftButton.addEventListener("click", function () {
  container.scrollBy(-200, 0);
});

rightButton.addEventListener("click", function () {
  container.scrollBy(200, 0);
});
