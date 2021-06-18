let headerBurger = document.querySelector(".header__burger");
let headerBurgerMenu = document.querySelector(".header__burger-menu");
let body = document.querySelector("body");

headerBurger.addEventListener("click", function () {
   headerBurger.classList.toggle("active");
   headerBurgerMenu.classList.toggle("active");
   body.classList.toggle("lock");
})