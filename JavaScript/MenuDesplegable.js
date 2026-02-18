document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".fd__header__menu-btn");
    const menuList = document.querySelector(".fd__header__list");
    const desplegableBtn = document.querySelector(".fd__header__desplegable__btn");
    const desplegableContent = document.querySelector(".fd__header__desplegable__content");

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