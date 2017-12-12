// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 3 – Classes ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Create classes with typed properties and methods
// • Add access modifiers to class members

export default () => {
  // ======== Exercise 3.1 ========
  // Goals:
  // • 

  class Animal {
    static kingdom = 'Animalia';

    constructor(name, numberOfLegs) {
      this.name = name;
      this.numberOfLegs = numberOfLegs;
    }
  }

  const animal = new Animal('Dog', 4);

  console.log('[Exercise 3.1]', `The ${animal.name} is in the kingdom ${Animal.kingdom}.`);
}
