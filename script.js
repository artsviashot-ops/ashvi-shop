// Product data
const products = [
    {
        id: 1,
        name: "Nike Air Max 2025",
        price: 199.99,
        brand: "Nike",
        type: "Shoes",
        image: "https://example.com/nike-airmax.jpg"
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 179.99,
        brand: "Adidas",
        type: "Shoes",
        image: "https://example.com/adidas-ultraboost.jpg"
    },
    {
        id: 3,
        name: "Puma Essential Hoodie",
        price: 69.99,
        brand: "Puma",
        type: "Hoodie",
        image: "https://example.com/puma-hoodie.jpg"
    },
    {
        id: 4,
        name: "Armani Exchange T-Shirt",
        price: 49.99,
        brand: "Armani",
        type: "T-Shirt",
        image: "https://example.com/armani-tshirt.jpg"
    },
    {
        id: 5,
        name: "Dolce & Gabbana Jeans",
        price: 299.99,
        brand: "Dolce & Gabbana",
        type: "Pants",
        image: "https://example.com/dg-jeans.jpg"
    }
    // Add more products as needed
];

let cart = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

// Display products in the grid
function displayProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Set up event listeners
function setupEventListeners() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    // Cart icon
    document.querySelector('.cart-icon').addEventListener('click', showCart);

    // Close modal buttons
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', closeModals);
    });

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', showCheckout);

    // Payment form
    document.getElementById('payment-form').addEventListener('submit', handlePayment);
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
    cartModal.style.display = 'block';
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function showCheckout() {
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
}

function handlePayment(e) {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
        alert('Payment successful! Thank you for your purchase.');
        cart = [];
        updateCartCount();
        closeModals();
    }, 1500);
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModals();
    }
});
