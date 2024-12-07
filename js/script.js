const products = [
  { id: 0, name: "Вода", brand: "Crystal", photo: "agua.jpg", price: 15.60, category: "water" },
  { id: 1, name: "Печиво Bono", brand: "Nestle", photo: "bicoito_chocolate_bono.jpg", price: 45.50, category: "product" },
  { id: 2, name: "Шоколадна плитка", brand: "Milka", photo: "barra_chocolate_milka.jpg", price: 90.30, category: "product" },
  { id: 3, name: "Кока-Кола", brand: "Coca-Cola", photo: "coca_cola_lata.jpg", price: 27.65, category: "product" },
  { id: 4, name: "Йогурт Полуничний", brand: "Nestle", photo: "iogurte.jpg", price: 70.58, category: "product" },
  { id: 5, name: "Енергетик", brand: "Monster", photo: "monster.jpg", price: 54.23, category: "product" },
  { id: 6, name: "Пиво", brand: "Львівське-Різдвяне", photo: "pivo.jpg", price: 31.52, category: "alcohol" },
  { id: 7, name: "Сигарети", brand: "Marlboro", photo: "sigara.jpg", price: 120.35, category: "cigarette" }
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

function renderProducts(filteredProducts) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ''; // Очистить старые продукты

  filteredProducts.forEach((product) => {
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

// Фильтрация продуктов по категории
function filterProducts(category) {
  let filteredProducts;
  
  if (category === 'all') {
    filteredProducts = products; // Все товары
  } else {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  renderProducts(filteredProducts);
}

// Инициализация отображения всех продуктов при загрузке страницы
renderProducts(products);
