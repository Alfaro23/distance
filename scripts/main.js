const mMenu = document.querySelector(".mMenu");
const menu = document.querySelector(".menuSideBar");

function openMenu(){
    menu.classList.toggle("active");
}


mMenu.addEventListener("click", openMenu);