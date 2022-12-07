const navButton = document.querySelector(".menu-btn");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("nav");

navButton.addEventListener("click", function () {
    console.log("clicked")
    nav.classList.toggle("open");
    this.classList.toggle("open");
});
