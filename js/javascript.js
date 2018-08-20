
//forEach is a variable with the function stored into it. So when foreach is called in the if statement it puts hamburgers in as one argument and the
let forEach=function(t,o,r) {
//simply checks if the object is a string - i guess the object needs to be represented as a string
    if("[string]"===Object.prototype.toString.call(t))

        for(let c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);

        else for(let e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

let hamburgers = document.querySelectorAll(".hamburger");

if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        console.log(hamburger);
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });

}




(function () {
// all logic in here is globally inaccessible
    let hamburger = document.querySelector(".hamburger");
    let navUl = document.querySelector(".hide-nav");
    function toggleMobileMenu() {
        navUl.classList.toggle("hide-nav");
    }
    hamburger.onclick = toggleMobileMenu;
    console.log(hamburger);
}()
);

