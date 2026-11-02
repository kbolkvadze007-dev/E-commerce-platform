// Global configuration for the E-Commerce UI Kit
const APP_NAME = "E-Commerce UI Kit";

const products = [
  { id: 1, title: "Wireless Headphones", price: 49.99, icon: "🎧" },
  { id: 2, title: "Smart Watch", price: 89.0, icon: "⌚" },
  { id: 3, title: "Laptop Backpack", price: 34.5, icon: "🎒" },
  { id: 4, title: "Running Shoes", price: 72.0, icon: "👟" },
  { id: 5, title: "Digital Camera", price: 259.0, icon: "📷" },
  { id: 6, title: "Baseball Cap", price: 15.0, icon: "🧢" }
];

function renderProducts(filter = "") {
  const app = document.getElementById("app");
  const q = filter.trim().toLowerCase();
  const list = products.filter(p => p.title.toLowerCase().includes(q));

  if (list.length === 0) {
    app.innerHTML = '<p class="empty">No products found.</p>';
    return;
  }

  app.innerHTML = list.map(p => `
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
