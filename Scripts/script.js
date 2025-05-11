const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});
function toggleFontSize(menuImg) {
    let desc = menuImg.parentElement.querySelector('.desc');
    desc.style.fontSize = desc.style.fontSize === '0.8em' ? '0em' : '0.8em';
}