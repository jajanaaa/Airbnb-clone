const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

function rightScroll() {
  const right = document.querySelector(".scroll-images");
  right.scrollBy(200, 0);
  leftButton.style.opacity = "1";
}

function leftScroll() {
  const left = document.querySelector(".scroll-images");
  left.scrollBy(-200, 0);
  //   rightButton.style.opacity = "0";
}
