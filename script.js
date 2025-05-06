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
