const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbar-nav");

hamburger.addEventListener("click", function () {
   navMenu.classList.toggle("hidden");
});