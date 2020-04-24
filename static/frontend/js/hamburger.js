const menuIcon = document.querySelector(".hamburger-menu");
const fullscreenNav = document.querySelector(".fullscreenNav");

menuIcon.addEventListener("click", () => {
  fullscreenNav.classList.toggle("change");
});
