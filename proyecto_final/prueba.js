const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");
const iconoMenu = document.getElementById("icono-menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("menu-activo");

    if (menu.classList.contains("menu-activo")) {
        iconoMenu.src = "images/icon-close.svg";
        botonMenu.setAttribute("aria-expanded", "true");
    } else {
        iconoMenu.src = "images/icon-hamburger.svg";
        botonMenu.setAttribute("aria-expanded", "false");
    }

});