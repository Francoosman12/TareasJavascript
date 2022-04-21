/* **6)** Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  //definir un nuevo arreglo
  //ordenarlos por orden alfabético
  //en mayusculas
  // en una lista ordenada
  //1-javascript
  //2-java
}
*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  // lenguajesOrdenados = lenguajes; NO VA
  let lenguajesOrdenados = lenguajes.slice(0);
  // lenguajesOrdenados=lenguajesOrdenados.concat(lenguajes)
  lenguajesOrdenados.sort().map(function (lenguaje, index) {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
}


