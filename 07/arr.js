// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
//push

let arr = [];
arr.push(`Flower , Dog, Keyboard`);
console.log(arr);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
let arrPush = [`Cat, Apple , Juice`];
let push =(arr, value)=>arr.push(value);
push(arrPush, `Flower`);
console.log(arrPush);

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
// pop:
console.log(`===`);

let arrPop = [1,2,3,4,5,6,7,8,9];
arrPop.pop(-1);
console.log(arrPop);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.



let popArr = [1,2,3,4,5];
let Arrpop=(arr,value)=>arr.pop(value);
Arrpop(popArr, -1);
console.log(popArr);






// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
// unshift:
console.log('===');

let arrUnshift = [1, 2, 3, 4, 5, 6];
arrUnshift.unshift('Numbers');
console.log(arrUnshift);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let arrNewUnshift = [1, 2, 3, 4, 5, 6];
let unshiftArr = (arr, value)=>arr.unshift(value);
unshiftArr(arrNewUnshift, 'First');
console.log(arrNewUnshift)


// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
// shift:
console.log('===');
 let arrShift =[6,7,8,9,10];
 arrShift.shift();
 console.log(arrShift);

 // Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

 let arrNewShift =[4,5,6,7,8,9,10];
 let shiftArr = (arr,value)=> arr.shift(value);
 shiftArr(arrNewShift);
 console.log(arrNewShift);


 // Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
 // fill:
 console.log('===');

 let fillArr = new Array(10);
 fillArr.fill(5);
 fillArr.fill('$',3,5)
 fillArr.fill('@',6,10);
 console.log(fillArr);


 // Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.
 
 let arrNewFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fillarr = (arr, value, index)=>arr.fill(value, index);
fillarr(arrNewFill, '@',3,6);
fillarr(arrNewFill, '*',7,9);
console.log(arrNewFill);



// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
// splice:
console.log('===');

let spliceArr = [1,2,3,4,5,6,7,8];
let afterSplice = spliceArr.splice(4,6);
console.log(afterSplice);
console.log(spliceArr);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

let Arrsplice = [1,2,3,4,5,6,7,8];
let newsplice = (arr, number, index)=> arr.splice(index,number);
newsplice(Arrsplice, 5,7);
console.log(Arrsplice);


// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
// reverse:
console.log('===');

let reverseArr = [1,2,3,4];
reverseArr.reverse();
console.log(reverseArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let arrReverse = [1,2,3,4,5];
let afterReverse = (arr)=>arr.reverse();
afterReverse(arrReverse);
console.log(arrReverse);


// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
// concat:

console.log('===');

let firstArr = [1,2,3];
let secondArr = [4,5,6];
firstArr=firstArr.concat(secondArr);
console.log(firstArr);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let firstConcat = [1,2,3,4];
let secondConcat = [`Max`,`Den`,`Nick`];
let concatArr = (arr1,arr2)=>arr=arr1.concat(arr2);
concatArr(firstConcat,secondConcat);
console.log(arr);


// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
// includes:
console.log('===');

let arrIncludes = [1, 2, 3, 'Mitywa'];
console.log(arrIncludes.includes('Mitywa'));


// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.


let arrNewIncludes = [1, 2, 3, 4, 5, `Vlad`, 'Den'];
let includesArr = (arr, value)=>arr.includes(value);
includesArr(arrNewIncludes, 'Den',`Vlad`);
console.log(includesArr(arrNewIncludes, 'Den',`Vlad`));




console.log('===');

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
// filter:

let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(value){
  return value%2===0;
}
let result = arrFilter.filter(search);
console.log(result);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

let arrNewFilter = [1, 2, 3, 4, 5, 6];
function search(value){
  return value%2===0;
}
let filterArr = (arr, func)=>filter=arr.filter(func);
filterArr(arrNewFilter, search);
console.log(filter); 


console.log('===');

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
// map:
let arrMap = [4, 6, 8];
let newArrMap = arrMap.map((value)=>value**2);
console.log(newArrMap);


// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.

let arrMapNew = [1, 2, 3, 4, 5, 6];
function transform (value){
  return value = String(value);
}
let mapArr = (arr, value)=>newMap=arr.map(value);
mapArr(arrMapNew, transform);
console.log(newMap);