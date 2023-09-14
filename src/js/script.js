hamburgerBtn = document.getElementById('hamburgerButton');
hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.navbar-menu__offcanvas').classList.toggle('open');
});

xmarkBtn = document.getElementById('xmarkButton');
xmarkBtn.addEventListener('click', () => {
    document.querySelector('.navbar-menu__offcanvas').classList.remove('open');
})