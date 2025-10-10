
console.log("T03 parte 3 - Ejercicio 05");

let numeros = [1, 3, 9, 5, 0];
console.log("Array original: ", numeros);

function ordenarAlfabeticamente(array) {
  let orden = prompt("¿Cómo quieres ordenar el array? Escribe 'ascendente' o 'descendente'. 'S' para salir:")
  let arrayCopia = [...array];

  if (orden === 's') {
      console.log("Hasta luego!");
      return;
      
    } else if (orden === "descendente") {
        return arrayCopia.sort((a, b) => b - a);
        
    } else if (orden === "ascendente"){
      return arrayCopia.sort((a, b) => a - b);
      
      
    } else {
        return "Error: Elige 'ascendente' o 'descendente'";
    }
}

//probamos funcion con orden ascendente
let resultadoAscendente = ordenarAlfabeticamente(numeros, "ascendente");
console.log("Array ordenado (ascendente): ", resultadoAscendente);

//probamos funcion con orden descendente
let resultadoDescendente = ordenarAlfabeticamente(numeros, "descendente");
console.log("Array ordenado (descendente): ", resultadoDescendente);