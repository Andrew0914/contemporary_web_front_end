const { ShoppingCart, fizzBuzz, notifyMeAfter } = require("../js/examples.js");

describe("Testing simple function", () => {
  it("3 Multiple only must return fizz", () => {
    // Arrange
    const number = 6;
    // Act
    const word = fizzBuzz(number);
    // Assert
    expect(word).toBe("fizz");
  });

  it("5 Multiple only must return buzz", () => {
    // Arrange
    const number = 25;
    // Act
    const word = fizzBuzz(number);
    // Assert
    expect(word).toBe("buzz");
  });

  it("3 and 5 Multiple only must return fizzbuzz", () => {
    // Arrange
    const number = 15;
    // Act
    const word = fizzBuzz(number);
    // Assert
    expect(word).toBe("fizzbuzz");
  });

  // Que otro caso pdría probarse ? 🤔
});

describe("Testing a class", () => {
  it("Add new producto to cart", () => {
    // Arrange
    const shoppingCart = new ShoppingCart(["soap"]);
    const futureShoppingCart = new Map([
      ["soap", 1],
      ["sugar", 1],
    ]);
    // Act
    shoppingCart.addProducts("sugar");
    // Assert
    expect(shoppingCart.products).toEqual(futureShoppingCart);
  });

  it("Add existent producto to cart", () => {
    // Arrange
    const shoppingCart = new ShoppingCart(["chocolate"]);
    const futureShoppingCart = new Map([["chocolate", 2]]);
    // Act
    shoppingCart.addProducts("chocolate");
    // Assert
    expect(shoppingCart.products).toEqual(futureShoppingCart);
  });
});

describe("Testing with promises", () => {
  it("Notification arrives", async () => {
    // Arrange
    const delay = 1000;
    // Act
    const notification = await notifyMeAfter(delay);
    // Assert
    expect(notification).toBe("HELLO");
  });
});
