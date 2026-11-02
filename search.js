// Live product filtering
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  renderProducts(searchInput.value);
});
