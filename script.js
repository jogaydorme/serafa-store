// Seleciona elementos do DOM
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavContainer = document.querySelector('.mobile-nav-container');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileNavList = document.querySelector('.mobile-nav-list');
const mobileNavItemsWithSubmenu = document.querySelectorAll('.mobile-nav-item.has-submenu');
const desktopNavItemsWithSubmenu = document.querySelectorAll('.desktop-nav-item > .desktop-nav-link + .desktop-nav-list');

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

// Menu Mobile
if (mobileNavToggle && mobileNavContainer && mobileNavClose && mobileNavList) {
  mobileNavToggle.addEventListener('click', () => {
    mobileNavContainer.classList.add('show-mobile-nav');
    document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
  });

  mobileNavClose.addEventListener('click', () => {
    mobileNavContainer.classList.remove('show-mobile-nav');
    document.body.style.overflow = ''; // Restaura o scroll do fundo
  });

  mobileNavList.addEventListener('click', (event) => {
    if (event.target.classList.contains('mobile-nav-link')) {
      mobileNavContainer.classList.remove('show-mobile-nav');
      document.body.style.overflow = ''; // Restaura o scroll do fundo
    }
  });

  mobileNavItemsWithSubmenu.forEach(item => {
    const submenu = item.querySelector('.mobile-nav-submenu');
    const link = item.querySelector('.mobile-nav-link');
    const arrow = item.querySelector('.mobile-nav-arrow');

    if (submenu && link && arrow) {
      link.addEventListener('click', (event) => {
        if (event.target === link || event.target === arrow || event.target === arrow.querySelector('i')) {
          event.preventDefault(); // Evita que o link navegue
          submenu.classList.toggle('show-submenu');
          arrow.classList.toggle('rotate-arrow');
        }
      });
    }
  });
}

// Menu Desktop (Submenus)
if (desktopNavItemsWithSubmenu.length > 0) {
  desktopNavItemsWithSubmenu.forEach(submenu => {
    const parentItem = submenu.parentElement;
    parentItem.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
    });
    parentItem.addEventListener('mouseleave', () => {
      submenu.style.display = 'none';
    });
  });
}
