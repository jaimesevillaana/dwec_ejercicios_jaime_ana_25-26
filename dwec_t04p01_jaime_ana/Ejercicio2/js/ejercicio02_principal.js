console.log("T04 - Ejercicio 02");

function funcionPrueba2() {
    console.log("Creando aula...");
    const aula1 = new Aula(3, "A101", "Aula de DWEC", 2);
    console.log("¿Hay sitio en el aula?", aula1.haySitioAlumnos());

    aula1.pedirDatos();

    console.log("Datos de los alunnos:");
    console.log(aula1.mostrarDatos());

    console.log("Media de notas:", aula1.mediasNota());
    const mejor = aula1.mejorNota();
    if (mejor) {
        console.log("Mejor nota:", mejor.mostrarInformacion());
    }
    console.log(aula1.mostrarSuspensosAprobados());
};
funcionPrueba2();