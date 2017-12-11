// Exercise 1 - Basic Types
// -----------------------------------------------
// Objectives: 
// - Annotate primitive types, arrays, and 'any' types
// - Analyze transpiler output
// - Identify when type checking happens

export default () => {
  // ======== Exercise 1.1 ========
  // Goals:
  // - Fix any of the TypeScript compile-time errors
 
  let pi = '3.14159';
  let tau = pi * 2;
  console.log(`${tau} is ${pi} times two.`);

  // ======== Exercise 1.2 ========
  // Goals:
  // - Add explicit type annotations

  let pie: number = 'blueberry';
  console.log(`I like to eat ${pie} pie.`);

  // ======== Exercise 1.3 ========
  // Goals:
  // - Add explicit type annotations / fix errors where possible

  const integer = 6;
  const float = 6.66;
  const hex = 0xf00d;
  const binary = 0b1010;
  const octal = 0o744;
  const negativeZero = -0;
  const actuallyNumber = NaN;
  const largestNumber = Number.MAX_VALUE;
  const largestestNumber = Infinity;

  const members = [integer, float, hex, binary, octal, negativeZero, actuallyNumber, largestNumber, largestestNumber];
  
  members[0] = '12345';

  const newMember = members[1];
  newMember.toExponential(2);

  // ======== Exercise 1.3 ========
  // Goals:
  // - Understand 'any' type
  // - Add explicit annotations where possible
  // - Look how bad code completion is on `any` types 😱
  
  let isReady;
  isReady = true;
  isReady = 'true';
  isReady = 0;

  // let's initialize with an explicit type
  let isCool: boolean;

  isCool = 1;
  isCool = 'false';

  const dog: string = 1 + 'poodle';
  // the compiler knows that the resulting type of
  // the expression `1 + 'poodle'` will ALWAYS be a string

}
