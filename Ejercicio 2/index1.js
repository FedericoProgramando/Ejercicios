function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let arrays = [];

for(let i=1;i<=10;i++) {
    arrays.push(getRandomInt(1, 100));
}    

console.log(arrays);