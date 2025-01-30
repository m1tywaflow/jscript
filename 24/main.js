import {GetUserData, GetFilmData, getPlanetData} from './script.js'
import {summ, minus, multiply, devide} from './mathOperations.js'
import {toUpperCase, reverse} from './stringUtilities.js'
GetUserData(1);
GetFilmData(2);
getPlanetData(3);
console.log(summ(6, 40));
console.log(minus(500, 200));
console.log(multiply(5, 5));
console.log(devide(12, 2));
console.log(toUpperCase('Hello! How are u?'));
console.log(reverse('I have a cat'));