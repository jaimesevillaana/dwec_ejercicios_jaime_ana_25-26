

console.log("T03 - Ejercicio 07");

let entrada = prompt("Introduce una hora (hh:mm, o hh-mm 0 hh.mm):");

if(!entrada) {
    console.log("No se ha introducido ninguna hora.");
} else {
    let separador = ":";

    //detectar el separador usado
    if(entrada.includes("-")) {
        separador = "-";
    } else if(entrada.includes(".")) {
        separador = ".";
    } 
    // Dividir la hora en partes
    let partes = entrada.split(separador);

    if(partes.length !== 2) {
        console.log("Formato de hora no válido.");
    } else {
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);

        //comprobar validez
        if(!isNaN (horas) && !isNaN (minutos) &&
        horas >= 0 && horas < 24 && minutos >= 0 && minutos < 60) {
            console.log("Hora válida: ", entrada);
        } else {
            console.log("Hora no válida.");
        }
    }
}   
