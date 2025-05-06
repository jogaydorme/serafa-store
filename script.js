$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.nav-links').toggleClass('active');
  });

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  $('.add-to-cart').click(function () {
    const card = $(this).closest('.product');
    const product = {
      name: card.find('h4').text(),
      price: 129.90, // Altere para o preço real
      image: card.find('img').attr('src')
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    $('#cart-count').text(cart.length);
    alert('Produto adicionado ao carrinho!');
  });

  $('#cart-count').text(cart.length);
});

document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const name = this.parentElement.querySelector('h4').innerText;
      const image = this.parentElement.querySelector('img').src;
      const price = 149.90;

      cart.push({ name, image, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Produto adicionado ao carrinho!");
    });
  });
});
