/* **3)** Solicita un número e imprime todos los números pares e impares
desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
   1 - es impar
   2 - es par
   3 - es impar
   4 - es par
   5 - es impar
*/

let numero = Number(prompt('Ingrese un número'));

for (let i = 0; i <= numero; i++) {
   if (i % 2 === 0) {
      console.log(`${i}- El número es par`);
   } else{
      console.log(`${i}- El número es impar`);
   }
}