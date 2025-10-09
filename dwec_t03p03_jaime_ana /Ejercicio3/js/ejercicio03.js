
console.log("T03 parte 3 - Ejercicio 03");

let miArray = [1, 2, 3, 4, 5];

console.log("Array original:", miArray);

//funcion invertir el array manual
function invertirManual(array) {
    //creamos un nuevo array vacío para guardar el resultado
    let arrayInvertido = [];

    //recorremos el array desde el ultimo elemento hasta el primero
    for (let i = array.length - 1;i >= 0; i--) {

        //añadimos cada elemento al nuevo array
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

//probar la funcion manual
let resultadoManual = invertirManual(miArray);
console.log("Array invertido (manual): " + resultadoManual);


//invertir array usando el metodo reverse()
function invertirConReverse(array) {
    //creamos una copia del array para no modificar el original
    let arrayCopia = [...array];
    //usamos el metodo reverse() para invertir el orden
    return arrayCopia.reverse();
}

//probar la funcion con reverse()
let resultadoReverse = invertirConReverse(miArray);
console.log("Array invertido (con reverse):", resultadoReverse);