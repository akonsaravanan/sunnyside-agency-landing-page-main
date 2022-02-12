const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-header");
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  navbar.classList.toggle("toggle");
});
