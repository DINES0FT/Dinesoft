// Select all elements with the class 'Addtocart'
var buttons = document.getElementsByClassName('buy-button');

// Add the same click event listener to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert('Product added to cart!');
    });
}

