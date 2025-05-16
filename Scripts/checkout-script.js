// Contents of Scripts/checkout-script.js

/* For navbar menu (hamburger) */
const mobileNav = document.querySelector('.mobile-nav');
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

function loadCartToOrderSummary() {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    let products = window.listProducts;

    if (!products || products.length === 0) {
        fetch('Products.json') // Assuming Products.json is in the root or correct relative path
            .then(response => response.json())
            .then(data => {
                window.listProducts = data;
                displayOrderSummary(cartData, data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                const orderSummaryDiv = document.querySelector('.order-summary');
                if(orderSummaryDiv) {
                    orderSummaryDiv.innerHTML = '<p class="error">Could not load product information.</p>';
                }
            });
    } else {
        displayOrderSummary(cartData, products);
    }
}

function displayOrderSummary(cartData, products) {
    const orderSummaryDiv = document.querySelector('.order-summary');
    const orderTotalDiv = document.querySelector('.order-total');
    if (!orderSummaryDiv || !orderTotalDiv) {
        console.error("Order summary or total div not found!");
        return;
    }

    // Clear previous items, but keep the header row if it's part of the HTML structure
    // If the "Item Qty Price" header is dynamically added, you'll need to adjust
    // For now, let's assume the header is static in HTML or you'll re-add it if needed.
    orderSummaryDiv.innerHTML = ''; // Clear it out

    let totalPrice = 0;

    if (cartData.length === 0) {
        orderSummaryDiv.innerHTML = '<p>Your cart is empty.</p>';
        orderTotalDiv.innerHTML = '';
        return;
    }

    // Optional: Re-add a header row if it was cleared by innerHTML = ''
    const headerDiv = document.createElement('div');
    headerDiv.className = 'order-item order-header'; // Add a class for styling if needed
    headerDiv.innerHTML = `
        <span class="item-name">Item</span>
        <span class="item-qty">Qty</span>
        <span class="item-price">Price</span>
    `;
    orderSummaryDiv.appendChild(headerDiv);


    cartData.forEach(cartItem => {
        const product = products.find(p => p.id == cartItem.product_id);
        if (product) {
            const itemTotal = product.price * cartItem.quantity;
            totalPrice += itemTotal;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'order-item';
            itemDiv.innerHTML = `
                <span class="order-item-name">${product.name}</span>
                <span class="order-item-qty">x${cartItem.quantity}</span>
                <span class="order-item-price">Rs. ${itemTotal}</span>
            `;
            orderSummaryDiv.appendChild(itemDiv);
        }
    });

    orderTotalDiv.innerHTML = `<b>Total: Rs. ${totalPrice}</b>`;
}

function checkOutConfirmForm(event) {
    event.preventDefault();
    // Basic validation (can be expanded)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!name || !email || !address || !paymentMethod) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Checkout proceeding (simulation)!"); // Basic feedback
    // Here you would typically send the data to a server
    // and potentially clear the cart from localStorage
    // localStorage.removeItem('cart');
    // window.location.href = 'thankyou.html'; // Redirect to a thank you page
    return false;
}

// Call loadCartToOrderSummary when the CheckOut.html page loads
document.addEventListener('DOMContentLoaded', loadCartToOrderSummary);