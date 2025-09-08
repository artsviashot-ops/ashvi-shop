// Product data
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        brand: "Nike",
        category: "shoes",
        price: 129.99,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a4e9b2f-7ee8-45dc-8dd5-f7843a476303/air-max-270-mens-shoes-KkLcGR.png"
    },
    {
        id: 2,
        name: "Adidas Originals Hoodie",
        brand: "Adidas",
        category: "hoodies",
        price: 89.99,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c051bd78804be0a871ae9800ef4daa_9366/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg"
    },
    {
        id: 3,
        name: "Puma Essential Logo T-Shirt",
        brand: "Puma",
        category: "shirts",
        price: 24.99,
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/848722/01/mod01/fnd/PNA/fmt/png"
    },
    {
        id: 4,
        name: "Armani Exchange Slim Fit Pants",
        brand: "Armani",
        category: "pants",
        price: 149.99,
        image: "https://armani.scene7.com/is/image/armanioffs/8NZP10_Z8M9Z_1200_1?$prodList$"
    },
    // Add more products here...
];

let cart = [];
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            displayProducts();
        });
    });

    // Checkout form submission
    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);

    // Modal close button
    document.querySelector('.modal .close').addEventListener('click', () => {
        document.getElementById('checkout-modal').style.display = 'none';
    });
}

// Display products based on current category
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(0, item.quantity + change);
        if (item.quantity === 0) {
            removeFromCart(productId);
        }
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalAmount = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-item">&times;</button>
            </div>
        `;
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalAmount.textContent = total.toFixed(2);
    document.getElementById('checkout-amount').textContent = total.toFixed(2);
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('checkout-modal').style.display = 'block';
}

function handleCheckout(e) {
    e.preventDefault();
    
    // Validate form fields
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('card-name').value;

    if (!cardNumber || !expiryDate || !cvv || !cardName) {
        alert('Please fill in all payment details');
        return;
    }

    // Simulate payment processing
    setTimeout(() => {
        alert('Payment successful! Thank you for your purchase.');
        cart = [];
        updateCartDisplay();
        document.getElementById('checkout-modal').style.display = 'none';
        document.getElementById('checkout-form').reset();
        toggleCart();
    }, 1500);
}

// Format card input
document.getElementById('card-number').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = value;
});

document.getElementById('expiry-date').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    e.target.value = value;
});

// Close modal when clicking outside
window.onclick = (event) => {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
