//Задание 1
let a = 10;
alert (a);
a = 20;
confirm (a);

//Задание 2
let yearOfIssue = Number(prompt ('года выпуска первого iPhone'));

//Задание 3
let name = prompt ('имя создателя языка JavaScript');

//Задание 4
let one = 10;
let two = 2;
alert (one + two);
alert (one - two);
alert (one * two);
alert (one / two);

//Задание 5
let x = 2;
let result = x**5;
alert (result);

//Задание 6
let c = 9;
let b = 2;
let ost = c%b;
alert (ost);

//Задание 7
let num = 1;
num += 5; 
num -= 3; 
num *= 7; 
num /= 3;
num = ++num;
num = --num;
alert(num);


//Задание 8
let age = Number (prompt( "Сколько вам лет?"))
alert (age)


//Задание 9
const user = {
    name:'Ben',
    age:'62',
    isAdmine: true,
};
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user.name)
alert (user.age)
alert (user.isAdmine = true)


//Задание 10
let userName = prompt ('Как вас зовут?');
let hello = 'Привет, ' + userName + '!';
alert (hello);