// Exercise 1 - Basic Types
// -----------------------------------------------
// Objectives: 
// - Annotate primitive types, arrays, and 'any' types
// - Analyze transpiler output
// - Identify when type checking happens

export default () => {
  // ======== Exercise 1.1 ========
  // Goals:
  // - Fix errors
 
  let pi = '3.14159';
  let tau = pi * 2;
  
  console.log('[Exercise 1.1]', `${tau} is ${pi} times two.`);

  // ======== Exercise 1.2 ========
  // Goals:
  // - Fix type annotations

  let pie: symbol;
  
  pie = 'blueberry';

  console.log('[Exercise 1.2]', `I like to eat ${pie} pie.`);

  // ======== Exercise 1.3 ========
  // Goals:
  // - Add type annotations (as explicit as possible)
  // - Look how bad the code completion is w/ `any` types 😱
  
  let isReady;
  isReady = true;
  isReady = 1;
  isReady = 'true';

  console.log('[Exercise 1.3]', `You are ${isReady ? 'ready' : 'not ready'}!`);

  // ======== Exercise 1.4 ========
  // - Fix mistyped values
  // - Add type annotations (as explicit as possible)

  let isMark: boolean;
  isMark = 1;
  isMark = 'false';
  isMark = '';

  console.log('[Exercise 1.4]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);

  // ======== Exercise 1.5 ========
  // Goals:
  // - Add type annotations (as explicit as possible)
  // - Fix errors (if applicable)

  const integer = 6;
  const float = 6.66;
  const hex = 0xf00d;
  const binary = 0b1010;
  const octal = 0o744;
  const negativeZero = -0;
  const actuallyNumber = NaN;
  const largestNumber = Number.MAX_VALUE;
  const largestestNumber = Infinity;

  const members: any[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negativeZero,
    actuallyNumber,
    largestNumber,
    largestestNumber
  ];

  members[0] = '12345';

  console.log('[Exercise 1.5]', `Passed? ${typeof members[0] === 'number'}`);


  // ======== Exercise 1.6 ========
  // We want to represent an inventoryItem in a structure where
  // the first entry is a name and the second is a quantity.

  // Goals:

  let inventoryItem = ['fidget spinner', '11'];

  const message = addInventory(inventoryItem[0], inventoryItem[1]);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }

  console.log('[Exercise 1.6]', message);
}
