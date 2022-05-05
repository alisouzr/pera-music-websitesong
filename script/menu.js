const buttonMenu = document.querySelector("#open-menu");
const buttonClose = document.querySelector("#close-menu");
const body = document.body;
const header = document.querySelector("header.header-top-site");
const overlay = header.querySelector(".overlay");

buttonMenu.addEventListener("click", () => {
    body.classList.add("open-menu");
})

const closeMenu = () => {
    body.classList.remove("open-menu");
}

buttonClose.addEventListener("click", closeMenu)

overlay.addEventListener("click", closeMenu)