function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to display items in the cart
function displayCartItems(cart) {
    const cartItemsContainer = document.getElementById('cartItems');

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Create an image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        // Append image to the cart item div
        cartItemDiv.appendChild(img);

        // Display item details
        const itemDetails = document.createElement('div');
        itemDetails.style.display = 'flex';
        itemDetails.style.flexDirection = 'column';
        itemDetails.style.alignItems = 'center';

        itemDetails.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>Price: RM ${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        // Append item details to the cart item div
        cartItemDiv.appendChild(itemDetails);

        // Append the cart item div to the container
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

// Get cart data from the URL
const cartData = getParameterByName('cart');
let cart = [];

try {
    // Attempt to parse the cart data as JSON
    cart = cartData ? JSON.parse(decodeURIComponent(cartData)) : [];

    // Check if the parsed data is an array
    if (!Array.isArray(cart)) {
        console.error('Invalid cart data:', cartData);
        // Handle the error appropriately (e.g., show a message to the user)
        cart = [];
    }
} catch (error) {
    console.error('Error parsing cart data:', error);
    // Handle the error appropriately (e.g., show a message to the user)
    cart = [];
}

// Display items when the page loads
window.onload = () => displayCartItems(cart);

// Function to handle payment processing
function processPayment() {
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    alert(`Payment processed using ${selectedPaymentMethod}!`);
    window.location.href = 'confirmation.html'; // Redirect to a confirmation page
}

function returnToMenu() {
    window.location.replace('menu.html');
}

function displayTotalPrice(cart) {
const totalPriceElement = document.getElementById('totalPrice');
let totalPrice = 0;

// Calculate the total price by summing up individual item prices
cart.forEach(item => {
    totalPrice += item.price * item.quantity;
});

// Display the total price
totalPriceElement.textContent = `Total Price: RM ${totalPrice.toFixed(2)}`;
}

// Display items and total price when the page loads
window.onload = () => {
displayCartItems(cart);
displayTotalPrice(cart);
};