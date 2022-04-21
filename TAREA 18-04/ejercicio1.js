//1) Solicita un nombre, la edad y nuestra por consola el mensaje "Hola **___**, tienes **___** años y el año que viene tendrás **___** años".
//Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.

let nombre = prompt('Ingrese su nombre, por favor: ');
let edad = prompt('Ingrese su edad, por favor: ');

console.log(`hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${++ edad} años.`);