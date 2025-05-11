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
// For menu items sorting default
document.addEventListener("DOMContentLoaded", () => {
    // Ensure all items are visible by default
    document.querySelectorAll(".menu-item").forEach(item => {
        item.style.display = "block";
    });
});

// Menu Items sorting by category
document.querySelectorAll('.cat-row .cat').forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.getAttribute("data-category"); // Use data-category directly

        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = (selectedCategory === "all" || item.getAttribute("data-category") === selectedCategory) ? "block" : "none";
        });
    });
});

// Log in function for admin
function validatePassword(event) {
  event.preventDefault(); // Prevent form from submitting normally
  const password = document.getElementById("password").value;

  if (password === "123") {
    window.location.href = "admin.html"; // Redirect if password is correct
  } else {
    alert("Incorrect password!");
  }

  return false; // Prevent form submission
}