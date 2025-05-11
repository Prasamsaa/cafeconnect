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
document.addEventListener("DOMContentLoaded", () => {
    // Ensure all items are visible by default
    document.querySelectorAll(".menu-item").forEach(item => {
        item.style.display = "block";
    });
});

// Category filtering
document.querySelectorAll('.cat-row .cat').forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.getAttribute("data-category"); // Use data-category directly

        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = (selectedCategory === "all" || item.getAttribute("data-category") === selectedCategory) ? "block" : "none";
        });
    });
});