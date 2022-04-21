/*  **5)** Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
pares y el tercero impares, ambos arrays estarán vacíos **[ ]**

- Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
- Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
- Mostrar por consola: array de pares e impares

**Tip: se recomienda el uso de for of**
*/

let numeros = [1, 2, 3, 4, 5];
let par = [];
let impar = [];
let operador = Math.ceil(Math.random() * 10);
let multiplicacion = numeros.map(function (x) {
    return x * operador;});

for (const num of multiplicacion) {
    if (num % 2 === 0) {
        par.push(num);
    } else {
        impar.push(num);
    }
}

console.log(`El número multiplicador es ${operador}`);
console.log(`Los números pares son: ${par}`);
console.log(`Los números impares son: ${impar}`);