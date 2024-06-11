


// Get a reference to the "checkout cart" button
const checkoutCartBtn = document.querySelector('.shopping-cart .btn');

// Add a click event listener to the button
checkoutCartBtn.addEventListener('click', () => {
    // Redirect the user to the checkout page ("checkout.html")
    window.location.href = 'checkout.html';
});

let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


// main.js
function handleCheckout(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Your form handling logic here (e.g., retrieving form data)
    const form = event.target;
    const formData = new FormData(form);

    // Save the form data to localStorage
    for (const [key, value] of formData.entries()) {
        localStorage.setItem(key, value);
    }

    // Show the "Thank You" message
    const checkoutSection = document.querySelector(".checkout");
    checkoutSection.innerHTML = `
        <div class="thank-you-container">
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed.</p>
            <p>We will process your order and deliver it to the provided address.</p>
            <a href="home.html" class="btn">Back to Home</a>
        </div>`;
}



function increaseQuantity(quantityControl) {
    const quantityInput = quantityControl.nextElementSibling;
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
}

function decreaseQuantity(quantityControl) {
    const quantityInput = quantityControl.nextElementSibling.nextElementSibling;
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
}
