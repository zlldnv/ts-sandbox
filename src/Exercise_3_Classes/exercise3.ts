// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//    Упражнение 3 Классы
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Цели:
// • Создание классов с типизированными свойствами и методами
// • Добавить модификаторы доступа к членам класса

export default () => {
  // ======== Упражнение 3.1 ========
  // Цели:
  // • Добавить явный тип параметра в метод greet
  // • Добавить явный тип возврата в метод greet

  class MC {
    greet(event = "party") {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log("[Exercise 3.1]", mc.greet("show"));

  // ======== Упражнение 3.2 ========
  // Цели:
  // • Добавить явные типы параметров в конструктор
  // • Добавляем типизированные параметры для хранения значений

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person("Jane", 31);

  console.log("[Exercise 3.2]", `The new person's name is ${jane.name}.`);

  // ======== Упражнение 3.3 ========
  // Цели:
  // • Явно делаем свойства title и salary общедоступными
  // • Сокращение класса до трех строк кода при сохранении функциональности

  class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee("Engineer", 100000);

  console.log(
    "[Exercise 3.3]",
    `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`
  );

  // ======== Упражнение 3.4 ========
  // Цели:
  // • Добавить полный набор
  // • Сделать класс Snake наследуемым от Animal
  // • Сделать класс Pony наследуемым от Animal
  // • Сделать так, чтобы имя члена не было общедоступным

  class Animal {
    constructor(name) {}
    move(meters) {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake {
    move(meters) {
      console.log("Slithering...");
      // должен вызвать метод родителя `move`, с / a по умолчанию
      // скольжение 5 метров
    }
  }

  class Pony {
    move(meters) {
      console.log("Galloping...");
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.
  const andrew = new Animal("Andrew the Animal");
  andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  console.log(pokey.name); // Should return error

  // ======== Упражнение 3.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the
  //   manufacturer member

  class Furniture {
    constructor(manufacturer: string = "IKEA") {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(
        "[Exercise 3.5]",
        `This is a desk made by ${this.manufacturer}`
      );
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(
        "[Exercise 3.5]",
        `This is a chair made by ${this.manufacturer}`
      );
    }
  }

  const desk = new Desk();
  desk.kind();
  desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  chair.manufacturer; // Should return error

  // ======== Упражнение 3.6 ========
  // Goals:
  // • Eliminate the error without changing references to `Student.school`

  class Student {
    public school: string = "Harry Herpson High School";
    constructor(private name: string) {}
    introduction() {
      console.log(
        "[Exercise 3.6]",
        `Hi, my name is ${this.name} and I attend ${Student.school}`
      );
    }
  }

  const student = new Student("Morty");
  console.log(Student.school);
  student.introduction();
};
