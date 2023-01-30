/*let a = 3222;
console.log(a);
a = 'test';
console.log(a); Lesson11 


const width = 10;
const height = 5;
const space = width * height;
console.log(space);
const newWidth = width - 4;
const newWidth2 = width + 3;
console.log(newWidth2);
const division = newWidth / newWidth2;
console.log(division);
const volume = 2 ** 3; /// Возведение в степень.
console.log(volume);

// Строки
const city = 'Cherkassy';
const street = 'Vetnihora';
console.log(city + ', ' + street + ' ' + 5); Lesson12 

//операторы присваивания
let age = 38;
age += 2;
age++;
age *= 2;
age /= 3;
console.log(age);

//операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age ==   vasia); Lesson 13 

// Порядок вычислений
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);
const a = (5 + 10) / 2; //группировка; (Скобки)
console.log(a);
let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);   Lesson 14 

// Типы данных
let a = 6;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'vdf';
console.log(typeof a);
let isAdmin = false;
console.log(typeof isAdmin);
let bInt = BigInt(234234234);
console.log(typeof bInt);
let c;
console.log(typeof c);
c = 5;
console.log(typeof c);
let d = null;
console.log(typeof (d == null)); Lesson 15 */

//Шаблон строки
const projectName = "Sait";
const price = 2000;
const autor = "denis pavlov";

const template = autor + " заказал " + projectName + " по цене " + price;
console.log(template);

const template2 = `${autor} заказал ${projectName} по цене ${price}`;
console.log(template2)

const template3 = "Проект \n" + "Цена:" + price + "$";
console.log(template3)

const template4 = `Проект
        Цена ${price}$`;
console.log(template4)