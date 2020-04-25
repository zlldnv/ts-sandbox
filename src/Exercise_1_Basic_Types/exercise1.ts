// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 1 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Цели:
// • Обхявить примитивные типы, массивы и 'any' типы
// • Понять когда проходит проверка типов
// • В конце проанализировровать вывод компилятора

export default () => {
  // ======== Упражнение 1.1 ========
  // Инструкции:
  // • Навести над красной подстветкой для того Hover over red squigglies to inspect the TS errors.
  // • Наведите указатель мыши на переменные, чтобы проверить их типы.
  // • Исправьте ошибку в строке 18, изменив значение pi на ожидаемый тип.

  let pi = "3.14159";
  let tau = pi * 2;

  console.log("[Exercise 1.1]", `${tau} is ${pi} times two.`);

  // ======== Упражнение 1.2 ========
  // Инструкции:
  // • Проверьте тип `pie`
  // • Добавьте явную аннотацию типа в `pie`
  // • Ради интереса попробуйте назначить недопустимые типы

  let pie;
  pie = "blueberry";

  console.log("[Exercise 1.2]", `I like to eat ${pie}-flavored pie.`);

  // ======== Упражнение 1.3 ========
  // Инструкции:
  // • Изучите ошибку ошибку, затем исправьте ее.

  let isMark: boolean;

  console.log("[Exercise 1.3]", `${isMark ? "Oh, hi Mark" : "Who are you?"}`);

  // ======== Упражнение 1.4 ========
  // Инструкции:
  // • Добавить аннотации типов (как можно более явными)
  // • Исправить ошибки (если применимо)

  const integer = 6;
  const float = 6.66;
  const hex = 0xf00d;
  const binary = 0b1010011010;
  const octal = 0o744;
  const negZero = -0;
  const actuallyNumber = NaN;
  const largestNumber = Number.MAX_VALUE;
  const mostBiglyNumber = Infinity;

  const members: any[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber,
  ];

  members[0] = "12345";

  console.log("[Exercise 1.4]", members);

  // ======== Упражнение 1.5 ========
  // Инструкции:
  // • Добавить аннотации типов (как можно более явными)
  // • Исправить ошибки (если применимо)

  const sequence = Array.from(Array(10).keys());
  const animals = ["pangolin", "aardvark", "echidna", "binturong"];
  const stringsAndNumbers = [1, "one", 2, "two", 3, "three"];
  const allMyArrays = [sequence, animals, stringsAndNumbers];

  console.log("Exercise 1.5", allMyArrays);

  // ======== Упражнение 1.6 ========
  // Цель:
  // • Добавить аннотации типов (как можно более явными)
  // • Исправить ошибки (если применимо)

  // Мы хотим представить inventoryItem как структуру, в которой
  // первая запись - это название товара, а вторая - количество

  const inventoryItem = ["fidget wibbit", 11];

  // позже мы его деструктурируем
  const [name, qty] = inventoryItem;

  const msg = addInventory(name, qty);

  console.log("[Exercise 1.6]", msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }
};
