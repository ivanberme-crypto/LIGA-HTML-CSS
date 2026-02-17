document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".header__menu-btn");
    const menuList = document.querySelector(".header__list");
    const desplegableBtn = document.querySelector(".desplegable__btn");
    const desplegableContent = document.querySelector(".desplegable__content");

    menuBtn.addEventListener("click", () => {
        menuList.classList.toggle("show");
    });
    desplegableBtn.addEventListener("click", (e) => {
        e.preventDefault();
        desplegableContent.classList.toggle("show");
    });
    document.addEventListener("click", (e) => {
        if (!menuList.contains(e.target) && !menuBtn.contains(e.target)) {
            menuList.classList.remove("show");
            desplegableContent.classList.remove("show");
        }
    });
});