let cart = [];
let currentFilter = "all";

// Product data (20 items as before)
const products = [
  {id:1, brand:'Nike', name:'Air Max 270', price:149.99, category:'shoes', image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png'},
  {id:2, brand:'Adidas', name:'Campus 00s', price:89.99, category:'shoes', image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/35ee2767ce8c47418ffdb8fec30dbefe_9366/Campus_00s_Shoes_White_JQ7784_01_standard.jpg'},
  {id:3, brand:'Puma', name:'Suede Classic XXI', price:65, category:'shoes', image:'https://images.puma.com/image/upload/f_auto,q_auto/global/374915/01/sv01/fnd/PNA/fmt/png'},
  {id:4, brand:'Nike', name:'P-6000', price:85.99, category:'shoes', image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/932513c6-894d-4387-a57f-66cf55fce152/NIKE+P-6000+%28GS%29.png'},
  {id:5, brand:'Reebok', name:'Classic Leather', price:75, category:'shoes', image:'https://photos6.spartoo.eu/photos/214/21426400/21426400_1200_A.jpg'},
  {id:6, brand:'Adidas', name:'Trefoil Hoodie', price:64.99, category:'hoodies', image:'https://www.tradesports.co.uk/cdn/shop/files/GD9924-Photoroom.jpg?v=1715793725'},
  {id:7, brand:'Champion', name:'Eco Pullover', price:49.99, category:'hoodies', image:'https://i.ebayimg.com/images/g/uy8AAOSwgdRk0l0E/s-l1200.jpg'},
  {id:8, brand:'Zara', name:'Casual Hoodie', price:58.99, category:'hoodies', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-M71savV5wGa3dESDotmMlQNoPMQC_3gtA&s'},
  {id:9, brand:'Nike', name:'Tech Fleece Hoodie', price:89.99, category:'hoodies', image:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5a03f66d-7f9d-45bb-a136-a5d839a950c9/M+NK+TCH+FLC+FZ+WR+HOODIE.png'},
  {id:10, brand:'Puma', name:'Essential Hoodie', price:44.99, category:'hoodies', image:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586690/01/mod01/fnd/PNA/fmt/png/Essentials-Small-Logo-Men's-Hoodie'},
  {id:11, brand:'Nike', name:'Dri-FIT Tee', price:25, category:'shirts', image:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png'},
  {id:12, brand:'Adidas', name:'3-Stripes Tee', price:29.99, category:'shirts', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaasG3d5fibR9b7NhQ7mrH5E_f16MQjGldA&s'},
  {id:13, brand:'Puma', name:'Logo Tee', price:24.99, category:'shirts', image:'https://images.puma.com/image/upload/f_auto,q_auto/global/586670/01/fnd/PNA/fmt/png'},
  {id:14, brand:'Zara', name:'Casual Shirt', price:39.99, category:'shirts', image:'https://static.zara.net/assets/public/2e32/68f1/c96f451eb075/cbe4b5ba5541/06987308400-a1/06987308400-a1.jpg?ts=1758555657728&w=352&f=auto'},
  {id:15, brand:'Armani', name:'Slim Fit Polo', price:89.99, category:'shirts', image:'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw1e7c8b8f/PH4012_001_33.jpg'},
  {id:16, brand:'Nike', name:'Tech Joggers', price:79.99, category:'pants', image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5b9e5e6f-3f8b-4b7f-9f6e-9e6d7a8a4a8e/tech-fleece-mens-joggers-5GJ9wL.png'},
  {id:17, brand:'Adidas', name:'Tiro 21 Pants', price:54.99, category:'pants', image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/6b8a7cbb3e39462f8051ad3e00b25f15_9366/Tiro_21_Training_Pants_Black_GM7339_21_model.jpg'},
  {id:18, brand:'Puma', name:'Sweatpants', price:39.99, category:'pants', image:'https://images.puma.com/image/upload/f_auto,q_auto/global/586726/01/fnd/PNA/fmt/png'},
  {id:19, brand:'Zara', name:'Slim Fit Pants', price:59.99, category:'pants', image:'https://static.zara.net/photos///2023/I/0/2/p/5561/336/710/2/w/563/5561336710_6_1_1.jpg'},
  {id:20, brand:'Levi’s', name:'501 Jeans', price:69.99, category:'pants', image:'https://lsco.scene7.com/is/image/lsco/005010114-front-pdp?$qv_desktop_full$'}
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  setupCategoryFilters();
});

// Display products
function displayProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  const filtered = currentFilter === "all" ? products : products.filter(p => p.category === currentFilter);
  filtered.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.brand}</h3>
          <p>${product.name}</p>
          <p><strong>$${product.price.toFixed(2)}</strong></p>
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// Category filters
function setupCategoryFilters() {
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.dataset.category;
      displayProducts();
    });
  });
}

// Cart functions
function toggleCart() {
  const cart = document.getElementById("cart-sidebar");
  cart.classList.toggle("active");
  renderCart();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty++; else cart.push({...product, qty:1});
  updateCartCount();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `<div>${item.name} x${item.qty} - $${(item.price*item.qty).toFixed(2)}</div>`;
  });
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce((sum,i)=>sum+i.qty,0);
}

// Checkout
function checkout() {
  if(cart.length===0) return;
  document.getElementById("cart-sidebar").classList.remove("active");
  document.getElementById("success-modal").style.display="flex";
  cart = [];
  updateCartCount();
  renderCart();
}

// Close success modal
function closeSuccessModal() {
  document.getElementById("success-modal").style.display="none";
}
