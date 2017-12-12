// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
// ⏆⏆ Solution 2 – Functions ⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆⏆
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

export default () => {
  // ======== Solution 2.1 ========
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

  console.log('[Solution 2.1]', `The sum of [1, 2, 3] === ${someSum}`);

  // ======== Solution 2.2 ========
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

  console.log('[Solution 2.2]', `Account value: $${bankAccount.money}`);

  // ======== Solution 2.3 ========
  // Goals:
  // • Add explicit parameter types and return types
  // • Addign a default greeting: "Hello!"

  function greet(greeting: string = 'Hello!'): string {
    return greeting;
  }

  const defaultGreeting = greet();
  const ptGreeting = greet('Oi como vai!');

  console.log('[Solution 2.3]', defaultGreeting, ptGreeting);

  // ======== Solution 2.4 ========
  // Goals:
  // • Add parameter type annotation
  // • Even though this function doesn't return, add an explicit return type

  function logMessage(message: string): void {
    console.log(message);
  }

  logMessage('[Solution 2.4] ✅');

  // ======== Solution 2.5 ========
  // Here we've initialized two variables with function types
  // Goals:
  // • Fix the errors

  let myMultiply: (val1: number, val2: number) => number;
  let myEchoString: (val: string) => string;

  myMultiply = function(x: number, y: number): number {
    return x * y;
  }

  myEchoString = function(message: string): string {
    return message;
  }

  console.log('[Solution 2.5]', myEchoString(`5 x 5 equals ${myMultiply(5, 5)}`));

  // ======== Solution 2.6 ========
  // Goals:
  // • Make `echo` into a generic function.
  // • Once made generic, the below examples should highlight as compile-time errors.
  // • Compare the editor's code completion for the generic function to that of the 
  //   original function that used `any`.
  // • Finally, fix the values 

  function echo<T>(value: T): T {
    return value;
  }

  // These should be caught by TypeScript (instead of causing runtime errors!):
  const two: string = echo('234').charAt(0);
  const twoExp: string = echo(2).toExponential();
  const ULL: string = echo('null').toUpperCase().substr(1);

  console.log('[Solution 2.6]', two, twoExp, ULL);

  // ======== Solution 2.7 (EXTRA CREDIT) ========
  // Currently, our function `addItemToCollection` accepts *any* item and adds it,
  // (indiscriminantly) to *any* kind of array.
  //
  // A couple problems with this:
  // 
  //     1. The `any` type causes us to lose ALL typing information on our params.
  //     2. This looseness has come back to back to bite us during runtime. (Just 
  //        look at `incrementByTwo`!)
  //
  // Goals:
  // • Implement `addItemToCollection` as a generic function. (This should create
  //   compile-time errors in places where incorrect values are being added to 
  //   a given collection. Fix these values to the correct types.)
  // • Once made generic, `addItemToCollection` should be *generic* enough to operate
  //   on items and collections of any type while continuing to enforce that they match.

  const numberCollection: number[] = [];
  const stringCollection: string[] = [];

  function addItemToCollection<T>(item: T, collection: T[]): T[] {
    collection.push(item);
    return collection;
  }

  // Add some stuff
  addItemToCollection('🏚', stringCollection);
  addItemToCollection('horse', stringCollection);

  addItemToCollection(1, numberCollection);
  addItemToCollection(2, numberCollection);
  addItemToCollection(3, numberCollection);

  const incrementedByTwo = numberCollection.map((num) => num + 2);

  console.log('[Solution 2.7]', `[${incrementedByTwo}] should deeply equal [3,4,5]`);

  // ======== Solution 2.8 (EXTRA CREDIT) ========
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
      const [letters, score]: [string, number] = pointsTuple;
      if (letters.split('').find((ll: string): boolean => ll === letter)) {
        return computedScore += score;
      }
      return computedScore;
    }, 0);
  }

  console.log('[Solution 2.8]', `zoo is worth ${computeScore('zoo')} points.`);
}
