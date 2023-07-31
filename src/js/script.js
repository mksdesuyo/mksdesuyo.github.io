const themeSwitcherButton = document.querySelector("#themeSwitcher");
const theme = document.body;
let initialText = `</span><i class="fa-regular fa-moon"></i> Dark<span>`;
themeSwitcherButton.innerHTML = initialText;

themeSwitcherButton.addEventListener('click', () => {
    changedText = `</span><i class="fa-regular fa-sun"></i> Light<span>`;

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