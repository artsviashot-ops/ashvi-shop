// Product data
const products = [
    {
        id: 1,
        brand: 'Nike',
        name: 'Air Max 270',
        price: 149.99,
        category: 'shoes',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png'
    },
    {
        id: 2,
        brand: 'Adidas',
        name: 'Trefoil Hoodie',
        price: 64.99,
        category: 'hoodies',
        image: 'https://static.ftshp.digital/img/p/9/7/5/8/4/4/975844-full_product.jpg'
    },
    {
        id: 3,
        brand: 'Puma',
        name: 'Essential Logo Tee',
        price: 24.99,
        category: 'shirts',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586668/01/mod01/fnd/PNA/fmt/png'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 5,
        brand: 'Adidas',
        name: 'Campus',
        price: 76.99,
        category: 'shoes',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_00_standard.jpg'
    },
    {
        id: 6,
        brand: 'Nike',
        name: 'P-6000',
        price: 85.99,
        category: 'shoes',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/932513c6-894d-4387-a57f-66cf55fce152/NIKE+P-6000+%28GS%29.png'
    },
    {
        id: 7,
        brand: 'Nike',
        name: 'V5 RNR',
        price: 60.99,
        category: 'shoes',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6fe52371-d9f6-45a6-8b86-d95ba3fbf86e/NIKE+V5+RNR+E+%28PS%29.png'
    },
    {
        id: 8,
        brand: 'Christian',
        name: 'Louboutin LOUIS JUNIOR',
        price: 99.99,
        category: 'shoes',
        image: 'https://image-raw.reversible.com/raw_images/a982a17174279b1ccd9233f465ec1f6d1cb2b1fd773c3b74b54608539ae768ec'
    },
    {
        id: 9,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 10,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    // Add more products here to reach 50+ items
];

let cart = [];
let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});

// Display products based on filter
function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    displayProducts();
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Cart functions
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    updateCartCount();

    // Show confirmation animation
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div>Quantity: ${item.quantity}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('payment-amount').textContent = total.toFixed(2);
}

// Checkout functions
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function processPayment(event) {
    event.preventDefault();
    
    // Simulate payment processing
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('order-number').textContent = generateOrderNumber();
    document.getElementById('success-modal').style.display = 'block';
    
    // Clear cart
    cart = [];
    updateCart();
    updateCartCount();
}

function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
    toggleCart(); // Close cart sidebar
}

function generateOrderNumber() {
    return 'ORD-' + Date.now().toString().slice(-8);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const checkoutModal = document.getElementById('checkout-modal');
    const successModal = document.getElementById('success-modal');
    if (event.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
}
