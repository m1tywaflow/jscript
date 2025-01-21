const info = {
  name: "Vlad",
  age: 26,
  isActive: true,
  hobbies: ["reading", "gaming", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  scores: [95, 88, 76],
};

const jsonString = JSON.stringify(info, null, 2); // Перетворення об'єкта в JSON
const obj = JSON.parse(jsonString); // Перетворення JSON назад у об'єкт

console.log(jsonString);
console.log(obj);
