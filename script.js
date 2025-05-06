let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';
  total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert('Compra finalizada! Obrigado por comprar na SERAFA STORE.');
  carrinho = [];
  atualizarCarrinho();
}
