console.log("T04 - Ejercicio 03");

//variables globales para el estado de la aplicacion
let aulas = AulasPrecargadas;
let profesores = ProfesorManager.getAllProfesores;
//usamos el getter aplanada para obtener una lista unica de asignaturas
let asignaturas = AsignaturaManager.getAllAsignaturas;



//funciones de validacion
function matricularAlumno(alumno, optativasNombre) {
  const curso = alumno.curso;

  //Obtener y matricular obligatorias
  const obligatorias = AsignaturaManager.getAsignaturasObligatorias(curso).slice(0, 2);
  obligatorias.forEach(asig => alumno.matricular(asig));

  //validacion de optativas
  if (optativasNombre.length !== 2) {
    console.log(`ERROR: ${alumno.nombreCompleto} debe elegir exactamente 2 optativas.`);
    return false;
  }

  //buscar los objetos asignatura por nombre
  const optativasElegidas = optativasNombres.map(nombre => AsignaturaManager.findAsignaturaByName(nombre));

  //validacion de que sean diferentes y válidas (tipo optativa)
  if (optativasElegidas.some(a => a.tipo !== 'optativa')) {
    console.log(`ERROR: Optativas no válidas o no encontradas para ${alumno.nombreCompleto}.`);
    return false;
  }

  //validacion de que no haya duplicados
  const nombresElegidos = new Set(optativasNombre);
  if (nombresElegidos.size !== 2) {
    console.log(`ERROR: ${alumno.nombreCompleto} eligió optativas duplicadas.`);
    return false;
  }

  //matricular optativas
  optativasElegidas.forEach(asig => alumno.matricular(asig));
  console.log(`Matricula de ${alumno.nombreCompleto} completada (2 Obligatorias, 2 Optativas).`);
  return true;
}


function asignarAsignaturasAProfesor(profesor, nombreAsignaturas) {
  if (nombreAsignaturas.length !== 2) {
    return false;
  }

  //buscar los objetos asignatura usando el manager
  const asig1 = AsignaturaManager.findAsignaturaByName(nombreAsignaturas[0]);
  const asig2 = AsignaturaManager.findAsignaturaByName(nombreAsignaturas[1]);

  if (!asig1 || !asig2) {
    console.log(`ERROR: No se encontraron una o ambas asignaturas.`);
    return false;
  }

  //validacion de cursos distintos
  if (asig1.curso === asig2.curso) {
    console.log(`ERROR: Las asignaturas deben ser de cursos distintos (C${asig1.curso} y C${asig2.curso}).`);
    return false;
  }

  //validacion de no solapamiento (una asignatura no puede estar en dos profesores)
  const solapamiento = profesores.some(p =>
    p !== profesor && p.asignaturas.some(pa => pa.nombre === asig1.nombre || pa.nombre === asig2.nombre)
  );
  if (solapamiento) {
    console.log(`ERROR: Alguna de las asignaturas ya esta asignada a otro profesor.`);
    return false;
  }

  ProfesorManager.asignarAsignatura(profesor, nombreCompleto, asig1);
  ProfesorManager.asignarAsignatura(profesor, nombreCompleto, asig2);


  //ejemplo de uso de bind
  const getDatosProfesor = profesorMetodos.getDatosContacto.bind(profesor);
  console.log(`Asignación a ${getDatosProfesor()}: OK (${asig1.nombre}, ${asig2.nombre})`);

  return true;
}

//funcionalidades de la aplicacion

//reutilizacion d metodo asignatura con CALL o APPLY
function getResumenAsignatura(asignatura) {
  return AsignaturaMetodos.getResumen.call(asignatura);
}

//consultar alumnos por profesor y asignatura

function consultarAlumnosPorProfesor() {
  console.log("CONSULTA DE ALUMNOS POR PROFESOR Y ASIGNATURA");

  profesores.forEach(prof => {
    if (prof.asignaturas.length > 0) {
      console.log(`Docente: ${prof.nombreCompleto}`);

      prof.asignaturas.forEach(asig => {
        let alumnosEnAsignatura = [];

        aulas.forEach(aula => {
          const alumnoAula = aula.alumnos.filter(a => 
            a.asignaturasMatriculadas.some(m => m.asignatura.nombre === asig.nombre)
          );
          alumnosEnAsignatura.push(...alumnosAula);
        });

        if (alumnosEnAsignatura.length > 0) {
          console.log(`Asignatura: ${getResumenAsignatura(asig)}`);
          alumnosEnAsignatura.forEach(a => console.log(` - ${a.nombreCompleto} (Aula ${a.getId()})`));
        }
      });
    }
  });
}


//insercción de notas
function insertarNotas(nombreAula, nombreAsignatura, notas) {
  const aula = aulas.find(a => a.id === nombreAula);
  const asignatura = AsignaturaManager.findAsignaturaByName(nombreAsignatura);

  if (!aula || !asignatura) {
    console.log("Aula o asignatura no encontrada.");
    return;
  }
  console.log(`INSERCCIÓN DE NOTAS para ${nombreAsignatura} en ${aula.descripcion}`);

  let notasInsertadas = 0;
  aula.alumnos.forEach((alumno) => {
    const nota = notas[alumno.nombreCompleto];
    if (nota !== undefined && alumno.asignarNota(nombreAsignatura, nota)) {
      notasInsertadas++;
    }
  });

  if (notasInsertadas === aula.alumnos.filter(a => a.asignaturasMatriculadas.some(m => m.asignatura.nombre === nombreAsignatura)).legth) {
    console.log(`Notas completas para todos los alumnos matriculados en ${nombreAsignatura}! (${notasInsertadas} notas insertadas)`);
  } else {
    console.log(`Solo se insertaron ${notasInsertadas}. notas.`);

  }
}


//resumen final
function obtenerResumenFinal() {
  console.log("RESUMEN FINAL DE CURSO POR AULA");

  aulas.forEach(aula => {
    if (aula.alumnos.length === 0) {
      return;
    }
    let totalAprobador = 0;
    let totalSuspensos = 0;

    console.log(`[${aula.id}] ${aula.descripcion} - ${aula.alumnos.length} Alumnos`);

    aula.alumnos.forEach(alumno => {
      let notas = alumno.asignaturasMatriculadas.map(m => m.nota).filter(n => typeof n === 'number');

      //requisito: solo calcular si todas las notas estan puestas (todas las matriculadas tienen nota)
      if (notas.legth < alumno.asignaturasMatriculadas.legth) {
        console.log(` - ${alumno.nombreCompleto}: Pendiente de notas.`);
        return;
      }

      let notaMedia = notas.legth > 0 ? (notas.reduce((sum, n) => sum + n, 0) / notas.legth).toFixed(2) : 0;

      const estadoCUrso = notaMedia >= 5 ? "Aprobado" : "Suspenso";
      if (notaMedia >= 5) {
        totalAprobador++;
      } else {
        totalSuspensos++;
      }
      console.log(` - ${alumno.nombreCompleto}: Media ${notaMedia} - ${estadoCUrso}`);
    });






    POR AQUI ME HE QUEDADO
  })
}

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