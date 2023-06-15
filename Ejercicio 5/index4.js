let balloon = {
    red: 20,
    green: 12,
    blue: 8,
    yellow: 1,
    white: 5,
}

let balloonQuantity = 0;
for(color in balloon) {
    console.log(color);
    console.log(balloon[color]);
    balloonQuantity += balloon[color];
}

console.log(balloonQuantity);