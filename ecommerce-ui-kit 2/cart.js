// Cart module & global state (Student 2)
const cartState = { items: [] };

function loadCart() {
  try {
    cartState.items = JSON.parse(localStorage.getItem("cart") || "[]");
  } catch (e) {
    cartState.items = [];
  }
}

function saveCart() {
  try { localStorage.setItem("cart", JSON.stringify(cartState.items)); } catch (e) {}
}

function addToCart(id) {
  const item = cartState.items.find(i => i.id === id);
  if (item) { item.qty++; } else { cartState.items.push({ id: id, qty: 1 }); }
  updateCart();
}

function removeFromCart(id) {
  cartState.items = cartState.items.filter(i => i.id !== id);
  updateCart();
}

function clearCart() {
  cartState.items = [];
  updateCart();
}

function getCartCount() {
  return cartState.items.reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return cartState.items.reduce((sum, i) => {
    const p = products.find(x => x.id === i.id);
    return sum + p.price * i.qty;
  }, 0);
}

function updateCart() {
  saveCart();
  document.getElementById("cart-count").textContent = getCartCount();

  const rows = cartState.items.map(i => {
    const p = products.find(x => x.id === i.id);
    return `
      <li class="cart-item">
        <span>${p.title} × ${i.qty}</span>
        <span>$${(p.price * i.qty).toFixed(2)}
          <button class="remove-btn" data-id="${p.id}" aria-label="Remove">✕</button>
        </span>
      </li>`;
  });

  document.getElementById("cart-items").innerHTML =
    rows.length ? rows.join("") : '<li class="cart-empty">Your cart is empty.</li>';
  document.getElementById("cart-total").textContent = "$" + getCartTotal().toFixed(2);
}

document.addEventListener("click", e => {
  if (e.target.matches(".btn-add")) {
    addToCart(Number(e.target.dataset.id));
  } else if (e.target.matches(".remove-btn")) {
    removeFromCart(Number(e.target.dataset.id));
  } else if (e.target.closest("#cart-btn")) {
    document.getElementById("cart-panel").classList.toggle("hidden");
  } else if (e.target.matches("#close-cart")) {
    document.getElementById("cart-panel").classList.add("hidden");
  } else if (e.target.matches("#clear-cart")) {
    clearCart();
  }
});

loadCart();
updateCart();
