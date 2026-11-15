(function () {
  var CATS = ['Breakfast', 'Rice & Beans', 'Staples & Soups', 'Snacks & Sides', 'Drinks'];
  var ITEMS = [
    { id: 'koko', cat: 'Breakfast', name: 'Hausa Koko & Koose', desc: 'Spiced millet porridge with crisp black-eyed pea fritters.', price: 12, tags: ['Veg'], art: ['#E3CFA5', '#B8742E', '#8A4B1E'] },
    { id: 'teabread', cat: 'Breakfast', name: 'Tea Bread & Egg', desc: 'Buttered bread, a fried egg and a hot cup of tea.', price: 15, tags: [], art: ['#EFD9A0', '#F4C542', '#9A6A2F'] },
    { id: 'oats', cat: 'Breakfast', name: 'Tom Brown Porridge', desc: 'Roasted corn and groundnut porridge, lightly sweetened.', price: 10, tags: ['Veg'], art: ['#A9703F', '#E8C98E', '#6E4220'] },

    { id: 'waakye', cat: 'Rice & Beans', name: 'Waakye Special', desc: 'Rice and beans with spaghetti, gari, egg, fried plantain, shito and stew.', price: 30, tags: ['Spicy'], art: ['#7A4632', '#F4E6B5', '#C23B22'] },
    { id: 'jollof', cat: 'Rice & Beans', name: 'Jollof & Chicken', desc: 'Smoky tomato jollof rice with a fried chicken piece and coleslaw.', price: 35, tags: [], art: ['#D2491F', '#F1A24A', '#7A3A1C'] },
    { id: 'friedrice', cat: 'Rice & Beans', name: 'Fried Rice & Chicken', desc: 'Rice stir-fried with carrots, peas and spring onions, with grilled chicken.', price: 35, tags: [], art: ['#D4B25A', '#5E8C3A', '#7A3A1C'] },
    { id: 'redred', cat: 'Rice & Beans', name: 'Red Red & Fried Plantain', desc: 'Black-eyed pea stew in palm oil, ripe plantain and fried fish.', price: 28, tags: [], art: ['#B5381F', '#F0C23C', '#8B5A2B'] },
    { id: 'kontomire', cat: 'Rice & Beans', name: 'Plain Rice & Kontomire Stew', desc: 'Steamed rice with cocoyam leaf stew, boiled egg and smoked fish.', price: 25, tags: [], art: ['#F4EFE2', '#3F7A3A', '#B8741F'] },

    { id: 'bankutilapia', cat: 'Staples & Soups', name: 'Banku & Tilapia', desc: 'Fermented corn and cassava dough with grilled tilapia, pepper and onions.', price: 55, tags: ['Spicy'], art: ['#EFE6D0', '#B97F3C', '#C23B22'] },
    { id: 'bankuokro', cat: 'Staples & Soups', name: 'Banku & Okro Stew', desc: 'Banku with a rich okro stew cooked with smoked fish and crab.', price: 30, tags: [], art: ['#EFE6D0', '#5B8A3A', '#B5381F'] },
    { id: 'fufulight', cat: 'Staples & Soups', name: 'Fufu & Light Soup', desc: 'Pounded cassava and plantain in peppery tomato soup with goat meat.', price: 45, tags: ['Spicy'], art: ['#F4EDE0', '#C9722F', '#8A4B1E'] },
    { id: 'fufuground', cat: 'Staples & Soups', name: 'Fufu & Groundnut Soup', desc: 'Pounded fufu with creamy peanut soup and chicken.', price: 45, tags: [], art: ['#F4EDE0', '#A5642C', '#6E3B17'] },
    { id: 'omotuo', cat: 'Staples & Soups', name: 'Omo Tuo & Palm Nut Soup', desc: 'Soft rice balls served with palm nut soup, meat and fish.', price: 40, tags: [], art: ['#F6F0E4', '#B8521F', '#7A3A1C'] },
    { id: 'tz', cat: 'Staples & Soups', name: 'Tuo Zaafi & Ayoyo', desc: 'Northern millet dough with jute leaf soup and guinea fowl.', price: 30, tags: [], art: ['#EAE0C8', '#3F7A3A', '#B8741F'] },
    { id: 'kenkey', cat: 'Staples & Soups', name: 'Kenkey & Fried Fish', desc: 'Ga kenkey with fried fish, hot pepper sauce and shito.', price: 35, tags: ['Spicy'], art: ['#E9DFC4', '#B97F3C', '#C23B22'] },

    { id: 'kelewele', cat: 'Snacks & Sides', name: 'Kelewele', desc: 'Ripe plantain cubes fried with ginger, pepper and cloves.', price: 15, tags: ['Spicy', 'Veg'], art: ['#E0A526', '#8A4B1E', '#C23B22'] },
    { id: 'bofrot', cat: 'Snacks & Sides', name: 'Bofrot (3 pieces)', desc: 'Golden fried dough balls, soft inside and lightly sweet.', price: 10, tags: ['Veg'], art: ['#D9A04F', '#F0CE8C', '#8A4B1E'] },
    { id: 'meatpie', cat: 'Snacks & Sides', name: 'Meat Pie', desc: 'Flaky pastry filled with seasoned minced beef and potato.', price: 12, tags: [], art: ['#D9A65E', '#B07A36', '#7A4A1C'] },
    { id: 'friedyam', cat: 'Snacks & Sides', name: 'Fried Yam & Shito', desc: 'Crisp fried yam wedges with black pepper sauce.', price: 20, tags: ['Spicy'], art: ['#E8C25A', '#F6E3A2', '#C23B22'] },
    { id: 'chicken', cat: 'Snacks & Sides', name: 'Extra Chicken (1 piece)', desc: 'A seasoned, fried chicken piece to add to any meal.', price: 15, tags: [], art: ['#C77A2E', '#E3A04D', '#7A3A1C'] },
    { id: 'egg', cat: 'Snacks & Sides', name: 'Boiled Egg', desc: 'One boiled egg, a classic extra for waakye and rice.', price: 5, tags: ['Veg'], art: ['#F6F0E0', '#F2C94C', '#C9B58A'] },

    { id: 'sobolo', cat: 'Drinks', name: 'Sobolo', desc: 'Chilled hibiscus drink spiced with ginger and cloves.', price: 8, tags: [], art: ['#8E1B3A', '#FFFFFF', '#C23B22'] },
    { id: 'asaana', cat: 'Drinks', name: 'Asaana', desc: 'Lightly sweet spiced corn drink, served cold.', price: 8, tags: [], art: ['#C9B27A', '#FFFFFF', '#8A4B1E'] },
    { id: 'gingerlemon', cat: 'Drinks', name: 'Ginger & Lemon', desc: 'Fresh ginger and lemon, sharp and refreshing.', price: 8, tags: [], art: ['#E8D35B', '#FFFFFF', '#5E8C3A'] },
    { id: 'pineapple', cat: 'Drinks', name: 'Fresh Pineapple Juice', desc: 'Pressed daily from ripe local pineapples.', price: 12, tags: [], art: ['#F2C84B', '#FFFFFF', '#5E8C3A'] },
    { id: 'coconut', cat: 'Drinks', name: 'Coconut Water', desc: 'Straight from the coconut, served chilled.', price: 10, tags: [], art: ['#F3EFDF', '#FFFFFF', '#8BAE6B'] },
    { id: 'water', cat: 'Drinks', name: 'Bottled Water', desc: 'Cold 500 ml bottled water.', price: 3, tags: [], art: ['#A9D3EA', '#FFFFFF', '#5B8FB5'] }
  ];
  var KEY = 'akwaaba-cart-v1';
  var SLOTS = ['07:30', '08:00', '10:00', '12:30', '12:45', '13:00', '13:15', '13:30', '14:00'];

  function $(s) { return document.querySelector(s); }
  var byId = {};
  ITEMS.forEach(function (i) { byId[i.id] = i; });
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function fmt(n) { return 'GH₵ ' + n.toFixed(2); }
  function t12(t) { var p = t.split(':'), h = +p[0]; return (h % 12 || 12) + ':' + p[1] + ' ' + (h >= 12 ? 'pm' : 'am'); }

  var cart = {};
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var o = JSON.parse(raw);
      Object.keys(o).forEach(function (k) {
        if (byId[k] && Number.isInteger(o[k]) && o[k] > 0) cart[k] = Math.min(o[k], 20);
      });
    }
  } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} }

  /* plate and glass illustrations */
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function art(it) {
    var c = it.art, s = hash(it.id), out = '';
    function r() { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }
    if (it.cat === 'Drinks') {
      return '<svg viewBox="0 0 120 96" role="img" aria-label="' + esc(it.name) + '">' +
        '<path d="M40 30 H80 L76 80 Q75.5 86 69.5 86 H50.5 Q44.5 86 44 80 Z" fill="' + c[0] + '"/>' +
        '<rect x="50" y="40" width="12" height="12" rx="2" transform="rotate(-12 56 46)" fill="#fff" opacity=".35"/>' +
        '<rect x="62" y="56" width="11" height="11" rx="2" transform="rotate(14 67 61)" fill="#fff" opacity=".3"/>' +
        '<path class="glass" d="M38 18 H82 L76 80 Q75.5 86 69.5 86 H50.5 Q44.5 86 44 80 Z"/>' +
        '<line x1="72" y1="8" x2="64" y2="54" stroke="' + c[2] + '" stroke-width="4" stroke-linecap="round"/></svg>';
    }
    out += '<circle class="rim" cx="60" cy="48" r="44"/><circle class="inner" cx="60" cy="48" r="35"/>';
    out += '<ellipse cx="52" cy="52" rx="24" ry="19" fill="' + c[0] + '"/>';
    out += '<ellipse cx="46" cy="46" rx="12" ry="7" fill="#fff" opacity=".18"/>';
    for (var i = 0; i < 6; i++) {
      var a = r() * 6.283, d = 8 + r() * 22;
      out += '<circle cx="' + (50 + Math.cos(a) * d).toFixed(1) + '" cy="' + (52 + Math.sin(a) * d * 0.7).toFixed(1) + '" r="' + (1.2 + r() * 1.4).toFixed(1) + '" fill="' + c[2] + '" opacity=".55"/>';
    }
    for (var j = 0; j < 5; j++) {
      out += '<circle cx="' + (76 + r() * 12).toFixed(1) + '" cy="' + (30 + j * 9 + r() * 4).toFixed(1) + '" r="' + (4 + r() * 3).toFixed(1) + '" fill="' + c[1] + '"/>';
    }
    out += '<rect x="26" y="26" width="22" height="13" rx="5" transform="rotate(-18 37 32)" fill="' + c[2] + '"/>';
    return '<svg viewBox="0 0 120 96" role="img" aria-label="' + esc(it.name) + '">' + out + '</svg>';
  }

  /* menu */
  function ctl(id) {
    var q = cart[id] || 0, n = esc(byId[id].name);
    if (!q) return '<button class="btn btn-sm" type="button" data-act="add" data-id="' + id + '" aria-label="Add ' + n + ' to order">Add</button>';
    return '<div class="step" role="group" aria-label="' + n + ' quantity">' +
      '<button type="button" data-act="dec" data-id="' + id + '" aria-label="Remove one ' + n + '">−</button>' +
      '<span class="q">' + q + '</span>' +
      '<button type="button" data-act="inc" data-id="' + id + '" aria-label="Add one ' + n + '">+</button></div>';
  }
  function card(i) {
    var tags = i.tags.length ? '<div class="tags">' + i.tags.map(function (t) {
      return '<span class="tag' + (t === 'Spicy' ? ' spicy' : '') + '">' + (t === 'Veg' ? 'Vegetarian' : t) + '</span>';
    }).join('') + '</div>' : '';
    return '<article class="card" data-id="' + i.id + '"><div class="art">' + art(i) + '</div><div class="cbody"><h4>' + esc(i.name) + '</h4><p class="desc">' + esc(i.desc) + '</p>' + tags +
      '<div class="cfoot"><span class="price">' + fmt(i.price) + '</span><span class="ctl">' + ctl(i.id) + '</span></div></div></article>';
  }
  var filter = 'All';
  function renderMenu() {
    $('#menu-list').innerHTML = CATS.map(function (c) {
      return '<section class="cat" data-cat="' + esc(c) + '"><h3>' + esc(c) + '</h3><div class="grid">' +
        ITEMS.filter(function (i) { return i.cat === c; }).map(card).join('') + '</div></section>';
    }).join('');
    applyFilter();
  }
  function applyFilter() {
    document.querySelectorAll('.cat').forEach(function (s) { s.hidden = !(filter === 'All' || s.dataset.cat === filter); });
    document.querySelectorAll('.chip').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.cat === filter)); });
  }
  $('#chips').innerHTML = ['All'].concat(CATS).map(function (c) {
    return '<button class="chip" type="button" data-cat="' + esc(c) + '" aria-pressed="false">' + esc(c) + '</button>';
  }).join('');
  $('#chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    filter = b.dataset.cat; applyFilter();
  });

  /* price list */
  $('#board').innerHTML = CATS.map(function (c) {
    return '<div class="pl"><h3>' + esc(c) + '</h3>' + ITEMS.filter(function (i) { return i.cat === c; }).map(function (i) {
      return '<div class="row"><span class="n">' + esc(i.name) + '</span><span class="dots" aria-hidden="true"></span><span class="p">' + fmt(i.price) + '</span></div>';
    }).join('') + '</div>';
  }).join('');

  /* hero plates */
  $('#hero-plates').innerHTML = ['jollof', 'waakye', 'bankutilapia'].map(function (id) {
    return '<figure>' + art(byId[id]) + '<figcaption>' + esc(byId[id].name) + '</figcaption></figure>';
  }).join('');

  /* cart */
  function count() { return Object.keys(cart).reduce(function (a, k) { return a + cart[k]; }, 0); }
  function total() { return Object.keys(cart).reduce(function (a, k) { return a + cart[k] * byId[k].price; }, 0); }
  var cartEl = $('#cart'), scrim = $('#scrim'), lastFocus = null;

  function renderLines() {
    var ids = Object.keys(cart);
    $('#empty').hidden = ids.length > 0;
    $('#has-items').hidden = ids.length === 0;
    $('#cart-lines').innerHTML = ids.map(function (id) {
      var it = byId[id], q = cart[id];
      return '<li class="line"><span class="l-name">' + esc(it.name) + '</span><span class="l-total">' + fmt(it.price * q) + '</span>' +
        '<span class="l-unit">' + fmt(it.price) + ' each</span>' +
        '<div class="step" role="group" aria-label="' + esc(it.name) + ' quantity">' +
        '<button type="button" data-act="dec" data-id="' + id + '" aria-label="Remove one ' + esc(it.name) + '">−</button>' +
        '<span class="q">' + q + '</span>' +
        '<button type="button" data-act="inc" data-id="' + id + '" aria-label="Add one ' + esc(it.name) + '">+</button></div></li>';
    }).join('');
    $('#cart-total').textContent = fmt(total());
    $('#place').textContent = 'Place pre-order · ' + fmt(total());
  }
  function sync(id) {
    var card = id && document.querySelector('.card[data-id="' + id + '"] .ctl');
    if (card) card.innerHTML = ctl(id);
    var n = count();
    $('#cart-count').textContent = n;
    $('#bar').hidden = n === 0 || !cartEl.hidden;
    $('#bar-left').textContent = 'View order · ' + n + (n === 1 ? ' item' : ' items');
    $('#bar-total').textContent = fmt(total());
    renderLines();
    save();
  }
  function change(id, d) {
    var q = Math.max(0, Math.min(20, (cart[id] || 0) + d));
    if (q) cart[id] = q; else delete cart[id];
    sync(id);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var id = b.dataset.id, a = b.dataset.act, root = b.closest('.card, #cart-lines');
    change(id, a === 'dec' ? -1 : 1);
    if (root) {
      var f = root.querySelector('[data-act="' + (a === 'add' ? 'inc' : a) + '"][data-id="' + id + '"]') || root.querySelector('[data-act="add"][data-id="' + id + '"]');
      if (f) f.focus();
    }
  });

  /* drawer */
  function openCart() {
    lastFocus = document.activeElement;
    cartEl.hidden = false; scrim.hidden = false; $('#bar').hidden = true;
    document.body.style.overflow = 'hidden';
    $('#close-cart').focus();
  }
  function closeCart() {
    cartEl.hidden = true; scrim.hidden = true;
    document.body.style.overflow = '';
    sync();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $('#open-cart').addEventListener('click', openCart);
  $('#bar-btn').addEventListener('click', openCart);
  $('#close-cart').addEventListener('click', closeCart);
  scrim.addEventListener('click', closeCart);
  $('#browse').addEventListener('click', function () { closeCart(); location.hash = 'menu'; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !cartEl.hidden) closeCart(); });
  cartEl.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var f = Array.prototype.filter.call(cartEl.querySelectorAll('button, input, select, textarea, a[href]'), function (x) { return !x.disabled && x.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* form defaults */
  function pad(n) { return String(n).padStart(2, '0'); }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  var today = new Date(), next = new Date();
  do { next.setDate(next.getDate() + 1); } while (next.getDay() === 0 || next.getDay() === 6);
  $('#f-date').min = iso(today);
  $('#f-date').value = iso(next);
  $('#f-time').innerHTML = SLOTS.map(function (t) { return '<option value="' + t + '"' + (t === '12:45' ? ' selected' : '') + '>' + t12(t) + '</option>'; }).join('');

  var lastText = '';
  $('#order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#f-name').value.trim();
    var phone = $('#f-phone').value.replace(/[\s-]/g, '').replace(/^\+?233/, '0');
    var date = $('#f-date').value;
    var ok = true;
    $('#e-name').textContent = ''; $('#e-phone').textContent = ''; $('#e-date').textContent = '';
    if (name.length < 2) { $('#e-name').textContent = 'Enter your name.'; ok = false; }
    if (!/^0\d{9}$/.test(phone)) { $('#e-phone').textContent = 'Enter a 10-digit phone number, like 024 123 4567.'; ok = false; }
    if (!date || date < iso(today)) { $('#e-date').textContent = 'Choose today or a later day.'; ok = false; }
    if (!ok) { var bad = document.querySelector('#order-form .err:not(:empty)'); if (bad) bad.parentNode.querySelector('input').focus(); return; }
    if (!Object.keys(cart).length) return;

    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', code = 'AK-';
    for (var i = 0; i < 4; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    var when = new Date(date + 'T00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + t12($('#f-time').value);
    var pay = document.querySelector('input[name="pay"]:checked').value;
    var note = $('#f-note').value.trim() || 'None';
    var lines = Object.keys(cart).map(function (id) { return { n: cart[id] + ' × ' + byId[id].name, p: fmt(byId[id].price * cart[id]) }; });
    var tot = fmt(total());

    $('#s-code').textContent = code;
    $('#s-name').textContent = name;
    $('#s-phone').textContent = phone;
    $('#s-when').textContent = when;
    $('#s-pay').textContent = pay + ' at the counter';
    $('#s-note').textContent = note;
    $('#s-items').innerHTML = '';
    lines.forEach(function (l) {
      var li = document.createElement('li');
      var a = document.createElement('span'), b = document.createElement('span');
      a.textContent = l.n; b.textContent = l.p;
      li.appendChild(a); li.appendChild(b);
      $('#s-items').appendChild(li);
    });
    $('#s-total').textContent = tot;
    lastText = 'Akwaaba Canteen pre-order ' + code + '\nName: ' + name + '\nPhone: ' + phone + '\nPickup: ' + when + '\nPayment: ' + pay + ' at the counter\nNotes: ' + note + '\n' +
      lines.map(function (l) { return l.n + ' - ' + l.p; }).join('\n') + '\nTotal: ' + tot;

    cart = {}; save();
    renderMenu(); sync();
    $('#cart-view').hidden = true; $('#done-view').hidden = false;
    $('#cart-title').textContent = 'Order placed';
    $('.dr-body').scrollTop = 0;
    $('#copy').focus();
  });

  $('#copy').addEventListener('click', function () {
    var btn = this;
    function reset() { setTimeout(function () { btn.textContent = 'Copy order details'; }, 2200); }
    function fallback() {
      var rg = document.createRange(); rg.selectNodeContents($('#slip'));
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(rg);
      btn.textContent = 'Selected. Press copy on your device.'; reset();
    }
    try {
      navigator.clipboard.writeText(lastText).then(function () { btn.textContent = 'Copied'; reset(); }, fallback);
    } catch (err) { fallback(); }
  });
  $('#again').addEventListener('click', function () {
    $('#done-view').hidden = true; $('#cart-view').hidden = false;
    $('#cart-title').textContent = 'Your order';
    closeCart();
    location.hash = 'menu';
  });

  renderMenu();
  sync();
})();