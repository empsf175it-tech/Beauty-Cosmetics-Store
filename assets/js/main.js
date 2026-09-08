/**
 * NÉA — Haute Botanique & Cosmetic Couture
 * Core Interactive E-Commerce & 3D Experience Engine
 */

// ==========================================================================
// 1. Curated Luxury Product Catalog
// ==========================================================================
const MAISON_PRODUCTS = [
  {
    id: 'serum-radiance',
    name: 'Cellular Radiance Vitamin C Serum',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 88.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 184,
    image: 'assets/images/radiance-serum.webp',
    badge: 'Award Winner',
    shortDesc: 'A multi-correctional botanical elixir formulated with 15% stabilised Vitamin C, Damascus rose water, and fermented squalane to restore luminous radiance.',
    fullDesc: 'Harnessing the potent synergy of wild French alpine botanicals and cellular-active Vitamin C, this ultra-lightweight serum targets environmental oxidation, improves visible firmness, and floods the epidermis with enduring hydration.',
    skinType: 'All',
    variants: ['30ml / 1.0 fl. oz.', '50ml / 1.7 fl. oz.', '100ml / 3.4 fl. oz.'],
    benefits: ['Supports skin barrier', '72h deep hydration', 'Dermatologically tested', '100% Vegan']
  },
  {
    id: 'cream-barrier',
    name: 'Barrier Repair Velvet Moisturizer',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 94.00,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 230,
    image: 'assets/images/barrier-moisturizer.webp',
    badge: 'Best Seller',
    shortDesc: 'A rich, melt-in cream infused with biomimetic ceramides, peony root, and organic camellia seed oil for resilient, cushion-soft skin.',
    fullDesc: 'Crafted for compromised or fatigued skin barriers, this decadent cream envelops your complexion in weightless lipid moisture while strengthening the acid mantle against modern stressors.',
    skinType: 'Dry',
    variants: ['50ml / 1.7 oz.', '100ml / 3.4 oz.'],
    benefits: ['Ceramide NP Complex', 'Reduces redness', 'Fragrance-free', 'Intense comfort']
  },
  {
    id: 'lipstick-velvet',
    name: 'Haute Velvet Matte Lip Color',
    category: 'makeup',
    categoryLabel: 'Makeup',
    price: 44.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 142,
    image: 'assets/images/velvet-lipstick.webp',
    badge: 'New Launch',
    shortDesc: 'A weightless, hydrating velvet matte lipstick dressed in an architectural brushed brass flacon. Silky, non-drying pigment.',
    fullDesc: 'Enriched with cold-pressed rosehip seed extract and plant wax spheres, each shade glides across contours with sensorial ease, providing 10-hour seamless wear without feathering.',
    skinType: 'All',
    variants: ['04 Velvet Berry', '02 Rose Quartz', '01 Alabaster Nude', '07 Midnight Wine'],
    benefits: ['Non-drying formula', '10-hour wear', 'Clean mineral pigments', 'Refillable case']
  },
  {
    id: 'hair-camellia',
    name: 'Botanical Camellia Hair Elixir',
    category: 'haircare',
    categoryLabel: 'Haircare',
    price: 68.00,
    originalPrice: 82.00,
    rating: 4.9,
    reviewsCount: 96,
    image: 'assets/images/botanical-hair-serum.webp',
    badge: 'Staff Pick',
    shortDesc: 'Precious Japanese camellia and rosemary essential oils combine to smooth frizz, repair heat degradation, and impart glass-like shine.',
    fullDesc: 'A silken, dry-finish hair serum that nourishes the cuticle from roots to ends. Protects against thermal styling up to 230°C while releasing a gentle botanical aura of crushed fig and neroli.',
    skinType: 'All',
    variants: ['50ml / 1.7 fl. oz.', '100ml / 3.4 fl. oz.'],
    benefits: ['Heat protection 230°C', 'Zero silicone feel', 'Tames split ends', 'Featherweight gloss']
  },
  {
    id: 'foundation-glow',
    name: 'Luminous Silk Fluid Foundation',
    category: 'makeup',
    categoryLabel: 'Makeup',
    price: 62.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 118,
    image: 'assets/images/glow-foundation.webp',
    badge: 'Popular',
    shortDesc: 'A breathable, second-skin luminous foundation loaded with hyaluronic micro-spheres and light-refracting minerals.',
    fullDesc: 'Blurring the boundary between high-performance skincare and couture makeup, this fluid foundation melts effortlessly into the face to even out tone, diffuse pores, and impart a fresh morning glow.',
    skinType: 'All',
    variants: ['Fair Rose (01)', 'Light Warm (02)', 'Medium Olive (03)', 'Rich Deep (04)'],
    benefits: ['SPF 20 Mineral', 'Medium buildable coverage', 'Non-comedogenic', 'Sweat & humidity resistant']
  },
  {
    id: 'lip-nectar',
    name: 'Peptide Hydrating Lip Nectar',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 32.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 310,
    image: 'assets/images/hydrating-lip-treatment.webp',
    badge: 'Best Seller',
    shortDesc: 'An intensive restorative lip treatment loaded with tri-peptides, cupuaçu butter, and sweet almond oil.',
    fullDesc: 'Drench dry, chapped lips in instant high-gloss nourishment. Volumises appearance and locks in plumping moisture day or night.',
    skinType: 'All',
    variants: ['Rose Petal Glaze', 'Clear Dew', 'Warm Praline'],
    benefits: ['Volume-boosting peptides', 'Deep barrier recovery', 'Glossy non-sticky texture']
  },
  {
    id: 'night-balm',
    name: 'Cellular Renewal Night Balm',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 115.00,
    originalPrice: 135.00,
    rating: 5.0,
    reviewsCount: 88,
    image: 'assets/images/renewal-night-cream.webp',
    badge: 'Haute Couture',
    shortDesc: 'An overnight transformation balm powered by phytoretinol (Bakuchiol), elderberry bio-lipids, and French lavender essence.',
    fullDesc: 'Working harmoniously with your biological circadian rhythms, this decadent balm repairs daytime oxidative stress, softens fine lines, and reveals luminous morning skin.',
    skinType: 'Dry',
    variants: ['50ml / 1.7 oz.'],
    benefits: ['Gentle Bakuchiol', 'Intense overnight regeneration', 'Soothes stressed skin']
  },
  {
    id: 'cleanser-purifying',
    name: 'Botanical Gentle Purifying Cleanser',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 52.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 165,
    image: 'assets/images/gentle-cleanser.webp',
    badge: 'Essential',
    shortDesc: 'A pH-balanced gel-to-milk cleanser that lifts pollutants and makeup without disrupting delicate barrier lipids.',
    fullDesc: 'Infused with chamomile, elderflower, and soothing oat extracts, this silky formulation dissolves stubborn impurities while leaving skin calm, soft, and never tight.',
    skinType: 'Sensitive',
    variants: ['150ml / 5.1 fl. oz.'],
    benefits: ['pH 5.5 balanced', 'Soap-free formula', 'Removes waterproof makeup', 'Calms redness']
  },
  {
    id: 'eye-peony',
    name: 'Peony Firming Eye Contour Balm',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 76.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 94,
    image: 'assets/images/peony-eye-cream.jpg',
    badge: 'Targeted',
    shortDesc: 'Cooling peptide and white peony eye cream to visibly de-puff, brighten dark circles, and firm delicate eyelids.',
    fullDesc: 'Formulated with botanical caffeine, micro-algae, and soothing rosewater, this featherlight cream immediately cools fatigued eyes and refreshes under-eye shadows.',
    skinType: 'All',
    variants: ['15ml / 0.5 oz.'],
    benefits: ['De-puffs under 5 minutes', 'Ophthalmologist tested', 'Smooths crow’s feet', 'Concealer friendly']
  },
  {
    id: 'toner-essence',
    name: 'Rose Quartz Hydrating Essence Toner',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 58.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 140,
    image: 'assets/images/rose-essence-toner.webp',
    badge: 'Best Seller',
    shortDesc: 'A balancing prebiotic infusion of distilled Damascus rose, niacinamide, and multi-molecular weight hyaluronic acid.',
    fullDesc: 'Prepares the epidermis for serums by balancing skin pH, reducing enlarged pores, and bathing cells in soothing antioxidant moisture.',
    skinType: 'All',
    variants: ['200ml / 6.7 fl. oz.'],
    benefits: ['Prebiotic skin microbiome support', 'Refines pores', 'Alcohol-free', 'Intense moisture bath']
  },
  {
    id: 'hair-wash',
    name: 'Nourishing Botanical Hair Wash',
    category: 'haircare',
    categoryLabel: 'Haircare',
    price: 48.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 82,
    image: 'assets/images/volume-shampoo.webp',
    badge: 'Clean Care',
    shortDesc: 'A rich sulfate-free shampoo formulated with meadowfoam seed oil and vegetable keratin to cleanse gently while boosting volume.',
    fullDesc: 'Breathes life into dull, fine, or chemically treated strands. Creates a luxurious aromatic lather with cedarwood, bergamot, and white musk.',
    skinType: 'All',
    variants: ['250ml / 8.5 fl. oz.', '500ml Refill'],
    benefits: ['Sulfate & paraben free', 'Color-safe formula', 'Strengthens hair fiber', 'Weightless volume']
  },
  {
    id: 'mask-clay',
    name: 'French Rose Refining Clay Mask',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 64.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 112,
    image: 'assets/images/clay-mask.webp',
    badge: 'Weekly Ritual',
    shortDesc: 'Purifying French pink clay infused with crushed rose petals, lactic acid, and soothing colloidal oats.',
    fullDesc: 'Gently draws out sebum and micro-pollutants without cracking or stripping hydration. Leaves skin remarkably smooth, luminous, and refined.',
    skinType: 'Oily',
    variants: ['75ml / 2.5 oz.'],
    benefits: ['Gentle micro-exfoliation', 'Unclogs congested pores', 'Non-drying velvet paste']
  }
];

// ==========================================================================
// 2. Application State Management (Local Storage Sync)
// ==========================================================================
class MaisonStore {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('maison_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('maison_wishlist')) || [];
    this.FREE_SHIPPING_THRESHOLD = 75.00;
  }

  saveCart() {
    localStorage.setItem('maison_cart', JSON.stringify(this.cart));
    this.updateHeaderBadges();
    this.renderCartDrawer();
  }

  saveWishlist() {
    localStorage.setItem('maison_wishlist', JSON.stringify(this.wishlist));
    this.updateHeaderBadges();
    this.syncWishlistButtons();
  }

  addToCart(productId, variant = null, quantity = 1) {
    const product = MAISON_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenVariant = variant || (product.variants ? product.variants[0] : 'Standard');
    const existingIndex = this.cart.findIndex(item => item.id === productId && item.variant === chosenVariant);

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        variant: chosenVariant,
        quantity: quantity
      });
    }

    this.saveCart();
    this.openCartDrawer();
    showToast(`Added "${product.name}" to your Beauty Bag`, 'fa-shopping-bag');
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.cart.length) {
      const removed = this.cart.splice(index, 1)[0];
      this.saveCart();
      showToast(`Removed from Beauty Bag`, 'fa-trash');
    }
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.removeFromCart(index);
      } else {
        this.saveCart();
      }
    }
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const product = MAISON_PRODUCTS.find(p => p.id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast(`Removed from your Wishlist`, 'fa-heart-broken');
    } else {
      this.wishlist.push(productId);
      if (product) {
        showToast(`Saved "${product.name}" to Wishlist`, 'fa-heart');
      }
    }
    this.saveWishlist();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateHeaderBadges() {
    const count = this.getCartCount();
    const wishCount = this.wishlist.length;

    document.querySelectorAll('#headerCartCount, #mobileCartCount').forEach(cartBadge => {
      cartBadge.textContent = count;
      cartBadge.classList.add('bump');
      setTimeout(() => cartBadge.classList.remove('bump'), 300);
    });

    document.querySelectorAll('#headerWishCount, #mobileWishCount').forEach(wishBadge => {
      wishBadge.textContent = wishCount;
    });
  }

  syncWishlistButtons() {
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
      const id = btn.getAttribute('data-product-id');
      if (id && this.isInWishlist(id)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
      }
    });
  }

  renderCartDrawer() {
    const listEl = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const progressFill = document.getElementById('shippingProgressFill');
    const progressText = document.getElementById('shippingProgressText');

    if (!listEl) return;

    const subtotal = this.getCartSubtotal();
    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Shipping progress
    if (progressFill && progressText) {
      const remaining = this.FREE_SHIPPING_THRESHOLD - subtotal;
      if (remaining <= 0) {
        progressFill.style.width = '100%';
        progressText.innerHTML = `<span>Complimentary Shipping Unlocked!</span><span>$${subtotal.toFixed(2)}</span>`;
      } else {
        const percent = Math.min(100, Math.max(0, (subtotal / this.FREE_SHIPPING_THRESHOLD) * 100));
        progressFill.style.width = `${percent}%`;
        progressText.innerHTML = `<span>Add <strong>$${remaining.toFixed(2)}</strong> for Complimentary Shipping</span><span>${Math.round(percent)}%</span>`;
      }
    }

    // Items render
    if (this.cart.length === 0) {
      listEl.innerHTML = `
        <div class="cart-empty-state">
          <i class="fas fa-shopping-bag"></i>
          <h4>Your Beauty Bag is Empty</h4>
          <p>Discover our clean botanical rituals to reveal your natural glow.</p>
          <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top: 1.25rem;">Shop Essentials</a>
        </div>
      `;
      return;
    }

    listEl.innerHTML = this.cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-variant">${item.variant}</span>
          <div class="cart-item-row">
            <div class="quantity-control" style="transform: scale(0.85); transform-origin: left center;">
              <button class="qty-btn" onclick="store.updateQuantity(${index}, -1)">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="store.updateQuantity(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="cart-remove-btn" onclick="store.removeFromCart(${index})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  openCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

const store = new MaisonStore();

// ==========================================================================
// 3. UI Toast Notification System
// ==========================================================================
function showToast(message, iconClass = 'fa-check') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas ${iconClass}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 4. Product Card Template Generator
// ==========================================================================
function createProductCardHTML(product) {
  const isWish = store.isInWishlist(product.id);
  const badgeHTML = product.badge ? `<span class="product-badge ${product.badge === 'Award Winner' ? 'badge-award' : (product.badge === 'New Launch' ? 'badge-new' : '')}">${product.badge}</span>` : '';
  const priceHTML = product.originalPrice 
    ? `<span class="current-price">$${product.price.toFixed(2)}</span><span class="original-price">$${product.originalPrice.toFixed(2)}</span>`
    : `<span class="current-price">$${product.price.toFixed(2)}</span>`;

  return `
    <div class="tilt-card-wrapper" data-product-id="${product.id}">
      <article class="product-card tilt-card" data-category="${product.category}" data-skin="${product.skinType}" data-price="${product.price}">
        <div class="card-glare"></div>
        <div class="product-thumb-wrap">
          ${badgeHTML}
          <button class="wishlist-toggle ${isWish ? 'active' : ''}" data-product-id="${product.id}" aria-label="Save to Wishlist" onclick="store.toggleWishlist('${product.id}')">
            <i class="${isWish ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-quick-actions">
            <button class="btn-quickview" onclick="openQuickView('${product.id}')">
              <i class="far fa-eye"></i> Quick View
            </button>
            <button class="btn-add-bag-icon" onclick="store.addToCart('${product.id}')" aria-label="Add to Bag">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="product-details-box">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <h3 class="product-item-title">
            <a href="product-details.html?id=${product.id}">${product.name}</a>
          </h3>
          <p class="product-short-sub">${product.shortDesc}</p>
          <div class="product-rating-box">
            <div class="star-icons">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <span>${product.rating} (${product.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <div class="price-box">
              ${priceHTML}
            </div>
            <button class="btn btn-primary btn-sm" onclick="store.addToCart('${product.id}')">
              Add to Bag
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

// ==========================================================================
// 5. 3D Card Tilt Engine
// ==========================================================================
function init3DTilt() {
  // Disable on touch screens or if reduced motion is requested
  if (window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const tiltElements = document.querySelectorAll('.tilt-card');

  tiltElements.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle, realistic tilt angles (-6deg to 6deg)
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// ==========================================================================
// 6. Quick View Modal
// ==========================================================================
function openQuickView(productId) {
  const product = MAISON_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewContent');
  if (!modal || !body) return;

  const variantsHTML = product.variants ? product.variants.map((v, i) => `
    <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${v}</button>
  `).join('') : '';

  body.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-img-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="quickview-body">
        <span class="eyebrow">${product.categoryLabel}</span>
        <h2 style="font-size: 2rem; margin-bottom: 0.75rem;">${product.name}</h2>
        <div class="product-rating-box">
          <div class="star-icons">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <span>${product.rating} (${product.reviewsCount} reviews)</span>
        </div>
        <div style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--secondary); margin-bottom: 1rem;">
          $${product.price.toFixed(2)}
        </div>
        <p style="margin-bottom: 1.5rem; font-size: 0.95rem;">${product.fullDesc}</p>
        
        <div class="variant-selector-group">
          <span class="selector-label">Select Option</span>
          <div class="size-options">
            ${variantsHTML}
          </div>
        </div>

        <div class="pdp-purchase-row" style="margin-top: 1.5rem;">
          <button class="btn btn-primary" onclick="store.addToCart('${product.id}', getSelectedVariant()); closeQuickView();" style="flex: 1;">
            Add to Bag • $${product.price.toFixed(2)}
          </button>
        </div>

        <div style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted);">
          <a href="product-details.html?id=${product.id}" style="text-decoration: underline; color: var(--secondary);">View Full Product Details & Ingredients &rarr;</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectVariant(btn) {
  btn.parentElement.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function getSelectedVariant() {
  const activeBtn = document.querySelector('.quickview-body .size-btn.active');
  return activeBtn ? activeBtn.textContent.trim() : null;
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 7. Live Search Overlay Modal
// ==========================================================================
function openSearchModal() {
  const overlay = document.getElementById('searchModalOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('liveSearchInput');
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }
}

function closeSearchModal() {
  const overlay = document.getElementById('searchModalOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResultsGrid');
  if (!container) return;

  const cleanQuery = query.toLowerCase().trim();
  const matches = cleanQuery === ''
    ? MAISON_PRODUCTS.slice(0, 6)
    : MAISON_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(cleanQuery) || 
        p.category.toLowerCase().includes(cleanQuery) || 
        p.shortDesc.toLowerCase().includes(cleanQuery)
      );

  if (matches.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No formulas found matching "${query}". Explore our skincare, makeup, or haircare collections.</div>`;
    return;
  }

  container.innerHTML = matches.map(p => `
    <div style="background: #fff; border-radius: var(--radius-sm); padding: 1.25rem; border: 1px solid var(--border-light); display: flex; gap: 1rem; align-items: center;">
      <img src="${p.image}" alt="${p.name}" style="width: 65px; height: 65px; object-fit: cover; border-radius: var(--radius-xs);" />
      <div style="flex-grow: 1;">
        <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--primary-deep); font-weight: 600;">${p.categoryLabel}</span>
        <h4 style="font-size: 1.05rem; margin: 2px 0;"><a href="product-details.html?id=${p.id}" onclick="closeSearchModal()">${p.name}</a></h4>
        <span style="font-weight: 700; color: var(--secondary); font-size: 0.9rem;">$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 8. Shop Page Catalog Filtering & Sorting
// ==========================================================================
function initShopFilters() {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;

  let currentCategory = 'all';
  let currentSkin = 'all';
  let currentSort = 'featured';
  let currentSearch = '';

  function applyFilters() {
    let list = [...MAISON_PRODUCTS];

    // Filter by Category
    if (currentCategory !== 'all') {
      list = list.filter(p => p.category === currentCategory);
    }

    // Filter by Skin Type
    if (currentSkin !== 'all') {
      list = list.filter(p => p.skinType === currentSkin || p.skinType === 'All');
    }

    // Search query
    if (currentSearch) {
      list = list.filter(p => p.name.toLowerCase().includes(currentSearch) || p.shortDesc.toLowerCase().includes(currentSearch));
    }

    // Sorting
    if (currentSort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'bestseller') {
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    const countEl = document.getElementById('shopProductCount');
    if (countEl) countEl.textContent = `Showing ${list.length} Formulations`;

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 5rem 1rem;"><h3>No matching rituals found</h3><p>Try clearing filters or search terms.</p></div>`;
      return;
    }

    grid.innerHTML = list.map(p => createProductCardHTML(p)).join('');
    init3DTilt();
    store.syncWishlistButtons();
  }

  // Category Pills Listeners
  document.querySelectorAll('.filter-pill[data-category]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill[data-category]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      applyFilters();
    });
  });

  // Skin Type Filter Listeners
  document.querySelectorAll('.skin-filter-btn[data-skin]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skin-filter-btn[data-skin]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSkin = btn.getAttribute('data-skin');
      applyFilters();
    });
  });

  // Sort Select Listener
  const sortSelect = document.getElementById('shopSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  // Search Mini Box Listener
  const searchInput = document.getElementById('shopSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Check URL parameters (e.g. ?category=makeup)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const matchingPill = document.querySelector(`.filter-pill[data-category="${catParam}"]`);
    if (matchingPill) {
      document.querySelectorAll('.filter-pill[data-category]').forEach(p => p.classList.remove('active'));
      matchingPill.classList.add('active');
      currentCategory = catParam;
    }
  }

  applyFilters();
}

// ==========================================================================
// 9. Product Details Page Interactive Setup
// ==========================================================================
function initPDP() {
  const pdpContainer = document.getElementById('pdpContainer');
  if (!pdpContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'serum-radiance';
  const product = MAISON_PRODUCTS.find(p => p.id === productId) || MAISON_PRODUCTS[0];

  // Set document title
  document.title = `${product.name} — NÉA`;

  // Gallery items
  const mainImg = document.getElementById('pdpMainImage');
  const mainWrap = document.getElementById('pdpMainWrap');
  const thumbsContainer = document.getElementById('pdpThumbs');

  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }

  // Generate 3 gallery angles using dedicated images
  let altImages = [product.image];
  if (product.id === 'serum-radiance') {
    altImages = ['assets/images/radiance-serum.webp', 'assets/images/serum-dropper-angle.webp', 'assets/images/serum-texture.webp'];
  } else {
    altImages = [product.image, 'assets/images/serum-texture.webp'];
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = altImages.map((src, i) => `
      <button class="thumb-btn ${i === 0 ? 'active' : ''}" onclick="switchPDPImage('${src}', this)">
        <img src="${src}" alt="${product.name} angle ${i + 1}" />
      </button>
    `).join('');
  }

  // Interactive Zoom Lens on Hover
  if (mainWrap && mainImg) {
    mainWrap.addEventListener('mousemove', (e) => {
      const rect = mainWrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = 'scale(1.75)';
    });

    mainWrap.addEventListener('mouseleave', () => {
      mainImg.style.transform = 'scale(1)';
    });
  }

  // Fill in content
  const titleEl = document.getElementById('pdpTitle');
  const categoryEl = document.getElementById('pdpCategory');
  const priceEl = document.getElementById('pdpPrice');
  const descEl = document.getElementById('pdpDesc');
  const ratingEl = document.getElementById('pdpRating');
  const breadcrumbEl = document.getElementById('pdpBreadcrumbTitle');
  const variantsWrap = document.getElementById('pdpVariantsWrap');

  if (titleEl) titleEl.textContent = product.name;
  if (categoryEl) categoryEl.textContent = product.categoryLabel;
  if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
  if (descEl) descEl.textContent = product.fullDesc;
  if (ratingEl) ratingEl.textContent = `${product.rating} (${product.reviewsCount} verified customer reviews)`;
  if (breadcrumbEl) breadcrumbEl.textContent = product.name;

  if (variantsWrap && product.variants) {
    variantsWrap.innerHTML = product.variants.map((v, i) => `
      <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${v}</button>
    `).join('');
  }

  // Add to bag button
  const addBtn = document.getElementById('pdpAddToBagBtn');
  if (addBtn) {
    addBtn.onclick = () => {
      const qtyEl = document.getElementById('pdpQuantity');
      const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;
      const activeVariantBtn = document.querySelector('#pdpVariantsWrap .size-btn.active');
      const variant = activeVariantBtn ? activeVariantBtn.textContent.trim() : null;
      store.addToCart(product.id, variant, qty);
    };
  }

  // Wishlist button
  const wishBtn = document.getElementById('pdpWishlistBtn');
  if (wishBtn) {
    wishBtn.onclick = () => {
      store.toggleWishlist(product.id);
      syncPDPWishlist(product.id);
    };
    syncPDPWishlist(product.id);
  }

  // Related products
  const relatedGrid = document.getElementById('pdpRelatedGrid');
  if (relatedGrid) {
    const related = MAISON_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(p => createProductCardHTML(p)).join('');
    init3DTilt();
  }
}

function changePDPQuantity(delta) {
  const el = document.getElementById('pdpQuantity');
  if (!el) return;
  const current = parseInt(el.textContent, 10) || 1;
  const next = Math.max(1, current + delta);
  el.textContent = next;
}

function syncPDPWishlist(productId) {
  const wishBtn = document.getElementById('pdpWishlistBtn');
  if (!wishBtn) return;
  if (store.isInWishlist(productId)) {
    wishBtn.classList.add('btn-primary');
    wishBtn.classList.remove('btn-secondary');
    wishBtn.innerHTML = '<i class="fas fa-heart"></i> Saved to Wishlist';
  } else {
    wishBtn.classList.add('btn-secondary');
    wishBtn.classList.remove('btn-primary');
    wishBtn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
  }
}

function switchPDPImage(src, btn) {
  const mainImg = document.getElementById('pdpMainImage');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ==========================================================================
// 10. Accordion Component
// ==========================================================================
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Close siblings if in same group
      item.parentElement.querySelectorAll('.accordion-item').forEach(sibling => {
        sibling.classList.remove('active');
        const sc = sibling.querySelector('.accordion-content');
        if (sc) sc.style.maxHeight = null;
      });

      if (!isActive && content) {
        item.classList.add('active');
        content.style.maxHeight = `${content.scrollHeight + 30}px`;
      }
    });
  });
}

// ==========================================================================
// 11. Animated Stats Counter (About Page)
// ==========================================================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);

          el.textContent = `${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

// ==========================================================================
// 12. Contact Form Real-time Validation & Feedback
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('maisonContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // Validate Full Name
    const nameInput = document.getElementById('contactName');
    if (nameInput) {
      if (nameInput.value.trim().length < 2) {
        nameInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        nameInput.parentElement.classList.remove('has-error');
      }
    }

    // Validate Email
    const emailInput = document.getElementById('contactEmail');
    if (emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        emailInput.parentElement.classList.remove('has-error');
      }
    }

    // Validate Message
    const msgInput = document.getElementById('contactMessage');
    if (msgInput) {
      if (msgInput.value.trim().length < 10) {
        msgInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        msgInput.parentElement.classList.remove('has-error');
      }
    }

    if (!hasError) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message';
        }
        showToast('Your beauty inquiry has been received. Our concierge will reply within 24 hours.', 'fa-check-circle');
      }, 1200);
    }
  });
}

// ==========================================================================
// 13. Newsletter Form
// ==========================================================================
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input.value.trim())) {
        input.value = '';
        showToast('Welcome to NÉA. Check your inbox for exclusive member benefits.', 'fa-sparkles');
      } else {
        showToast('Please enter a valid email address.', 'fa-exclamation-circle');
      }
    });
  });
}

// ==========================================================================
// 14. Mobile Menu & Navigation Toggles
// ==========================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileOverlay = document.getElementById('mobileMenuOverlay');
  const mobileClose = document.getElementById('mobileMenuClose');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileOverlay) {
    mobileClose.addEventListener('click', () => {
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Sticky header class
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Cart Drawer triggers
  const cartBtn = document.getElementById('headerCartBtn');
  const cartClose = document.getElementById('cartDrawerClose');
  const cartOverlay = document.getElementById('cartDrawerOverlay');

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.openCartDrawer();
    });
  }

  if (cartClose) {
    cartClose.addEventListener('click', () => store.closeCartDrawer());
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) store.closeCartDrawer();
    });
  }

  // Search triggers
  const searchBtn = document.getElementById('headerSearchBtn');
  const searchClose = document.getElementById('searchModalClose');
  const searchInput = document.getElementById('liveSearchInput');

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearchModal();
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearchModal);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // Wishlist icon trigger opens toast or summary
  const wishBtn = document.getElementById('headerWishBtn');
  if (wishBtn) {
    wishBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const count = store.wishlist.length;
      if (count === 0) {
        showToast('Your Wishlist is currently empty. Tap the heart on any product to save it.', 'fa-heart');
      } else {
        showToast(`You have ${count} saved formulation${count > 1 ? 's' : ''} in your Wishlist.`, 'fa-heart');
      }
    });
  }

  // Mobile drawer action buttons
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileWishBtn = document.getElementById('mobileWishBtn');
  const mobileCartBtn = document.getElementById('mobileCartBtn');

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      openSearchModal();
    });
  }

  if (mobileCartBtn) {
    mobileCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      store.openCartDrawer();
    });
  }

  if (mobileWishBtn) {
    mobileWishBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      const count = store.wishlist.length;
      if (count === 0) {
        showToast('Your Wishlist is currently empty. Tap the heart on any product to save it.', 'fa-heart');
      } else {
        showToast(`You have ${count} saved formulation${count > 1 ? 's' : ''} in your Wishlist.`, 'fa-heart');
      }
    });
  }
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const toggleBtn = () => {
    if (window.scrollY > 250) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn();

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================================================
// 15. Global Initialization on DOMContentLoaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  store.updateHeaderBadges();
  store.renderCartDrawer();
  store.syncWishlistButtons();

  initNavigation();
  init3DTilt();
  initAccordions();
  initNewsletter();
  initBackToTop();

  // Page-specific initializers
  initShopFilters();
  initPDP();
  initStatsCounter();
  initContactForm();

  // Populate Home page bestsellers grid if present
  const homeBestsellers = document.getElementById('homeBestsellersGrid');
  if (homeBestsellers) {
    const bestsellers = MAISON_PRODUCTS.slice(0, 8);
    homeBestsellers.innerHTML = bestsellers.map(p => createProductCardHTML(p)).join('');
    init3DTilt();
    store.syncWishlistButtons();
  }
});

// Switch Boutique Map (Paris vs NY)
window.switchBoutiqueMap = function(location) {
  const parisMap = document.getElementById('mapFrameParis');
  const nyMap = document.getElementById('mapFrameNY');
  const parisOverlay = document.getElementById('mapOverlayParis');
  const nyOverlay = document.getElementById('mapOverlayNY');
  const tabs = document.querySelectorAll('.map-tab-btn');

  tabs.forEach(t => t.classList.remove('active'));

  if (location === 'paris') {
    if (parisMap) parisMap.classList.add('active');
    if (nyMap) nyMap.classList.remove('active');
    if (parisOverlay) parisOverlay.style.display = 'block';
    if (nyOverlay) nyOverlay.style.display = 'none';
    if (tabs[0]) tabs[0].classList.add('active');
  } else {
    if (nyMap) nyMap.classList.add('active');
    if (parisMap) parisMap.classList.remove('active');
    if (nyOverlay) nyOverlay.style.display = 'block';
    if (parisOverlay) parisOverlay.style.display = 'none';
    if (tabs[1]) tabs[1].classList.add('active');
  }
};
