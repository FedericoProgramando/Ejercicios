const numero1 = prompt("Ingrese el numero 1 aqui");
const numero2 = prompt("Ingrese el numero 2 aqui");

const resta = numero1-numero2;

if (resta > 0) {
    console.log("Es mayor a 0");

    let imparpar = resta % 2;
    if (imparpar == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }

} else {
    console.log("Es menor o igual a 0");
}