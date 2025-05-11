/* For navbar menu */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});
/* For menu items image clicking in mobile */
function toggleFontSize(menuImg) {
    let desc = menuImg.parentElement.querySelector('.desc');
    desc.style.fontSize = desc.style.fontSize === '0.8em' ? '0em' : '0.8em';
}
// For category filter
document.querySelectorAll('.cat-row .cat').forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        
        document.querySelectorAll('.menu-item').forEach(item => {
            if (item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});