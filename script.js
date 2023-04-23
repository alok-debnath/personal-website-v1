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
