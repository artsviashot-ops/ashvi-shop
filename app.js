// Demo product data with image URLs
const PRODUCTS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "Uniqlo",
    category: "Tops",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    brand: "Levi's",
    category: "Bottoms",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 3,
    name: "Red Hoodie",
    brand: "Nike",
    category: "Outerwear",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1519861399451-4b7f8e8c8e68"
  },
  {
    id: 4,
    name: "Summer Floral Dress",
    brand: "Zara",
    category: "Dresses",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504198266281-165d6b7a166d"
  }
];

let cart = [];
let currentView = "shop"; // "shop", "cart", "checkout", "success"

// Navigation
document.getElementById('shopBtn').onclick = () => setView('shop');
document.getElementById('cartBtn').onclick = () => setView('cart');

function setView(view) {
  currentView = view;
  render();
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (view === 'shop') document.getElementById('shopBtn').classList.add('active');
  if (view === 'cart') document.getElementById('cartBtn').classList.add('active');
}

// Render Functions
function render() {
  document.getElementById('cartCount').textContent = cart.length;
  const main = document.getElementById('mainContent');
  main.innerHTML = '';
  if (currentView === 'shop') {
    main.appendChild(renderProductGrid());
  } else if (currentView === 'cart') {
    main.appendChild(renderCart());
  } else if (currentView === 'checkout') {
    main.appendChild(renderCheckout());
  } else if (currentView === 'success') {
    main.appendChild(renderSuccess());
  }
}

function renderProductGrid() {
  const grid = document.createElement('div');
  grid.className = 'product-grid';
  PRODUCTS.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="brand">${product.brand}</div>
      <div class="category">${product.category}</div>
      <div class="price">$${product.price.toFixed(2)}</div>
    `;
    const btn = document.createElement('button');
    btn.textContent = 'Add to cart';
    btn.onclick = () => {
      cart.push(product);
      setView('cart');
    };
    card.appendChild(btn);
    grid.appendChild(card);
  });
  return grid;
}

function renderCart() {
  const wrapper = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'Your Cart';
  wrapper.appendChild(title);

  if (cart.length === 0) {
    wrapper.innerHTML += '<p>Cart is empty.</p>';
    return wrapper;
  }

  const list = document.createElement('ul');
  list.className = 'cart-list';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <div class="name">${item.name}</div>
        <div class="brand">${item.brand}</div>
        <div class="price">$${item.price.toFixed(2)}</div>
      </div>
    `;
    const rmBtn = document.createElement('button');
    rmBtn.textContent = 'Remove';
    rmBtn.onclick = () => {
      cart.splice(idx, 1);
      render();
    };
    li.appendChild(rmBtn);
    list.appendChild(li);
  });
  wrapper.appendChild(list);

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  wrapper.appendChild(totalDiv);

  const checkoutBtn = document.createElement('button');
  checkoutBtn.textContent = 'Proceed to Checkout';
  checkoutBtn.onclick = () => setView('checkout');
  wrapper.appendChild(checkoutBtn);

  return wrapper;
}

function renderCheckout() {
  const form = document.createElement('form');
  form.className = 'checkout-form';
  form.innerHTML = `
    <h2>Checkout (Fake)</h2>
    <input type="text" name="card" placeholder="Card Number" maxlength="19" required>
    <input type="text" name="name" placeholder="Name on Card" required>
    <input type="text" name="exp" placeholder="Expiry (MM/YY)" maxlength="5" required>
    <input type="text" name="cvv" placeholder="CVV" maxlength="4" required>
    <button type="submit">Buy (Fake)</button>
    <button type="button" id="cancelBtn">Cancel</button>
    <div class="cart-total" style="margin-top:10px;">Total: $${cart.reduce((sum, p) => sum + p.price, 0).toFixed(2)}</div>
    <div id="checkoutError" style="color:red;margin-top:5px;"></div>
  `;
  form.onsubmit = (e) => {
    e.preventDefault();
    const card = form.card.value.trim();
    const name = form.name.value.trim();
    const exp = form.exp.value.trim();
    const cvv = form.cvv.value.trim();
    if (!card || !name || !exp || !cvv) {
      form.querySelector('#checkoutError').textContent = "Please fill in all fields (fake data allowed)";
      return;
    }
    form.querySelector('#checkoutError').textContent = "";
    setTimeout(() => {
      cart = [];
      setView('success');
    }, 1000);
  };
  form.querySelector('#cancelBtn').onclick = () => setView('shop');
  return form;
}

function renderSuccess() {
  const div = document.createElement('div');
  div.className = 'success-msg';
  div.innerHTML = `
    <h2>Order Successful!</h2>
    <p>Thank you for your (fake) purchase.</p>
    <button onclick="setView('shop')" style="margin-top:16px;">Back to Shop</button>
  `;
  return div;
}

// Initial render
render();

// Enable Back to Shop button in success view (since it's rendered as HTML)
window.setView = setView;
