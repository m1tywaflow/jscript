// Тема: Spread
// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let firstArr = [`Cat`,`Man`,`Woman`];
let secondArr = [1,2,3,4,5];
let spreadArr = [...firstArr, ...secondArr];
console.log(spreadArr)

// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

console.log('==rest==');
function argLine(str,...arr){
    console.log(str,arr);
}
argLine(`Bob`,1,2,3);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.
console.log('==rest==');

function average(...arguments){
    let value = 0;
    for(const arg of arguments){
      value += arg/arguments.length;
    }
    return value;
  };
  console.log(average(1,2,3,4,5,6,7,8,9,10,11,12,13,14));

  // Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.
console.log('==typeOf==');
function whichType(value){
    console.log(`Wich type ${typeof value}`)

};
whichType(`Str`);
whichType([]);
whichType(333);
whichType(false);
whichType({});
whichType(undefined);

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof. 
console.log('==typeOf==');
const type = `Type`;
if(typeof type===`number`){
    console.log(`It's a number`);
}
else if(typeof type===`string`){
    console.log(`It's a string`);
}
else{
    console.log(`It's another type`);
}