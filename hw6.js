//Задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
	if (numbs[i] == 10) 
    break;
 }




//Задание 2
 let exe = [1, 5, 4, 10, 0, 3]; 
 console.log(exe.indexOf(4));
 



//Задание 3
let exits = [1, 3, 5, 10, 20];
exits = exits.join(' ');
console.log(exits);




//Задание 4
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];    
  for (let j = 0; j < 3; j++) {
  arr[i].push(1); 
 }
}
 
console.log(arr);


//Задание 5
let end = [1, 1, 1];
end.push(2, 2, 2)
console.log(end);




//Задание 6
let a = [9, 8, 7, 'a', 6, 5];
a.sort()
a.pop()
console.log(a);



//Задание 7
// alert([9, 8, 7, 6, 5].includes(+prompt('Введите число')) ? 'Да' : 'Нет');



// Задание 8
const rev = 'abcdef';
console.log([...rev].reverse().join(''))




// Задание 9

const view = [
  [1, 2, 3,],
  [4, 5, 6]
];
console.log(result = [].concat([1, 2, 3,],  [4, 5, 6]))




// Задание 10

const cycle = [1, 3, 7, 8, 5, 6];
const res = [];

for (let i = 0; i <= cycle.length - 1; i++) {
  let lastSum = cycle[i];

  for (let z = i + 1; z < cycle.length; z++) {

    let sum = lastSum + cycle[z]; 
    res.push(sum);
    lastSum = sum;
  }
}

console.log(res);




// Задание 11

const square = [2, 8, 16, 4];

const neWsquare = square.map((i) => {
  return i ** 2;
});

console.log(neWsquare);







// Задание 12

const arp = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function neWarp(arp){
  return arp.map((str)  => str.length);
}

console.log(neWarp(arp));


// Задание 13

function filterPositive(array) { 
  console.log ( array.filter((i) => i < 0));
 }

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

