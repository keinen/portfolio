let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".hide-nav");
let postButton = document.querySelector('.blog-read-more');
let postBackground = document.querySelector('.post-page-container-hover')

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('is-active');
    navUl.classList.toggle('hide-nav');
});


