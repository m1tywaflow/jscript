// Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.


let firstnumber = Number(prompt(`Напишіть перше число`));
let secondtnumber = Number(prompt(`Напишіть друге число`));
let thirdnumber = Number(prompt(`Напишіть третє число`));

if(firstnumber>secondtnumber && firstnumber>thirdnumber)
    {console.log(`Найбільше число ${firstnumber}`);}

else if(secondtnumber>firstnumber && secondtnumber>thirdnumber)
{console.log(`Найбільше число ${secondtnumber}`);}

else{
    console.log(`Найбільше число ${thirdnumber}`);
}




// Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let numberMonth = Number(prompt('Введіть номер місяця від 1 до 12'));
let resultMonth = '';

if(numberMonth>0 && numberMonth<=2){
  resultMonth = 'Зимовий сезон';
  console.log(resultMonth);
}
else if(numberMonth>=3 && numberMonth<=5){
  resultMonth = 'Весінній сезон';
  console.log(resultMonth);
}
else if(numberMonth>=6 && numberMonth<=8){
  resultMonth = 'Літній сезон';
  console.log(resultMonth);
}
else if(numberMonth>=9 && numberMonth<=11){
  resultMonth = 'Осінній сезон';
  console.log(resultMonth);
}
else if(numberMonth==12){
  resultMonth = 'Зимовий сезон';
  console.log(resultMonth);
}
else{
  console.log('Ви вписали не коректне значення');
}


// Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let yourNumber = Number(prompt(`Введіть число`));
if(yourNumber>0) 
    {
console.log(`Число додатне ${yourNumber}`);
}
else if(yourNumber==0){
    console.log(`Число нулеве ${yourNumber}`);
}
else{
    console.log(`Число від'ємне ${yourNumber}`);
}

// Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(prompt(`Введіть велечину кута в градусах`));
angle<=90 ? console.log(`Гострий кут`): console.log(`Тупий кут `);




// Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).


let userMark = Number(prompt(`Веддіть свою оцінку від 0 до 100`));
let mark = "";
if(userMark>=90 && userMark<=100){
    mark = 'A';
    console.log(`Ваша оцінка ${mark}`);
  }
  else if(userMark>=80 && userMark<=89){
    mark = 'B';
    console.log(`Ваша оцінка ${mark}`);
  }
  else if(userMark>=70 && userMark<=79){
    mark = 'C';
    console.log(`Ваша оцінка ${mark}`);
  }
  else if(userMark>=60 && userMark<=69){
    mark = 'D';
    console.log(`Ваша оцінка ${mark}`);
  }
  else if(userMark<60){
    mark = 'F';
    console.log(`Ваша оцінка ${mark}`);
  }
  else{
    console.log('Ви вписали не коректне значення');
  }
  console.log(userMark++);
  console.log(userMark);
  userMark>=60?console.log(`Ви зарахованні `):console.log(`Ви не зарахованні`);