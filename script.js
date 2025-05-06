$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.nav-links').toggleClass('active');
  });

  let cartCount = 0;

  $('.add-to-cart').click(function () {
    cartCount++;
    $('#cart-count').text(cartCount);
    alert('Produto adicionado ao carrinho!');
  });
});
