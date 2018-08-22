let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".hide-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('is-active');
    navUl.classList.toggle('hide-nav');
});
