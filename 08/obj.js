// Завдання 1.  Перепишіть цей код використовуючи let const~
console.log(`=1=`);
for (let i = 0; i < 5; i++) {
  console.log(i);
}
const message = "test";

function example() {
  if (true) {
    let message = "Hello, world!";

    console.log(message);
  }

  console.log(message); // Виведе 'Hello, world!'
}
example();

//  Завдання 2. Використовуючи for in  виведіть значення з об'єктку в console.log
console.log(`=2=`);
const person = {
  name: "John",

  age: 25,

  occupation: "Developer",
};
for (const value in person) {
  console.log(value, person[value]);
}

// Завдання 3. Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
console.log(`=3=`)
const students = [
  { name: "Alice", age: 20, grade: "A" },

  { name: "Bob", age: 22, grade: "B" },

  { name: "Charlie", age: 21, grade: "C" },
];
for (const value of students) {
  for (const keyValue in value) {
    console.log(value[keyValue]);
  }
}
