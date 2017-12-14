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
  // • Create an interface `CartItem` and replace the param type with it
  // • Make variantId optional

  interface CartItem {
    id: number;
    title: string;
    variantId?: number;
  }

  function addToCart(item: CartItem) {
    console.log('[Exercise 4.1]', `Adding "${item.title}" to cart`);
  }

  addToCart({ id: 1, title: 'Concrete shoes' })

  // ======== Exercise 4.2 ========
  // Goals:
  // • Create and implement an interface on `Person` to ensure it always has accessible
  //   `name` and `age` member properties.

  interface Person {
    name: string;
    age: number;
  }

  class Person implements Person {
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log('[Exercise 4.2]', `${jane.name} is ${jane.age} years old.`);

  // ======== Exercise 4.3 ========
  // Goals:
  // • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
  // • Extend the existing interface `City` (without modifying it inline) by adding a
  //   `coords` property of type `Coords`.
  // • Fix whatever is wrong with `tampa` (besides the fact it's Tampa 😉).

  // [do not edit] (pretend this is coming from external `foo.d.ts` lib)
  interface City {
    name: string;
  }
  // [/do not edit]

  interface Coords {
    latitude: number;
    longitude: number;
  }

  interface City {
    coords: Coords;
  }

  const montreal = {
    coords: {
      latitude: 42.332,
      longitude: -73.324,
    },
    name: 'Montréal',
  };

  const tampa = {
    coords: {
      latitude: 27.9478,
      longitude: -82.4584,
    },
    name: 'Tampa',
  };

  function getCityInfo(city: City) {
    const coords = `(${city.coords.latitude.toFixed(3)}, ${city.coords.longitude.toFixed(3)})`;
    return `${city.name.toUpperCase()} is located at ${coords}.`;
  }

  console.log('[Exercise 4.3]', `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`);
}
