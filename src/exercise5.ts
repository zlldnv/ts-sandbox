// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 5 – Code flow analysis ⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Understand how TypeScript performs code flow analysis
// • Create and apply union and intersection types
// • Use type guards

export default () => {

  // ======== Exercise 5.0 ========
  // TypeScript is intelligent about the possible types of a variable, 
  // depending on the code path.
  // Goals:
  // • Simply inspect the possible types by hovering over `text` to see
  //   how the inferred type changes if the compiler can make safe assumptions
  //   about the possible types within the given code path.

  function trimmedLength1(text: string | null | undefined) {
    text; // text: string | null | undefined

    if (typeof text === 'string') {
      text; // text: string

      return text.trim().length;
    }

    text; // text: null | undefined
  }

  function trimmedLength2(text: string | null | undefined) {
    if (text) {
      return text.trim().length;
    }

    text; // text: string | null | undefined (because '' == false)
  }

  function trimmedLength3(text: string | null | undefined) {
    if (!text) {
      return;
    }

    return text.trim().length; // text: string
  }

  function trimmedLength4(text: any) {
    text; // text: any

    if (typeof text === 'string') {
      return text.trim().length; // text: string
    }

    text; // text: any (TS does not subtract types from `any`)
  }

  console.log('[Exercise 5.0]', `${trimmedLength1("   hi     ")}`);

  // ======== Exercise 5.1 ========
  // Goals:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: any): void {
    if (typeof value === 'string') {
      console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
      console.log(value.toPrecision(5));
    }

    value; // hover over `value` here
  }
  
  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff('hello');

  console.log('[Exercise 5.1]');

  // ======== Exercise 5.2 ========
  // Goals:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: number | string): string {
    // if padding is a number, return `${Array(padding + 1).join(' ')}${value}`
    // if padding is a string, return padding + value
  }

  console.log('[Exercise 5.2]', `
    ${padLeft('🐕', 0)}
    ${padLeft('🐕', '🐩')}
    ${padLeft('🐕', '🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩🐩')}
  `);

  // ======== Exercise 5.3 ========
  // Goals:
  // • 

  // ======== Exercise 5.4 ========
  // Goals:
  // • 

  interface EggLayer {
    layEggs(): void;
  }

  interface Flyer {
    fly(height: number): void;
  }

  interface Swimmer {
    swim(depth: number): void;
  }

  type BirdLike = Flyer & EggLayer;
  type FishLike = Swimmer & EggLayer;
  type Pet = Bird | Fish;

  class Bird implements BirdLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying bird eggs.');
    }

    fly(height: number): void {
      console.log(`Flying to a height of ${height} meters.`);
    }
  };

  class Fish implements FishLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying fish eggs.');
    }

    swim(depth: number): void {
      console.log(`Swimming to depth of ${depth} meters.`);
    }
  }

  function interrogatePet(pet: Pet = getRandomAnimal()): string {
    if (pet instanceof Fish) {
      pet.swim(10);
    } else if (pet instanceof Bird) {
      pet.fly(10);
    }

    return pet.species;
  }
  
  // // alternatively:
  // function interrogatePet2(pet: Pet = getRandomAnimal()): string {
  //   if ((<Fish>pet).swim) {
  //     (<Fish>pet).swim(10);
  //   }
  //   else {
  //     (<Bird>pet).fly(10);
  //   }

  //   return pet.species;
  // }

  function getRandomAnimal(): Pet {
    const animals: Pet[] = [
      new Bird('puffin'),
      new Bird('kittiwake'),
      new Fish('sea robin'),
      new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  console.log('[Exercise 5.4]', `We've got a ${interrogatePet()} on our hands!`);
}
