// Задание 1
let password = 'пароль';
let enter = prompt('Введите пароль');
let message;
message = (password === enter) ? 'Пароль введен верно' :
    'Пароль введен неправильно';
console.log(message);




//Задание 2
let c = 8;
if (c >= 0 && c <= 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};//Верно

c = 0;
if (c >= 0 && c <= 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};//Верно

c = 10;
if (c >= 0 && c <= 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};//Верно

c = -3;
if (c >= 0 && c <= 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};//Неверно

c = 2;
if (c >= 0 && c <= 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
};//Верно




// Задание 3
let d = 15;
let e = 10;
if (d > 100 || e > 100) {
    console.log('Верно')
}
else {
    console.log('Неверно')
}; //Неверно




// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));



//Задание 5 
let season = prompt('Введите месяц ?');
let monthNumber = 12;
switch (season) {
    case '1':
        console.log('Месяц январь, сезон Зима');
        break;
    case '2':
        console.log('Месяц февраль, сезон Зима');
        break;
    case '3':
        console.log('Месяц март, сезон Весна');
        break;
    case '4':
        console.log('Месяц апрель, сезон Весна');
        break;
    case '5':
        console.log('Месяц май, сезон Весна');
        break;
    case '6':
        console.log('Месяц июнь, сезон Лето');
        break;
    case '7':
        console.log('Месяц июль, сезон Лето');
        break;
    case '8':
        console.log('Месяц август, сезон Лето');
        break;
    case '9':
        console.log('Месяц сентябрь, сезон Осень');
        break;
    case '10':
        console.log('Месяц октябрь, сезон Осень');
        break;
    case '11':
        console.log('Месяц ноябрь, сезон Осень');
        break;
    case '12':
        console.log('Месяц декабрь, сезон Зима');
        break;
    default:
        console.log('Нет такого месяца');
        break;
}



//Задание 7
let check = Number(prompt('Пожалуйста, введите любое число'));
if (check % 2 != 0) {
    alert('Число нечетное')
}
else {
    console.log('Число четное')
}

//Задание 8
let ios = 0;
let Android = 1;
let clientOS = (prompt('Пожалуйста, введите число: для iOS - 0, для Android - 1'));
if (clientOS = ios) {
    alert('Установите версию приложения для iOS по ссылке')
}
else {
    alert('Установите версию приложения для Android по ссылке')
}
// не выходит каменный цветок((( в if надо что то указать но что непойму пока



//Задание 9

let sistem = (prompt('операционная система телефона (iOS - 0, Android - 1)'));
let year = (prompt('года производства'));
let clientDeviceYear = 2015;
if (sistem === 0, year <= 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
}
else { alert('Установите облегченную версию приложения для Android по ссылке') }
if (sistem === 0, year > 2015) {
    alert('Установите версию приложения для iOS по ссылке')
}
else { alert('Установите версию приложения для Android по ссылке') }
