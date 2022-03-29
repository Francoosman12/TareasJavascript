//TAREA 1
//NUMERO ALEATORIO ENTRE 1 Y 100
let numeroAleatorio = Math.ceil(Math.random() * 100)
let resultado = numeroAleatorio
console.log('El numero aleatorio es ' + resultado);

//RAIZ CUADRADA
console.log('Su raiz cuadra es ' + Math.sqrt(resultado));

//ELEVADO A LA QUINTA POTENCIA
let exponente = 5
console.log('Su quinta potencia es ' + Math.pow(resultado, exponente));

//TAREA 2
//LISTA DE NUMEROS: 120,250,78,96,-38,45.72,1450,2380.
//NUMERO MENOR:
console.log('El numero menor de la lista es ' + Math.min(
    120,
    250,
    78,
    96,
    -38,
    45.72,
    1450,
    2380
)); 

//NUMERO MAYOR:
console.log('El numero mayor de la lista es ' + Math.max(
    120,
    250,
    78,
    96,
    -38,
    45.72,
    1450,
    2380
));

//TAREA 3
let numero1 = 45.895025
let numero2 = 56.788789
let numero3 = 78.413582
console.log('Los numeros con dos decimales serian: ' + parseFloat(numero1.toFixed(2)) + ', ' + parseFloat(numero2.toFixed(2)) + ' y ' + parseFloat(numero3.toFixed(2)));
console.log('Y redondeados serian: ' + parseInt(numero1) + ', ' + parseInt(numero2) + ' y ' + parseInt(numero3));