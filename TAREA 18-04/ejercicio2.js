/***2)** Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza **switch** para pedir los datos según la figura.

- triangulo = b * h/2
- rectangulo = b * h

*/

let figura = prompt('¿Desea calcular el área de un rectangulo (1) o un triangulo(2)?')
let figuraMayuscula = figura.toUpperCase();

switch (figuraMayuscula) {
    case "RECTANGULO":
    case "1":
        let baseR = Number(prompt('Ingrese la base del rectangulo'));
        let alturaR = Number(prompt('Ingrese la altura del rectangulo'));
        let areaR = (baseR * alturaR) / 2;
        console.log(`El area del rectangulo es ${areaR}.`);
        
        break;

    case "TRIANGULO":
    case "2":
        let baseT = Number(prompt('Ingrese la base del triangulo'));
        let alturaT = Number(prompt('Ingrese la altura del triangulo'));
        let areaT = (baseT * alturaT) / 2;
        console.log(`El area del triangulo es ${areaT}`);
        
        break;
        
    default:
        console.log('La operacion ingresada no es la correspondiente.');
        break;
}