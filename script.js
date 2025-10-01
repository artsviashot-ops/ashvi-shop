// Product data
const products = [
    // Shoes
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
        name: 'Campus 00s',
        price: 89.99,
        category: 'shoes',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_00_standard.jpg'
    },
    {
        id: 3,
        brand: 'Puma',
        name: 'Suede Classic XXI',
        price: 65.00,
        category: 'shoes',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/365741/01/mod01/fnd/PNA/fmt/png'
    },
    {
        id: 4,
        brand: 'Armani',
        name: 'Designer Jeans',
        price: 199.99,
        category: 'shoes',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 5,
        brand: 'Nike',
        name: 'P-6000',
        price: 85.99,
        category: 'shoes',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/932513c6-894d-4387-a57f-66cf55fce152/NIKE+P-6000+%28GS%29.png'
    },

    // Hoodies
    {
        id: 6,
        brand: 'Adidas',
        name: 'Trefoil Hoodie',
        price: 64.99,
        category: 'hoodies',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_00_standard.jpg'
    },
    {
        id: 7,
        brand: 'Champion',
        name: 'S700 EcoSmart Pullover',
        price: 49.99,
        category: 'hoodies',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 8,
        brand: 'Louis Vuitton',
        name: 'Supreme Box Logo Hoodie',
        price: 5245.99,
        category: 'hoodies',
        image: 'https://the-collectory.com/cdn/shop/products/supreme-x-louis-vuitton-collaboration_800x.jpg?v=1527265533'
    },
    {
        id: 9,
        brand: 'Zara',
        name: 'Man Hoodie',
        price: 58.99,
        category: 'hoodies',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/389108243/VO/CA/YP/156224526/zara-man-hoodies-500x500.png'
    },
    {
        id: 10,
        brand: 'Armani',
        name: 'Man Hoodie',
        price: 58.99,
        category: 'hoodies',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },

    // Shirts
    {
        id: 11,
        brand: 'Nike',
        name: 'Dri-FIT Legend Tee',
        price: 25.00,
        category: 'shirts',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b3e9b6b-0b3e-4b8e-9c8b-5f6c9c1a2b4a/dri-fit-legend-mens-training-t-shirt-9V6h8M.png'
    },
    {
        id: 12,
        brand: 'Adidas',
        name: 'Climacool 3-Stripes Tee',
        price: 29.99,
        category: 'shirts',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_00_standard.jpg'
    },
    {
        id: 13,
        brand: 'Puma',
        name: 'Essential Logo Tee',
        price: 24.99,
        category: 'shirts',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586668/01/mod01/fnd/PNA/fmt/png'
    },
    {
        id: 14,
        brand: 'Armani',
        name: 'Slim Fit Polo',
        price: 89.99,
        category: 'shirts',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 15,
        brand: 'Zara',
        name: 'Man Shirt',
        price: 49.99,
        category: 'shirts',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/389108243/VO/CA/YP/156224526/zara-man-hoodies-500x500.png'
    },

    // Pants
    {
        id: 16,
        brand: 'Nike',
        name: 'Tech Fleece Joggers',
        price: 79.99,
        category: 'pants',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5b9e5e6f-3f8b-4b7f-9f6e-9e6d7a8a4a8e/tech-fleece-mens-joggers-5GJ9wL.png'
    },
    {
        id: 17,
        brand: 'Adidas',
        name: 'Tiro 21 Training Pants',
        price: 54.99,
        category: 'pants',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_00_standard.jpg'
    },
    {
        id: 18,
        brand: 'Puma',
        name: 'Essentials Sweatpants',
        price: 39.99,
        category: 'pants',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586668/01/mod01/fnd/PNA/fmt/png'
    },
    {
        id: 19,
        brand: 'Armani',
        name: 'Slim Fit Chinos',
        price: 99.99,
        category: 'pants',
        image: 'https://imagescdn.simons.ca/images/9185-1343106-1-A1_3/slim-fit-faded-black-jean.jpg?__=3'
    },
    {
        id: 20,
        brand: 'Zara',
        name: 'Man Pants',
        price: 59.99,
        category: 'pants',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/389108243/VO/CA/YP/156224526/zara-man-hoodies-500x500.png'
    }
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
    const existingItem = cart
::contentReference[oaicite:0]{index=0}
 
