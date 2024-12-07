// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert

let variant = prompt('Оберіть:камінь, ножниці, папір');
let UpperCase = variant.toLowerCase();
let arrVariant = ['камінь', 'ножниці', 'папір'];
let valueVariant = Math.floor(Math.random()*3);
function randomVariant (){
  if (valueVariant === 0){
    valueVariant=arrVariant[0]
  }
  else if (valueVariant === 1){
    valueVariant=arrVariant[1]
  }
  if (valueVariant === 2){
    valueVariant=arrVariant[2]
  }
};
randomVariant();
function result (){
  if (UpperCase == valueVariant){
    alert ('Нічия')
  }
  else if(UpperCase === "ножниці" && valueVariant === 'папір' || UpperCase === 'камінь' && valueVariant === 'ножниці' || UpperCase === 'папір' && valueVariant === 'камінь'){
    alert ('Ти виграв!')
  }
  else if(UpperCase === 'папір' && valueVariant === 'ножниці' || UpperCase === 'ножниці' && valueVariant === 'камінь' ||  UpperCase === 'камінь' && valueVariant === 'папір'){
    alert ('Ти програв(')
  }
  else ('Ви не обрали варіант')
}
result();
console.log(`You: ${UpperCase}`);
console.log(`Computer: ${valueVariant}`);


// Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.


console.log('===');
let minNumber = (a, b) => console.log(`The smallest number is ${Math.min(a,b)}`);
minNumber(345,-2);
let maxNumber = (a, b) => console.log(`The biggest number is ${Math.max(a,b)}`);
maxNumber(-15, 210);


// Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.
 let powNumber =(a,b)=> console.log(Math.pow(a,b));
 powNumber(12,6);


 // Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.
console.log(`ceil and floor`);
let mathFloor = (a) => console.log(Math.floor(a*9));
mathFloor(Math.random());
let mathCeil = (a) => console.log(Math.ceil(a*9));
mathCeil(Math.random()); 


// Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

console.log(`==date==`);

let userAge = Number(prompt(`Введіть свій рік народження`));
let nowDate = new Date();
let userDate = () => console.log(nowDate.getFullYear()-userAge);
userDate();

// Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.
console.log(`==date-string==`);
let date = new Date;
console.log(date.toLocaleString());

// Завдання для String.split та toUpperCase:
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.


let words = 'Cat Dog Paper Year';
let toUpperCase = words.toUpperCase();
let wordsArr = toUpperCase.split(' ');
console.log(wordsArr);