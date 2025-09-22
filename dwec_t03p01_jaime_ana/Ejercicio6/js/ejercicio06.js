

console.log("T03 - Ejercicio 06");

let entrada = prompt("Introduce una fecha (dd/mm/yyyy, o dd-mm-yyyy 0 dd mm yyyy):");

if(!entrada) {
    console.log("No se ha introducido ninguna fecha.");
} else {
    let separador = "-";

    //detectar el separador usado
    if(entrada.includes("/")) {
        separador = "/";
    } else if(entrada.includes(" ")) {
        separador = " ";
    } 
    // Dividir la fecha en partess
    let partes = entrada.split(separador);

    if(partes.length !== 3) {
        console.log("Formato de fecha no válido.");
    } else {
        let dia = parseInt(partes[0], 10);
        let mmes = parseInt(partes[1], 10) - 1;
        let anio = parseInt(partes[2], 10);

        //crear objeto Date
        let fecha = new Date(anio, mmes, dia);

        //comprobar si la fecha es válida
        if(fecha.getFullYear() === anio && 
        fecha.getMonth() === mmes && 
        fecha.getDate() === dia) {
            console.log("Fecha válida: ", fecha.toDateString());
        } else {
            console.log("Fecha no válida.");
        }
    }
}   
