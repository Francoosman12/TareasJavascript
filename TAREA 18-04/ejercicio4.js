/* **4)** Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.
*/

let numero = "";
let sumatoria = 0;
let contador = 0;

do {
    numero = parseInt(prompt('Ingresar el número para agregar a la sumatoria:'))
    sumatoria = numero + sumatoria;
    contador++;
} while (sumatoria <= 50);

console.log(`El total acumulado es de ${sumatoria} y se va acumulando ${contador++} números`);