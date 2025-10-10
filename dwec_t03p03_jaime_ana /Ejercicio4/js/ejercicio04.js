
console.log("T03 parte 3 - Ejercicio 04");

let razas = ["pug", "galgo", "breton", "boston", "braco"];
console.log("Array original: ", razas);

//ordenar array alfabeticamente
function ordenarAlfabeticamente(array) {
    let orden = prompt("¿Cómo quieres ordenar el array? Escribe 'ascendente' o 'descendente':").toLowerCase();
    //crear copia del array para no modificar el orifinal
    let arrayCopia = [...array];

    //ordenamos segun la eleccion del usuario
    if (orden === "ascendente") {
        return arrayCopia.sort();
    } else if (orden === "descendente") {
        return arrayCopia.sort((a, b) => b.localeCompare(a));
    } else {
        return "Error: Elige 'ascendente' o 'descendente'";
    }
}

//probamos funcion con orden ascendente
let resultadoAscendente = ordenarAlfabeticamente(razas, "ascendente");
console.log("Array ordenado (ascendentemente): ", resultadoAscendente);

//probamos funcion con orden descendente
let resultadoDescendente = ordenarAlfabeticamente(razas, "descendente");
console.log("Array ordenado (descendente): ", resultadoDescendente);


