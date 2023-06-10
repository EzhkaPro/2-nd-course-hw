// Задание 1
/*Преобразуйте строку js в верхний регистр JS.*/

let str = 'Преобразуйте строку js в верхний регистр JS.';
console.log(str.toUpperCase());




// Задание 2
/*Создайте функцию, которая в качестве параметров принимает массив строк и строку. 
Возвращать данная / функция должна новый массив, содержащий только те элементы переданного массива, 
которые начинаются с переданной строки. Регистр символов не должен влиять.
Пример вызова:
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []*/


const Start =  ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
const searchStart = [];


Start.forEach((Start) => {
	
	if (Start.toLowerCase().includes(search.toLowerCase())) {
        searchStart.push(Start);
        console.log(searchStart);
	}
});




// Задание 3
/*округлите число 32.58884:*/

console.log(Math.round(Math.floor(32.58884)));// (32) До меньшего целого

console.log(Math.round(Math.ceil(32.58884)));// (33) До большего целого

console.log(Math.round(32.58884)); // (33) До ближайшего целого





// Задание 4
/*Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и 
/*вывести их в консоль.*/

lineNum = '52, 53, 49, 77, 21, 32';

const mass = lineNum.split(',').map(function (item) {
    return parseInt(item, 10);
});
const min = mass => mass.reduce((x, y) => Math.min(x, y));
const max = mass => mass.reduce((x, y) => Math.max(x, y));

console.log(min(mass), max(mass));




// Задание 5
/*Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.*/

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
};
console.log(getRandomInt(0, 10));




// Задание 6
/*Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых
чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.
Пример вызова функции
getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами от 0 до 7, 
длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
от 0 до 12, длина массива 12 / 2 = 6*/

let getRandomArrNumbers = function (a) {
    const arrRandom = [];
    for (i = 0; i < a; i++) {
        arrRandom.push(Math.floor(Math.random() * 10))
    }
    return arrRandom;
}
console.log(getRandomArrNumbers(Math.round(Math.floor(7 / 2))));
console.log(getRandomArrNumbers(Math.round(Math.floor(12 / 2))));




//  Задание 7
/*Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное
целое число в этом диапазоне.*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(5, 12));




//  Задание 8
/*Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных 
в уроке способов.*/

const currDate = new Date();
const optins = { year: 'numeric', month: 'long', day: 'numeric' };

console.log(currDate.toLocaleDateString('ru-RU', optins));




// Задание 9
/*Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит 
через 73 дня после текущей.
Подсказка
Решить эту задачу вам помогут 2 метода даты:getDate() и setDate(), один из методов 
должен быть передан в качестве параметра второму.*/


let currentDate = new Date();
let newCurrentDate = currentDate.setDate(currentDate.getDate() + 73);
console.log(new Date(newCurrentDate));




// Задание 10
/*Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
Время: <часы>:<минуты>:<секунды>
Время, которое будет выведено, также хранится в объекте Date.*/

const curDate = new Date();
const optin = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

console.log(curDate.toLocaleDateString('ru-RU', optin));