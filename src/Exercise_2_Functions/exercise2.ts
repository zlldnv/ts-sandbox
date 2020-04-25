// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Функции
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Цели:
// • Преобразование существующих функций JavaScript в TypeScript
// • Понять функции как типы
// • Преобразование специально типизированных функций в более
// гибкие generic функции

export default () => {
  // ======== Упражнение 2.1 ========
  // Инструкции:
  // • Добавить явные типы параметров и возвращаемый тип
  // • Исправляем любые ошибки, возникающие из-за недопустимых типов

  function add(x, y) {
    return x + y;
  }

  function sumArray(numbers) {
    return numbers.reduce(add, 0);
  }

  const someSum = sumArray(["3", "6", "9"]);

  console.log("[Exercise 2.1]", `3 + 6 + 9 === ${someSum}`);

  // ======== Exercise 2.2 ========
  // Instructions:
  // • Add explicit parameter types and return types to the `deposit` function
  // • Make the function's `message` parameter *optional*

  // ======== Упражнение 2.2 ========
  // Инструкции:
  // • Добавляем явные типы параметров и возвращаемые типы к функции `deposit`
  // • Сделать параметр `message` функции * опциональным *

  const bankAccount = {
    money: 0,
    deposit(value, message) {
      this.money += value;
      if (message) {
        console.log(message);
      }
    },
  };

  bankAccount.deposit(20);
  bankAccount.deposit(10, "Deposit received");

  console.log("[Exercise 2.2]", `Account value: $${bankAccount.money}`);

  // ======== Упражнение 2.3 ========
  // Для данного слова мы вычисляем его оценку Scrabble®.
  // Инструкции:
  // • Добавляем аннотации типов везде, где это возможно

  function computeScore(word) {
    const letters = word.toUpperCase().split("");
    return letters.reduce((accum, curr) => (accum += getPointsFor(curr)), 0);
  }

  function getPointsFor(letter) {
    const lettersAndPoints = [
      ["AEOIULNRST", 1],
      ["DG", 2],
      ["BCMP", 3],
      ["FHVWY", 4],
      ["K", 5],
      ["JX", 8],
      ["QZ", 10],
    ];

    return lettersAndPoints.reduce((computedScore, pointsTuple) => {
      const [letters, score] = pointsTuple;
      if (letters.split("").find((ll) => ll === letter)) {
        return (computedScore += score);
      }
      return computedScore;
    }, 0);
  }

  console.log("[Exercise 2.3]", `zoo is worth ${computeScore("zoo")} points.`);
  // ======== Упражнение 2.4 ========
  // Инструкции:
  // • Добавить явные типы параметров и возвращаемые типы
  // • Добавить приветствие по умолчанию: "hello"

  function greet(greeting) {
    return greeting.toUpperCase();
  }

  const defaultGreeting = greet();
  const portugueseGreeting = greet("Oi como vai!");

  console.log("[Exercise 2.4]", defaultGreeting, portugueseGreeting);

  // ======== Упражнение 2.5 ========
  // Инструкции:
  // • Добавить аннотацию типа параметра
  // • Даже если эта функция не возвращается, добавьте явный тип возврата

  function layEggs(quantity, color) {
    console.log(
      `[Exercise 2.5] You just laid ${quantity} ${color} eggs. Good job!`
    );
  }

  layEggs();

  // ======== Упражнение 2.6 ========
  // Здесь мы инициализировали две переменные с типами функций.
  // Позже мы назначаем их функциям.
  // Инструкции:
  // • Исправляем ошибки

  let multiply: (val1: number, val2: number) => number;
  let capitalize: (val: string) => string;

  multiply = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  };

  capitalize = function (x: number, y: number): number {
    return x * y;
  };

  console.log("[Exercise 2.6]", capitalize(`nifty ${multiply(5, 10)}`));

  // ======== Упражнение 2.7 ========
  // В настоящее время наша функция `pushToCollection` принимает * любой * элемент и добавляет его,
  // (без разбора) в * любой * массив.
  //
  // Пара проблем с этим:
  //
  // 1. Тип `any` заставляет нас терять ВСЕ данные о наборе в наших параметрах.
  // 2. Эта слабость вернулась назад, чтобы кусать нас во время выполнения. (Просто
  // посмотрите на `incrementByTwo`!)
  //
  // Инструкции:
  // • Реализуем `pushToCollection` как универсальную функцию. (Это должно создать
  // ошибки времени компиляции в местах, в которые добавляются неверные значения
  // заданная коллекция. Зафиксируйте эти значения для правильных типов.)
  // • После создания универсального `pushToCollection` должен быть достаточно * универсальным * для работы
  // для элементов и коллекций любого типа, продолжая обеспечивать их соответствие.

  const numberCollection: number[] = [];
  const stringCollection: string[] = [];

  function pushToCollection(item, collection) {
    collection.push(item);
    return collection;
  }

  // Add some stuff to the collections
  pushToCollection(false, stringCollection);
  pushToCollection("hi", stringCollection);
  pushToCollection([], stringCollection);

  pushToCollection("1", numberCollection);
  pushToCollection("2", numberCollection);
  pushToCollection("3", numberCollection);

  const incrementedByTwo = numberCollection.map((num) => num + 2);

  console.log(
    "[Exercise 2.7]",
    `[${incrementedByTwo}] should deeply equal [3,4,5]`
  );
};
