const themeSwitcherButton = document.querySelector("#themeSwitcher");
const theme = document.body;
let initialText = `<span class="fa-regular fa-moon" aria-hidden="true"></span> Dark`;
themeSwitcherButton.innerHTML = initialText;

themeSwitcherButton.addEventListener('click', () => {
  changedText = `<span class="fa-regular fa-sun" aria-hidden="true"></span> Light`;

  if(theme.classList == 'light') {
    theme.classList.replace('light', 'dark');
    themeSwitcherButton.innerHTML = changedText;
    localStorage.setItem('theme', 'dark');
  } else {
    theme.classList.replace('dark', 'light');
    themeSwitcherButton.innerHTML = initialText;
    localStorage.setItem('theme', 'light');
  }
})

if(localStorage.getItem('theme') == 'light') {
  theme.classList = 'light';
} else {
  theme.classList = 'dark';
}