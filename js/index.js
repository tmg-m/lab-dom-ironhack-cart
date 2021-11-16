// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const calcSubtotal = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = calcSubtotal;
  return calcSubtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let sum = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let removeBtns = document.querySelector(".btn-remove")
  document.addEventListener("click",() => {
    target.parentNode.parentNode.remove();
  });
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  let removeBtn = document.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct); 
});
