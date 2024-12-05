// 1. Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}
const user = new Person("Bob", 22);
user.sayHello();


// Створіть клас Student, який наслідує від класу Person.

// Додайте властивість studentId до класу Student.

// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId; 
    }

    study() {
        console.log(`${this.name} is studying. Their student ID is ${this.studentId}.`);
    }
}
const student1 = new Student("Bob", 34, "English");
student1.study();    