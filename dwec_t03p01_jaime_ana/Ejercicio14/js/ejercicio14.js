

console.log("T03 - Ejercicio 14");

let entrada = prompt("Introduce la fecha de tu nacimiento (formato AAAA-MM-DD):");

if (!entrada) {
    alert("No has introducido ninguna fecha");
} else {
    let fechaNacimiento = new Date(entrada);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    //ajustar si todavia no ha cumplido este año
    let mesActual = hoy.getMonth();
    let diaActual = hoy.getDate();
    let mesNacimiento = fechaNacimiento.getMonth();
    let diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento
        && diaActual < diaNacimiento)) {
            edad--;
    }
    alert("Tu edad actual es: " + edad + " años");
}