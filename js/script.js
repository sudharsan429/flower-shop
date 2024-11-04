// script.js

// Initialize the cart as an empty array
let cart = [];

// Elements for updating the cart count and total price
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Add the product to the cart
        cart.push({ name, price });
        updateCart();
    });
});

// Function to update the cart display
function updateCart() {
    // Clear the current cart items
    cartItems.innerHTML = '';
    let total = 0;

    // Populate the cart items and calculate the total price
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update the cart count and total price in the UI
    cartCount.textContent = cart.length;
    totalPriceElement.textContent = total.toFixed(2);
}

// Checkout button functionality (currently just an alert)
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Checkout functionality is not implemented yet.');
    }
});
