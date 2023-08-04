const themeSwitcherBtn = document.querySelector("#themeSwitcher");
const dropdownThemeSwitcherBtn = document.querySelector("#dropdownThemeSwitcher");
const theme = document.body;
let initialText = `<span class="fa-regular fa-moon" aria-hidden="true"></span> Dark`;
themeSwitcherBtn.innerHTML = initialText;
dropdownThemeSwitcherBtn.innerHTML = initialText;

themeSwitcherBtn.addEventListener('click', () => {
  changedText = `<span class="fa-regular fa-sun" aria-hidden="true"></span> Light`;

  if(theme.classList == 'light') {
    theme.classList.replace('light', 'dark');
    themeSwitcherBtn.innerHTML = changedText;
    localStorage.setItem('theme', 'dark');
  } else {
    theme.classList.replace('dark', 'light');
    themeSwitcherBtn.innerHTML = initialText;
    localStorage.setItem('theme', 'light');
  }
})

dropdownThemeSwitcherBtn.addEventListener('click', () => {
  changedText = `<span class="fa-regular fa-sun" aria-hidden="true"></span> Light`;

  if(theme.classList == 'light') {
    theme.classList.replace('light', 'dark');
    dropdownThemeSwitcherBtn.innerHTML = changedText;
    localStorage.setItem('theme', 'dark');
  } else {
    theme.classList.replace('dark', 'light');
    dropdownThemeSwitcherBtn.innerHTML = initialText;
    localStorage.setItem('theme', 'light');
  }
})

if(localStorage.getItem('theme') == 'light') {
  theme.classList = 'light';
} else {
  theme.classList = 'dark';
}

const menuBtn = document.querySelector("#menuButton");
const menuBtnIcon = document.querySelector("#menuButton span")
const dropdownMenu = document.querySelector(".dropdown__menu-list");

menuBtn.onclick = () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  menuBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}