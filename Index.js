let toggleMenu = document.querySelector("#menu");
let header = document.querySelector("header");


toggleMenu.addEventListener("click", () => {
    header.classList.toggle("active")
    toggleMenu.classList.toggle("fa-xmark")

})