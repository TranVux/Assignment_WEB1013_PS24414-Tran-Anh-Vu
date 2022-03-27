let nav_btn = document.querySelector('.header-nav-btn');
let nav_menu = document.querySelector(".nav-menu_mobile");
nav_btn.onclick = function () {
    nav_btn.classList.toggle('active');
    nav_menu.classList.toggle('show');
}
