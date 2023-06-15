function solucion(inputArray) {

    const productos = [];

    for (let x = 0; x < inputArray.length-1; x++) {
        productos.push(inputArray[x] * inputArray[x + 1]);
        
    }

    return Math.max(...productos);

}

console.log(solucion([3, 6, -2, -5, 7, 3]));