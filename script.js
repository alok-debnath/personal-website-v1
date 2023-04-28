var overlay = document.querySelector("#img");
var img = document.querySelector("#img");
var img_container = document.querySelector("#img-container");

overlay.addEventListener("mouseover", function () {
    img_container.classList.add("hover");
    overlay.classList.add("anti-hover");
    img.classList.add("anti-hover");
});

overlay.addEventListener("mouseout", function () {
    img_container.classList.remove("hover");
    overlay.classList.remove("anti-hover");
    img.classList.remove("anti-hover");
});

// navbar hide behaviour
let prevScrollpos = window.pageYOffset;
let navbar = document.querySelector("nav");
navbar.style.transform = "translateY(0)";
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.transform = "translateY(0)";
    } else {
        navbar.style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
};
