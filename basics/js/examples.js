function fizzBuzz(number) {
  let word = "";
  if (number % 3 == 0) word += "fizz";
  if (number % 5 == 0) word += "buzz";
  return word;
}

class ShoppingCart {
  products = new Map();
  constructor(products = []) {
    this.parseProducts(products);
  }

  parseProducts(initialProducts = []) {
    initialProducts.forEach((product) => {
      this.products.set(product, 1);
    });
  }

  addProducts(...newProducts) {
    newProducts.forEach((newProduct) => {
      if (this.products.has(newProduct)) {
        this.products.set(newProduct, this.products.get(newProduct) + 1);
      } else {
        this.products.set(newProduct, 1);
      }
    });
  }
}

function notifyMeAfter(millisecods) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HELLO");
    }, millisecods);
  });
}

module.exports = {
  fizzBuzz,
  ShoppingCart,
  notifyMeAfter
};
