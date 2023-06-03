// Задание 1

function comparison(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }

}
console.log(comparison(8, 4));
console.log(comparison(6, 6));




// Задание 2

function evenOdd(question, answer) {
    let userAnswer = prompt(question)
    if (userAnswer % 2 !== 0) {
        console.log('Число нечетное');
    }
    else {
        console.log('Число четное')
    }
}
evenOdd('Введите число')




// Задание 3
// 3.1. 

function squareNumber(a) {
    return a * a;
}
console.log(squareNumber(6));

// 3.2.

function squareNumber(a) {
    return a * a;
}
squareNumber(8);




// Задание 4

function userAge(age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}
userAge(prompt('Сколько вам лет?'));



// Задание 5

function mult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(a * b);
    }
}
mult(3, 5);




// Задание 6

function corr(n) {
    if (isNaN(n)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`n в кубе равняется ${n ** 3} `);
    }
}
corr(prompt('Какое число возвести в куб?'));




// Задание 7

function getRectangleArea() {
    return 3, 14 * this.radius ** 2;
};
function getRectanglePerimeter() {
    return 2 * 3, 14 * this.radius;
};

const circle1 = {
    radius: 8,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 14,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


// Задание 8.

function season(month) {
    if (month >= 1 && month <=2 || month === 12) { 
        console.log("Зима"); 
    } else if (month >= 3 && month <= 5) {
        console.log("Весна");     
    } else if (month >= 6 && month <= 8) {  
        console.log("Лето"); 
    } else if (month >= 9 && month <= 11) { 
        console.log("Осень");     
    }
}
season(prompt('Какой номер месяца?'));






