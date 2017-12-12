// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Exercise 2 – Functions ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Convert existing JavaScript functions to TypeScript
// • Understand functions as types
// • Convert specifically-typed functions to more
//   flexible generic functions

export default () => {
  // ======== Exercise 2.1 ========
  // Goals:
  // • Add explicit parameter types and return type
  // • Fix any errors resulting from invalid types

  function add(x, y) {
    return x + y;
  }

  function sum(numbers) {
    return numbers.reduce(add, 0);
  }

  const someSum = sum([1, 2, '3']);

  console.log('[Exercise 2.1]', `The sum of [1, 2, 3] === ${someSum}`);

  // ======== Exercise 2.2 ========
  // Goals:
  // • Add explicit parameter types and return types to the `deposit` function
  // • Make the function's `message` parameter *optional*

  const bankAccount = {
    money: 0,
    deposit(value, message) {
      this.money += value;
      if (message) {
        console.log(message);
      }
    }
  };

  bankAccount.deposit(20);
  bankAccount.deposit(10, 'Deposit received')

  console.log('[Exercise 2.2]', `Account value: $${bankAccount.money}`);

  // ======== Exercise 2.3 ========
  // Goals:
  // • Add explicit parameter types and return types
  // • Addign a default greeting: "Hello!"

  function greet(greeting) {
    return greeting;
  }

  const defaultGreeting = greet();
  const portugueseGreeting = greet('Oi como vai!');

  console.log('[Exercise 2.3]', defaultGreeting, portugueseGreeting);

  // ======== Exercise 2.4 ========
  // Goals:
  // • Add parameter type annotation
  // • Even though this function doesn't return, add an explicit return type

  function logMessage(message) {
    console.log(message);
  }

  logMessage('[Exercise 2.4] ✅');

  // ======== Exercise 2.5 ========
  // Here we've initialized two variables with function types
  // Goals:
  // • Fix the errors

  let myMultiply: (val1: number, val2: number) => number;
  let myEchoString: (val: string) => string;

  myMultiply = function(message: string): string {
    return message;
  }

  myEchoString = function(x: number, y: number): number {
    return x * y;
  }

  console.log('[Exercise 2.5]', myEchoString(`5 x 5 equals ${myMultiply(5, 5)}`));

  // ======== Exercise 2.6 ========
  // For a given word, we are computing its Scrabble® score.
  // Goals:
  // • Add type annotations wherever possible

  function computeScore(word) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
  }

  function getPointsFor(letter) {
    const lettersAndPoints = [
      ['AEOIULNRST', 1],
      ['DG', 2],
      ['BCMP', 3],
      ['FHVWY', 4],
      ['K', 5],
      ['JX', 8],
      ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore, pointsTuple) => {
      const [letters, score] = pointsTuple;
      if (letters.split('').find((ll) => ll === letter)) {
        return computedScore += score;
      }
      return computedScore;
    }, 0);
  }

  console.log('[Exercise 2.6]', `zoo is worth ${computeScore('zoo')} points.`);
}
