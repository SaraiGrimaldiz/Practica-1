function sumarNumeros(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

let numeros = [1, 2, 3, 4, 5];
let resultado = sumarNumeros(numeros);
console.log("La suma de los números es: " + resultado);