
let cart = [];
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('hidden');
}

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  list.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = `Total: R$ ${sum.toFixed(2)}`;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function checkoutPix() {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const pixElement = document.getElementById('pix-qrcode');
  pixElement.innerHTML = `<p>QR Code gerado para o valor de R$ ${total.toFixed(2)}</p><img src='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Pix+Pagamento+R$+${total.toFixed(2)}' alt='Pix QR Code' />`;
}

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

const cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item} `;
    list.appendChild(li);
  });
}

function checkout() {
  alert("Gerando QR Code do Pix para pagamento...");
  // Aqui você pode integrar com uma API Pix Dinâmico (Opção B)
}
