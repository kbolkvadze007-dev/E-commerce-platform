// Global configuration for the E-Commerce UI Kit
const APP_NAME = "E-Commerce UI Kit";

const products = [
  { id: 1, title: "Wireless Headphones", price: 49.99, icon: "🎧" },
  { id: 2, title: "Smart Watch", price: 89.0, icon: "⌚" },
  { id: 3, title: "Laptop Backpack", price: 34.5, icon: "🎒" }
];

function renderProducts() {
  const app = document.getElementById("app");
  app.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-image">${p.icon}</div>
      <h3 class="product-title">${p.title}</h3>
      <p class="product-price">$${p.price.toFixed(2)}</p>
      <button class="btn-add" data-id="${p.id}">Add to cart</button>
    </div>
  `).join("");
}

renderProducts();
console.log(APP_NAME + " loaded");
