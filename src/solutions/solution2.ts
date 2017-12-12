// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Solution 2 – Functions ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

export default () => {
  // ======== Exercise 2.1 ========
  // Goals:
  // • Add explicit parameter types and return type
  // • Fix any errors resulting from invalid types

  function add(x: number, y: number): number {
    return x + y;
  }

  function sum(numbers: number[]) {
    return numbers.reduce(add, 0);
  }

  const someSum = sum([1, 2, 3]);

  console.log('[Exercise 2.1]', `The sum of [1, 2, 3] === ${someSum}`);

  // ======== Exercise 2.2 ========
  // Goals:
  // • Add explicit parameter types and return types to the `deposit` function
  // • Make the function's `message` parameter *optional*

  const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
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

  function greet(greeting: string = 'Hello!'): string {
    return greeting;
  }

  const defaultGreeting = greet();
  const ptGreeting = greet('Oi como vai!');

  console.log('[Exercise 2.3]', defaultGreeting, ptGreeting);

  // ======== Exercise 2.4 ========
  // Goals:
  // • Add parameter type annotation
  // • Even though this function doesn't return, add an explicit return type

  function logMessage(message: string): void {
    console.log(message);
  }

  logMessage('[Exercise 2.4] ✅');

  // ======== Exercise 2.5 ========
  // Here we've initialized two variables with function types
  // Goals:
  // • Fix the errors

  let myMultiply: (val1: number, val2: number) => number;
  let myEchoString: (val: string) => string;

  myMultiply = function (x: number, y: number): number {
    return x * y;
  }

  myEchoString = function (message: string): string {
    return message;
  }

  console.log('[Exercise 2.5]', myEchoString(`5 x 5 equals ${myMultiply(5, 5)}`));

  // ======== Exercise 2.6 ========
  // For a given word, we are computing its Scrabble® score.
  // Goals:
  // • Add type annotations wherever possible

  function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
  }

  function getPointsFor(letter: string): number {
    const lettersAndPoints: [string, number][] = [
      ['AEOIULNRST', 1],
      ['DG', 2],
      ['BCMP', 3],
      ['FHVWY', 4],
      ['K', 5],
      ['JX', 8],
      ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number]): number => {
      const [letters, score] = pointsTuple;
      if (letters.split('').find((ll: string): boolean => ll === letter)) {
        return computedScore += score;
      }
      return computedScore;
    }, 0);
  }

  console.log('[Exercise 2.6]', `zoo is worth ${computeScore('zoo')} points.`);
}
