const result = document.querySelector (".result")
const API = "https://dummyjson.com/products"
async function getProducts() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    showProducts(data.products);
    console.log(data);
    
  } catch (error) {
    result.innerHTML = "not founded 404";
  }
}

function showProducts(list) {
  result.innerHTML = list.map(item => {
    return `
      <div class="card">
        <img src="${item.thumbnail}" alt="${item.title}">
        <button class="add-to-cart">ADD TO CART</button>
        <p class="category">${item.brand}</p>
        <p class="title">${item.category}</p>
        <p class="price">$${item.price}</p>
      </div>
    `
  }).join("");
}

getProducts();

