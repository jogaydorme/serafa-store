const products = [
  {
    id: 1,
    name: "Camiseta Oversized",
    image: "images/produto1.jpg",
    price: 79.90,
  },
  {
    id: 2,
    name: "Moletom com Zíper",
    image: "images/produto2.jpg",
    price: 149.90,
  },
  {
    id: 3,
    name: "Calça Cargo",
    image: "images/produto3.jpg",
    price: 129.90,
  },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartSection = document.getElementById("cart");
const checkoutBtn = document.getElementById("checkout-btn");
let cart = [];

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">ADD</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
  cartSection.style.display = "block";
}

checkoutBtn.addEventListener("click", () => {
  alert("Checkout via Pix será implementado aqui.");
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
function toggleCart() {
  const cartBox = document.getElementById("cart-box");
  cartBox.classList.toggle("active");
}

function addToCart(product, price = 0) {
  cart.push({ product, price });
  updateCart();
  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  count.textContent = cart.length;
}

// Inicializa
renderProducts();

