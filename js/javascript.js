let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".hide-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('is-active');
    navUl.classList.toggle('hide-nav');
});


var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r,);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};


