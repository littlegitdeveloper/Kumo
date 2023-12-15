const header = document.querySelector("header");

window.addEventListener ("scroll" , function() {
    header.classList.toggle ("sticky", this.window.scrolly > 0);
})

let menu = document.querySelector('#main-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle(' bx-window-close');
    navmenu.classList.toggle('open');
}