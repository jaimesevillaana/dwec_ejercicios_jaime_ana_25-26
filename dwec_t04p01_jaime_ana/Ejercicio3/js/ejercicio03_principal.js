console.log("T04 - Ejercicio 03");

function funcionPrueba3() {
    console.log("Simulación del Aula AU01");

    //crear aula primer curso
    const aula = new Aula("AU01", "Aula de primero", 1, 24);

    //crear profesores
    const prof1 = new Profesor("Jaime Sevilla", "jaime@colegio.com");
    const prof2 = new Profesor("Ana García", "ana@colegio.com");

    prof1.asignarAsignatura("Programación I");
    prof1.asignarAsignatura("DWEC I");
    prof2.asignarAsignatura("DIW I");
    prof2.asignarAsignatura("DEWS I");

    //crear alumnos
    const alumnos = [
        new Alumno("12345678Z", "Luis Pérez", "2003-05-12", "H"),
        new Alumno("87654321X", "Marta López", "2002-11-23", "M"),
        new Alumno("11111111H", "Carlos Sánchez", "2003-07-30", "H"),
        new Alumno("22222222J", "Lucía Fernández", "2002-03-15", "M")
    ];


    //mtricular asignaturas
    const obligatorias = asignaturasPorCurso[2].obligatorias;
  const optativas = ["DWES I", "Proyecto Intermodular I"];
  alumnos.forEach(al => {
    al.matricularAsignaturas(
      obligatorias.concat(optativas).map(nombre => ({ nombre, nota: (Math.random() * 10).toFixed(2) }))
    );
    al.calcularNotaFinal();
    aula.agregarAlumno(al);
    });

    //mostrar resumen
    console.log("PROFESORES");
    console.log(prof1.mostrarInfo());
    console.log(prof2.mostrarInfo());

    console.log("ALUMNOS MATRICULADOS EN AU01");
    console.log(aula.mostrarDatos());

    console.log("MEDIA DEL AULA AU01");
    console.log(`Media: ${aula.mediaNotas()}`);

    console.log("PORCENTAJE DE SUSPENSOS EN AU01");
    console.log(`Porcentaje de suspensos: ${aula.porcentajeSuspensos()}%`);
}

funcionPrueba3();