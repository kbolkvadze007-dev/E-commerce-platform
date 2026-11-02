// Shopping cart: add / remove / clear, saved in localStorage
let cart = [];
try { cart = JSON.parse(localStorage.getItem("cart") || "[]"); } catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem("cart", JSON.stringify(cart)); } catch (e) {}
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) { item.qty++; } else { cart.push({ id: id, qty: 1 }); }
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function updateCart() {
  saveCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cart-count").textContent = count;

  let total = 0;
  const rows = cart.map(i => {
    const p = products.find(x => x.id === i.id);
    total += p.price * i.qty;
    return `
      <li class="cart-item">
        <span>${p.icon} ${p.title} × ${i.qty}</span>
        <span>$${(p.price * i.qty).toFixed(2)}
          <button class="remove-btn" data-id="${p.id}" aria-label="Remove">✕</button>
        </span>
      </li>`;
  });

  document.getElementById("cart-items").innerHTML =
    rows.length ? rows.join("") : '<li class="cart-empty">Your cart is empty.</li>';
  document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
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
    cart = [];
    updateCart();
  }
});

updateCart();
