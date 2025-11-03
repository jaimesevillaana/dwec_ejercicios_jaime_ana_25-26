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


function funcionPrueba2Ampliado() {
    console.log("Ampliacion Aula con Grupos");

    const aula = new Aula(5, "A1", "Aula de DWEC", 2);


    const a1 = new Alumno("71217113M", "Ana", "2000-05-15", 7.5, 8.2, 9.1, 'm');
    const a2 = new Alumno("87654321B", "Angel", "1998-10-20", 6.5, 5.8, 7.0, 'h');
    const a3 = new Alumno("12345678Z", "Luis", "1999-03-10", 4.0, 5.0, 6.0, 'h');
    const a4 = new Alumno("23456789Y", "Marta", "2001-07-25", 9.0, 8.5, 9.5, 'm');

    aula.alumnos.push(a1, a2, a3, a4);

    let opcion;
    do {
        opcion = prompt(
            `Menu ampliado de aula \n
            1. Crear grupo
            2. Agregar alumno a un grupo
            3. Mostrar alumnos por grupo
            4. Eliminar un grupo
            5. Mostrar resumen de grupos
            6. Calcular media de un grupo
            7. Mostrar alumno con mejor nota de un grupo
            8. Porcentaje de aprobados en un grupo
            0. Salir
            `
        );

        switch (opcion) {
        case "1":
            const nombreGrupo = prompt("Nombre del nuevo grupo:");
            aula.crearGrupo(nombreGrupo);
            break;
        case "2":
            const dni = prompt("Introduce el DNI del alumno:");
            const grupo = prompt("Introduce el nombre del grupo:");
            const alumno = aula.alumnos.find(a => a.getDni() === dni);
            if (alumno) {
                aula.agregarAlumnoAGrupo(alumno, grupo);
            } else {
                console.log("Alumno no encontrado.");
            }
            break;
        case "3":
            const g = prompt("Nombre del grupo a mostrar:");
            console.log(aula.mostrarAlumnosPorGrupo(g));
            break;
        case "4":
            const grupoEliminar = prompt("Nombre del grupo a eliminar:");
            aula.eliminarGrupo(grupoEliminar);
            break;
        case "5":
            console.log(aula.mostrarResumenGrupos());
            break;
        case "6":
            const grupoMedia = prompt("Grupo para calcular la media:");
            console.log(`Media del ${grupoMedia}: ${aula.mediaGrupo(grupoMedia)}`);
            break;
        case "7":
            const grupoMejor = prompt("Grupo para buscar mejor nota:");
            const mejor = aula.mejorNotaGrupo(grupoMejor);
            console.log(mejor ? mejor.mostrarInformacion() : "No hay alumnos en ese grupo.");
            break;
        case "8":
            const grupoSusp = prompt("De que grupo quieres calcular suspensos:");
            console.log(`${aula.porcentajeSuspensosGrupo(grupoSusp)}% de suspensos en ${grupoSusp}`);
            break;
        case "0":
            console.log("Saliendo del menú ampliado.");
            break;
        default:
            console.log("Opción no válida.");
        }
    } while (opcion !== "0");
}

funcionPrueba2Ampliado();