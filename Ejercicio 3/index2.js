function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let arrays = [];

for(let i=1; i<=10; i++){
    arrays.push(getRandomInt(1, 100));
}

let arrays2 = arrays.slice();

arrays2.push(7);

console.log('Primero');
console.log(arrays);

console.log('Segundo');
console.log(arrays2);