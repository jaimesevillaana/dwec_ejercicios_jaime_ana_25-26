

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

        //crear fecha
        let fecha = new Date();
        fecha.setHours(horas, minutos, 0, 0);

        //validar
        if (fecha.getHours() === horas && fecha.getMinutes() === minutos) {
            console.log("Hora válida:", fecha.toLocaleTimeString());
        } else {
            console.log("Hora no válida.")
        }
    }
}   
