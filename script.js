// Importing module
/* 
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('Apple', 4);
// console.log(price, qt);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);

console.log(cart);

// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


import shoppingCart from './shoppingCart';
*/
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered  from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.shippingCost);
