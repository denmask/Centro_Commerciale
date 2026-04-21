let cart = JSON.parse(localStorage.getItem('cc_cart') || '[]');
let allShops = [];
let activeShop = null;

const PRODUCT_IMAGES = {
  1:  'https://www.melarossa.it/wp-content/uploads/2019/12/pane-di-segale-ricetta.jpg?x99527', 
  2:  'https://tse2.mm.bing.net/th/id/OIP.wOxpMFRhYVE6Y8610ltJgAHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', 
  3:  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=85', 
  4:  'https://www.browneyedbaker.com/wp-content/uploads/2024/01/ciabatta-25-1200.jpg', 

  5:  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=85', 
  6:  'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=85', 
  7:  'https://th.bing.com/th/id/R.87cba8421fac383ecb1de4319523fd3c?rik=ukj8zrb4Yp%2bkHg&pid=ImgRaw&r=0', 
  8:  'https://www.coopshop.it/photo/2020/09/05/e/raw/large/6565090_1392233_1.jpg', 

  9:  'https://tse4.mm.bing.net/th/id/OIP.mdPnt4xk_5dtlCLbk98WNQHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', 
  10: 'https://i1.perfumesclub.com/grande/166517.jpg', 
  11: 'https://1000farmacie-s3-production-images.gumlet.io/product_images/931094027/7lk20h6yynu6mozjttnmh2u257o7/cerotto_articolazioni_elastico_profar_16_pezzi.jpg?format=webp&height=400&quality=75&width=400', 
  12: 'https://tse2.mm.bing.net/th/id/OIP.FXN0Uqdt_7LKHUKmk36iQwHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', 

  13: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=85', 
  14: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=85', 
  15: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=85', 
  16: 'https://www.lowprice.ch/101027-large_default/primia-passata-di-pomodoro-rustica.jpg', 

  17: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?w=400&q=85', 
  18: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=85', 
  19: 'https://www.ilnorcino.eu/wp-content/uploads/2020/12/Salsiccie-fresche-dolci.jpg', 
  20: 'https://th.bing.com/th/id/R.2c1fb8ffa4b9f474fbb58f38146db9d0?rik=bjHO8R%2bDPRmePg&riu=http%3a%2f%2fwww.passionemamma.it%2fwp-content%2fuploads%2f2015%2f05%2fprosciutto-crudo.jpg&ehk=6SjXyHsdCsRRsLfQSUz%2fUVg3q8DoEFBGTHmkt0DnTmU%3d&risl=&pid=ImgRaw&r=0', 

  21: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=85', 
  22: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=85',
  23: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=85', 
  24: 'https://blog.giallozafferano.it/paola67/wp-content/uploads/2018/07/tramezzini-tonno-e-uova-768x512.jpg', 

  25: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&q=85', 
  26: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=85', 
  27: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=85', 
  28: 'https://tse4.mm.bing.net/th/id/OIP.S--m8LT50JFj_FgHQtNBTAHaF-?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', 

  29: 'https://thumbs.dreamstime.com/b/cascata-delle-penne-colorate-486086.jpg', 
  30: 'https://m.media-amazon.com/images/I/411A6UrFrFS._AC_.jpg', 
  31: 'https://www.ufficiodiscount.it/imgpool/fe21-product-detail/R0/R00893.jpg', 
  32: 'https://th.bing.com/th/id/R.63ffd2cc50f8c57083569e4ea4746fc5?rik=f6lw5N9EhdnKQg&pid=ImgRaw&r=0', 

  33: 'https://quifinanza.it/wp-content/uploads/sites/5/2023/09/Italia-tra-i-Paesi-dEuropa-dove-la-benzina-costa-di-piu.jpeg', 
  34: 'https://dealer.cdn.gestionaleauto.com/wp-content/uploads/sites/2846/2023/07/additivi_diesel.jpg', 
  35: 'https://www.effemmericambi.com/3080-thickbox_default/olio-motore-elf-evolution-900-nf-5w-40-1-lt.jpg', 
  36: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=85', 

  // MEDIAWORLD
  37: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=85', 
  38: 'https://th.bing.com/th/id/R.ec8d4a79bc1f58b5719850bcd77c871b?rik=lZNzUewnJPWtIQ&pid=ImgRaw&r=0', 
  39: 'https://www.wemedia.it/img/news/hi/202505/sony-wh-1000xm6-cuffie-nuove_20250528.webp', 
  40: 'https://electronicparadise.in/cdn/shop/files/LenovoLOQIntelCorei5.jpg?v=1701941363&width=1500', 

  // PIAZZA ITALIA
  41: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=85', 
  42: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=85', 
  43: 'https://i.ebayimg.com/images/g/e58AAOSwd~5lRSvs/s-l1600.webp', 
  44: 'https://shop.hcap.ch/media/fc/f1/11/1763632109/Giacca1.jpg',
};

const FALLBACK = 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&q=80';

function getImg(id) { return PRODUCT_IMAGES[id] || FALLBACK; }

async function init() {
  const res = await fetch('products.json');
  const data = await res.json();
  allShops = data.shops;
  renderNav(allShops);
  switchShop(allShops[0].id);
  updateCartUI();

  // Animate hero on load
  document.querySelector('.hero-banner')?.classList.add('loaded');
}

function renderNav(shops) {
  const nav = document.getElementById('shopsNav');
  nav.innerHTML = shops.map(s => `
    <button class="shop-tab" data-id="${s.id}" onclick="switchShop('${s.id}')">
      <span class="icon">${s.icon}</span>
      <span class="tab-name">${s.name}</span>
      <span class="tab-count">${s.products.length}</span>
    </button>
  `).join('');
}

function switchShop(id) {
  activeShop = id;
  document.querySelectorAll('.shop-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.id === id);
  });
  const shop = allShops.find(s => s.id === id);
  renderShop(shop);
  // Update mobile toggle label
  const label = document.getElementById('navToggleLabel');
  if (label) label.textContent = `${shop.icon} ${shop.name}`;
}

function renderShop(shop) {
  const container = document.getElementById('shopContent');
  container.style.transition = 'none';
  container.style.opacity = '0';
  container.style.transform = 'translateY(12px)';
  container.innerHTML = `
    <div class="section-header">
      <span class="section-icon">${shop.icon}</span>
      <div class="section-title-group">
        <h2>${shop.name}</h2>
        <p>Scopri tutti i prodotti disponibili</p>
      </div>
      <span class="badge">${shop.products.length} prodotti</span>
    </div>
    <div class="products-grid">
      ${shop.products.map(p => renderCard(p, shop)).join('')}
    </div>
  `;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    container.style.transition = 'opacity 0.28s ease, transform 0.28s cubic-bezier(0.4,0,0.2,1)';
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }));
}

function renderCard(p, shop) {
  const inCart = cart.find(c => c.id === p.id);
  const imgSrc = getImg(p.id);
  return `
    <div class="product-card" id="card-${p.id}">
      <div class="product-img-wrap">
        <img class="product-img" src="${imgSrc}" alt="${p.name}" loading="lazy"
          onerror="this.src='${FALLBACK}'">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-unit">${p.unit}</div>
        <div class="product-footer">
          <div class="product-price ${p.price === 0 ? 'free' : ''}">${formatPrice(p.price)}</div>
          <button class="add-btn ${inCart ? 'added' : ''}"
            onclick="addToCart(${p.id}, '${shop.id}', '${shop.icon}')"
            title="Aggiungi al carrello">
            ${inCart ? '✓' : '+'}
          </button>
        </div>
      </div>
    </div>
  `;
}

document.getElementById('searchInput').addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (!q) { switchShop(activeShop); return; }
  const results = [];
  allShops.forEach(shop => {
    shop.products.forEach(p => {
      if (p.name.toLowerCase().includes(q))
        results.push({ ...p, shopName: shop.name, shopIcon: shop.icon, shopId: shop.id });
    });
  });
  renderSearchResults(results, q);
});

function renderSearchResults(results, q) {
  const container = document.getElementById('shopContent');
  if (!results.length) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-icon">🔍</div>
        <h3>Nessun risultato</h3>
        <p>Nessun prodotto trovato per "<strong>${q}</strong>"</p>
      </div>`;
    return;
  }
  container.innerHTML = `
    <div class="search-header">
      <h2>Risultati</h2>
      <span class="result-count">${results.length} prodotto${results.length > 1 ? 'i' : ''} per "<em>${q}</em>"</span>
    </div>
    <div class="products-grid">
      ${results.map(p => `
        <div class="product-card" id="card-${p.id}">
          <div class="product-img-wrap">
            <img class="product-img" src="${getImg(p.id)}" alt="${p.name}" loading="lazy"
              onerror="this.src='${FALLBACK}'">
            <span class="product-badge">${p.shopIcon} ${p.shopName}</span>
          </div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-unit">${p.unit}</div>
            <div class="product-footer">
              <div class="product-price ${p.price === 0 ? 'free' : ''}">${formatPrice(p.price)}</div>
              <button class="add-btn ${cart.find(c=>c.id===p.id)?'added':''}"
                onclick="addToCart(${p.id}, '${p.shopId}', '${p.shopIcon}')">
                ${cart.find(c=>c.id===p.id)?'✓':'+'}
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function addToCart(productId, shopId, shopIcon) {
  const shop = allShops.find(s => s.id === shopId);
  const product = shop.products.find(p => p.id === productId);
  const existing = cart.find(c => c.id === productId);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, img: getImg(productId), qty: 1, shopName: shop.name, shopIcon }); }
  saveCart(); updateCartUI();
  showToast(`${product.name} aggiunto 🛍️`);
  const btn = document.querySelector(`#card-${productId} .add-btn`);
  if (btn) { btn.textContent = '✓'; btn.classList.add('added'); }
}

function removeFromCart(productId) {
  const idx = cart.findIndex(c => c.id === productId);
  if (idx !== -1) {
    if (cart[idx].qty > 1) cart[idx].qty--;
    else cart.splice(idx, 1);
  }
  saveCart(); updateCartUI(); renderCartItems();
}

function addQty(productId) {
  const item = cart.find(c => c.id === productId);
  if (item) { item.qty++; saveCart(); updateCartUI(); renderCartItems(); }
}

function saveCart() { localStorage.setItem('cc_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = total;
  countEl.classList.toggle('hidden', total === 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(totalPrice);
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty">
      <span class="empty-icon">🛍️</span>
      <p>Nessun prodotto nel carrello</p>
      <span>Aggiungi qualcosa dai negozi</span>
    </div>`;
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img || getImg(item.id)}" alt="${item.name}"
        onerror="this.src='${FALLBACK}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-shop">${item.shopIcon} ${item.shopName}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="addQty(${item.id})">+</button>
      </div>
    </div>
  `).join('');
}

function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

function checkout() {
  if (!cart.length) return;
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  cart = []; saveCart(); updateCartUI(); closeCart();
  showToast(`✅ Ordine di ${formatPrice(total)} confermato!`);
}

function toggleMobileNav() {
  const sidebar = document.getElementById('sidebarNav');
  const nav = document.getElementById('shopsNav');
  sidebar.classList.toggle('mobile-open');
  nav.classList.toggle('mobile-open');
}

function formatPrice(price) {
  if (price === 0) return 'Gratuito';
  return '€ ' + price.toFixed(2).replace('.', ',');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

init();