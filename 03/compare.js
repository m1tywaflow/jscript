// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.
// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.
let number1 = 7;
let number2 = 12;
let resultNumber = number1 == number2;
alert(`Result ${resultNumber}`);


// Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.


// Запит числа у користувача
const number = parseInt(prompt("Введіть число:"));

// Перевірка, чи число парне чи непарне
if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log(`${number} є парним числом.`);
    } else {
        console.log(`${number} є непарним числом.`);
    }
} else {
    console.log("Ви ввели не число. Спробуйте ще раз.");
}


// Використовуючи prompt, запитайте у користувача його вік.
// Перевірте, чи вік менше 18 років.
// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.


let userAge = Number(prompt(`Скільки тобі років?`));
if (userAge >= 18) {
  alert('You can open the website!')
} else {
  alert('You can not open the website!')
}



// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
// Виведіть результат за допомогою console.log.


let price = Number(prompt(`Your price`));
let amount = Number(prompt(`Your amount`));
let resultCoast = price*amount;
console.log(`Coast ${resultCoast}`);



// Використовуючи prompt, запросіть в користувача вартість товару.
// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
// Виведіть результат знижки за допомогою alert.


let userPrice = Number(prompt(`Your price`))
let discount = 50;
let pricewdiscount = (userPrice*discount)/100;
alert(`Result ${pricewdiscount}`);