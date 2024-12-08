// Массив для продуктов
const products = [
  { id: 0, name: "Вода", brand: "Crystal", photo: "agua.jpg", price: 15.60, category: "water", description: "Чистая питьевая вода.", weight: 1000, year: 2024, stock: 50 },
  { id: 1, name: "Печиво Bono", brand: "Nestle", photo: "bicoito_chocolate_bono.jpg", price: 45.50, category: "product", description: "Вкусное шоколадное печенье.", weight: 250, year: 2023, stock: 30 },
  { id: 2, name: "Шоколадна плитка", brand: "Milka", photo: "barra_chocolate_milka.jpg", price: 90.30, category: "product", description: "Плитка молочного шоколада.", weight: 200, year: 2023, stock: 20 },
  { id: 3, name: "Кока-Кола", brand: "Coca-Cola", photo: "coca_cola_lata.jpg", price: 27.65, category: "product", description: "Газированный напиток.", weight: 500, year: 2024, stock: 100 },
  { id: 4, name: "Йогурт Полуничний", brand: "Nestle", photo: "iogurte.jpg", price: 70.58, category: "product", description: "Йогурт с клубничным вкусом.", weight: 150, year: 2023, stock: 10 },
  { id: 5, name: "Енергетик", brand: "Monster", photo: "monster.jpg", price: 54.23, category: "product", description: "Энергетический напиток.", weight: 500, year: 2023, stock: 5 },
  { id: 6, name: "Пиво", brand: "Львівське-Різдвяне", photo: "pivo.jpg", price: 31.52, category: "alcohol", description: "Пиво, рождественский вкус.", weight: 600, year: 2024, stock: 20 },
  { id: 7, name: "Сигарети", brand: "Marlboro", photo: "sigara.jpg", price: 120.00, category: "cigarette", description: "Классические сигареты.", weight: 20, year: 2022, stock: 50 },
  { id: 8, name: "Чіпси Lay's", brand: "Lay's", photo: "chips.jpg", price: 50.00, category: "product", description: "Картофельные чипсы Lay's.", weight: 150, year: 2023, stock: 100 },
  { id: 9, name: "Молоко", brand: "Тёма", photo: "milk.jpg", price: 30.00, category: "product", description: "Молоко Тёма.", weight: 1000, year: 2024, stock: 200 },
  { id: 10, name: "Крекери", brand: "Славія", photo: "crackers.jpg", price: 40.00, category: "product", description: "Солёные крекеры Славія.", weight: 250, year: 2023, stock: 75 },
  { id: 11, name: "Пельмені", brand: "Московські", photo: "dumplings.jpg", price: 75.00, category: "product", description: "Пельмени с мясом.", weight: 500, year: 2023, stock: 10 },
  { id: 12, name: "Сир", brand: "Деревенський", photo: "cheese.jpg", price: 95.00, category: "product", description: "Твердый сыр с деревенским вкусом.", weight: 200, year: 2023, stock: 50 },
  { id: 13, name: "Сигарети", brand: "Winston", photo: "winston.jpg", price: 130.00, category: "cigarette", description: "Сигареты Winston.", weight: 20, year: 2022, stock: 40 },
  { id: 14, name: "Сигарети", brand: "Kent", photo: "kent.jpg", price: 110.00, category: "cigarette", description: "Сигареты Kent.", weight: 20, year: 2022, stock: 30 },
  { id: 15, name: "Сигарети", brand: "Pall Mall", photo: "pallmall.jpg", price: 125.00, category: "cigarette", description: "Сигареты Pall Mall.", weight: 20, year: 2022, stock: 25 },
  { id: 16, name: "Сигарети", brand: "Parliament", photo: "parliament.jpg", price: 140.00, category: "cigarette", description: "Сигареты Parliament.", weight: 20, year: 2022, stock: 20 },
  { id: 17, name: "Сигарети", brand: "L&M", photo: "lm.jpg", price: 115.00, category: "cigarette", description: "Сигареты L&M.", weight: 20, year: 2022, stock: 30 },
  { id: 18, name: "Вино", brand: "Мускат", photo: "wine.jpg", price: 250.00, category: "alcohol", description: "Вино Мускат.", weight: 750, year: 2023, stock: 15 },
  { id: 19, name: "Вино", brand: "Сангрія", photo: "sangria.jpg", price: 230.00, category: "alcohol", description: "Вино Сангрія."},
  { id: 20, name: "Віскі", brand: "Jameson", photo: "whiskey.jpg", price: 350.00, category: "alcohol", description: "Виски Jameson."},
  { id: 21, name: "Пиво", brand: "Obolon", photo: "obolon.jpg", price: 25.00, category: "alcohol", description: "Пиво Obolon."},
  { id: 22, name: "Коньяк", brand: "Армянський", photo: "cognac.jpg", price: 450.00, category: "alcohol", description: "Коньяк армянский."},
  { id: 23, name: "Мінеральна вода", brand: "Borjomi", photo: "borjomi.jpg", price: 35.00, category: "water", description: "Минеральная вода Borjomi."},
  { id: 24, name: "Газована вода", brand: "Sprite", photo: "sprite.jpg", price: 18.00, category: "water", description: "Газированная вода Sprite."},
  { id: 25, name: "Вода", brand: "Evian", photo: "evian.jpg", price: 40.00, category: "water", description: "Вода Evian."},
  { id: 26, name: "Вода", brand: "Aqua Minerale", photo: "aqua_minerale.jpg", price: 28.00, category: "water", description: "Вода Aqua Minerale."},
  { id: 27, name: "Вода", brand: "Fanta", photo: "fanta.jpg", price: 20.00, category: "water", description: "Газированная вода Fanta."},
];


let cart = [];


function displayProducts(productsToShow) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; 

  productsToShow.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="./images/${product.photo}" alt="${product.name}" />
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}₴</p>
      <button class="add-to-cart" onclick="addToCart(${product.id})">Додати в кошик</button>
    `;
    productList.appendChild(productCard);
  });
}

function filterProducts(category) {

  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });


  const selectedTab = document.querySelector(`.tab-content.${category}`);
  selectedTab.classList.add('active');

 
  const allButtons = document.querySelectorAll('.tab');
  allButtons.forEach(button => {
    button.classList.remove('active');
  });


  const activeButton = document.querySelector(`.tab[data-category="${category}"]`);
  activeButton.classList.add('active');


  let filteredProducts = [];

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => product.category === category);
  }

  displayProducts(filteredProducts);
}


document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      filterProducts(category);
    });
  });

 
  filterProducts('all');
});



function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
}


function removeFromCart(productId) {
  const cartItemIndex = cart.findIndex(item => item.id === productId);
  if (cartItemIndex !== -1) {
    cart.splice(cartItemIndex, 1);
    updateCartDisplay();
  }
}


function updateCartDisplay() {
  const cartList = document.getElementById("cartList");
  const totalPriceElem = document.getElementById("totalPrice");
  const cartQuantityElem = document.getElementById("cartQuantity");

  cartList.innerHTML = "";
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      
      <div>
        <h4>${item.name}</h4>
        <p>Кількість: ${item.quantity}</p>
        <p>Ціна: ${item.price * item.quantity}₴</p>
        <button onclick="removeFromCart(${item.id})">Видалити</button>
      </div>
    `;
    cartList.appendChild(cartItem);
  });

  cartQuantityElem.textContent = cart.length;
  totalPriceElem.textContent = `Всього: ${totalPrice}₴`;
}


document.addEventListener('DOMContentLoaded', () => {

  displayProducts(products);
});
