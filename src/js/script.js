hamburgerBtn = document.getElementById('hamburgerButton');
hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.navbar-menu__offcanvas').classList.toggle('open');
});

const closeOffcanvasMenu = () => {
    document.querySelector('.navbar-menu__offcanvas').classList.remove('open');
}
xmarkBtn = document.getElementById('xmarkButton');
navMenuBtn = document.querySelector('.navbar-menu__list-offcanvas-item');
xmarkBtn.addEventListener('click', () => {
    closeOffcanvasMenu();
});
navMenuBtn.addEventListener('click', () => {
    closeOffcanvasMenu();
})