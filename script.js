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

// Seleciona o elemento onde a contagem do carrinho será exibida
const cartCount = document.querySelector('.cart-count');

// Inicializa a contagem do carrinho
let itemCount = 0;

// Função para adicionar um item ao carrinho (você já tem isso, mas vou incluir para referência)
function adicionarAoCarrinho(nomeProduto, preco) {
  itemCount++;
  cartCount.innerText = itemCount; // Atualiza a contagem exibida
  animateCart(); // Chama a função para animar o carrinho

  // Aqui você adicionaria a lógica real para adicionar o item ao carrinho (por exemplo, atualizar um array do carrinho, etc.)
  console.log(`Produto adicionado: ${nomeProduto}, Preço: R$ ${preco}`);
}

// Função para animar o carrinho
function animateCart() {
  cartCount.classList.add('cart-animate'); // Adiciona a classe para ativar a animação
  setTimeout(() => {
    cartCount.classList.remove('cart-animate'); // Remove a classe após a animação terminar
  }, 500); // Tempo da animação (0.5 segundos)
}
