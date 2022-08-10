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

// STICKY NAV
// const header = document.querySelector("header");
// // const headerHeight = header.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) header.classList.add("sticky");
//   else header.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   treshhold: 0,
//   // rootMargin: `-${navheight}px`,
// });

// headerObserver.observe(header);
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
