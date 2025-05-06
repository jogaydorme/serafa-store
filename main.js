<script>
let cart = [];

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function addToCart(product, price = 0) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = `Total: R$ ${sum.toFixed(2)}`;
}

function checkoutPix() {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const pixElement = document.getElementById('pix-qrcode');
  pixElement.innerHTML = `<p>QR Code gerado para o valor de R$ ${total.toFixed(2)}</p><img src='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Pix+Pagamento+R$+${total.toFixed(2)}' alt='Pix QR Code' />`;
}

function checkout() {
  alert("Gerando QR Code Pix para pagamento...");
}

function shopNow(product = "Item Shop Now", price = 99.90) {
  addToCart(product, price);
}
</script>
