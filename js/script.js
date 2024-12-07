const products = [
  { id: 0, name: "Вода", brand: "Crystal", photo: "agua.jpg", price: 2 },
  { id: 1, name: "Печиво Bono", brand: "Nestle", photo: "bicoito_chocolate_bono.jpg", price: 3.5 },
  { id: 2, name: "Шоколадна плитка", brand: "Milka", photo: "barra_chocolate_milka.jpg", price: 6 },
  { id: 3, name: "Кока-Кола", brand: "Coca-Cola", photo: "coca_cola_lata.jpg", price: 3 },
  { id: 4, name: "Йогурт Полуничний", brand: "Nestle", photo: "iogurte.jpg", price: 4.2 },
  { id: 5, name: "Енергетик", brand: "Monster", photo: "monster.jpg", price: 7 },
];

let cart = [];

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const totalPrice = document.getElementById("totalPrice");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}₴`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Загальна сума: ${total.toFixed(2)}₴`;
}

function clearCart() {
  cart = [];
  updateCart();
}

function renderProducts() {
  const productList = document.getElementById("productList");
  products.forEach((product) => {
    const productCard = `
      <div class="product-card">
        <img src="./images/${product.photo}" alt="${product.name}" />
        <h3 class="product-name">${product.name}</h3>
        <p>${product.brand}</p>
        <p class="product-price">${product.price}₴</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Купити</button>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

renderProducts();