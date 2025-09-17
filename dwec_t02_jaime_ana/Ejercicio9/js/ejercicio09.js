console.log("T02 - Ejercicio 09");

function esMultiploDeDos(num) {
    return num % 2 === 0;
}

function esMultiploDeTres(num) {
    return num % 3 === 0;
}

function esMultiploDeCinco(num) {
    return num % 5 === 0;
}

let num = parseInt(prompt("Introduce un numero:"));

if (isNaN(num)) {
    alert("Por favor, introduce un número válido.");
} else {

    let opcion; 

    do {
        opcion = parseInt(prompt("Elige una opción:\n1. Calcular si es múltiplo de 2\n2. Calcular si es múltiplo de 3\n3. Clacular si es múltiplo de 5\n4. Salir"));
        switch (opcion) {
            case 1:
                alert(esMultiploDeDos(num) ? num + " es múltiplo de 2" : num + " no es múltiplo de 2");
                break;
            case 2:
                alert(esMultiploDeTres(num) ? num + " es múltiplo de 3" : num + " no es múltiplo de 3");
                break;
            case 3:
                alert(esMultiploDeCinco(num) ? num + " es múltiplo de 5" : num + " no es múltiplo de 5");
                break;
            case 4:
                alert("Gracias por participar!.");
                break;
        
            default:
                alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
                break;
        }
    } while (opcion != 4);
}