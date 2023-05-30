//Задание 1

let hello = 0;
while (hello < 2) {
    console.log('Привет');
    hello++;
}


//Задание 2
let num = 1;
while (num <= 5) {
    console.log (num);
    num++;
}


//Задание 3
let tru = 7;
while (tru <= 25) {
    console.log (tru);
    tru++;
}


//Задание 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
};
for (sal in obj) {
    console.log (`${sal} - зарплата ${obj[sal]} долларов.`);
}


//Задание 5

let n = 1000;
num = 0;
for (let n = 1000; n >= 50; num++) {
   n /= 2
       console.log(num);
}



//Задание 6
let day = 5;
let month = 31;
day += 7
day <= 31
console.log (`Сегодня пятница, ${day} -е число. Необходимо подготовить отчет.`);