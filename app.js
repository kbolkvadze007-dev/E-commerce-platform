// Global configuration for the E-Commerce UI Kit
const APP_NAME = "E-Commerce UI Kit";

const products = [
  { title: "Wireless Headphones", price: "$49.99" },
  { title: "Smart Watch", price: "$89.00" },
  { title: "Laptop Backpack", price: "$34.50" }
];

function renderProducts() {
  const app = document.getElementById("app");
  app.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-image">IMG</div>
      <h3 class="product-title">${p.title}</h3>
      <p class="product-price">${p.price}</p>
      <button class="btn-add">Add to cart</button>
    </div>
  `).join("");
}

renderProducts();
console.log(APP_NAME + " loaded");
