// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span')
  const quantityElement = product.querySelector('.quantity input')
  const price = priceElement.innerHTML
  const quantity = quantityElement.value
  let subtotal = price * quantity
  
  let subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  
  // ITERATION 2
  let classProduct = document.querySelectorAll('.product');
  
  let totalPrice = 0;
classProduct.forEach(function(product){
  let productTotal = updateSubtotal(product)
  totalPrice += productTotal


})

 
  // ITERATION 3
 let allPrices = document.querySelector('#total-value span')
 allPrices.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

// ITERATION 5
function createProduct() {
  let newProduct = document.querySelector('.product ');
  let createNewProduct = newProduct.cloneNode(true);
  let productName = document.querySelector('.create-product input[type="text"]').value
  let productPrice = document.querySelector('.create-product input[type="number"]').value
  createNewProduct.querySelector('.name span').textContent = productName
  createNewProduct.querySelector('.price span').textContent = productPrice
  document.querySelector('tbody').appendChild(createNewProduct)
  createNewProduct.querySelector('.btn-remove').addEventListener("click" , removeProduct)
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  let createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct);
 let removeBtns = document.querySelectorAll(".btn-remove")
 for (let i = 0; i <removeBtns.length; i++){
    removeBtns[i].addEventListener("click" , removeProduct)
 }
});
  //... your code goes here
  //select all remove btns here
  //loop through remove btns and attach eventlistener to each one - attach removeProduct function

