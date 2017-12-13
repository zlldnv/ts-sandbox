// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 4 – Interfaces ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Demonstrate structural typing (duck typing)
// • Create an interface and implement it on a class
// • Differentiate type aliases from interfaces

export default () => {
  // ======== Exercise 4.1 ========
  // Goals:
  // • Create an interface and replace the param type with it
  // • Make variantId optional

  function addToCart(item: { id: number, title: string, variantId: number }) {
    console.log('[Exercise 4.1]', `Adding "${item.title}" to cart`);
  }

  addToCart({ id: 1, title: 'Concrete shoes' })


  // ======== Exercise 4.2 ========
  // Goals:
  // • Create and implement an interface to enforce the structure of the Person class

  class Person {
    constructor(public name: string, public age: number) { }
  }

  const jane = new Person('Jane', 31);

  console.log('[Exercise 4.2]', `${jane.name} is ${jane.age} years old.`);

  // ======== Exercise 4.3 ========
  // Goals:
  // • Create and implement an interface to enforce the structure of the Person class


  console.log('[Exercise 4.3]');
}
