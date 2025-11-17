console.log("T04 - Ejercicio 03");

// FUNCIÓN CONSTRUCTORA DE ALUMNO
function Alumno(id, nombreCompleto, curso) {
  //asumimos datos correctos
  this.id = id;
  this.nombreCompleto = nombreCompleto;
  this.curso = curso;

  //nuevo formato de almacenamiento de asignaturas y notas
  //almacena: [{asignatura: {nombre, curso, tipo}, nota: null}]
  this.asignaturasMatriculadas = [];
}

//nuevo metodo para matricular una asignatura
Alumno.prototype.matricular = function(asignatura, notaInicial = null) {
  const maxAsignaturas = 4;

  //validacion: No exceder el limite de 4 y no matricular la misma asignatura 2 veces
  if (this.asignaturasMatriculadas.length < maxAsignaturas &&
    !this.asignaturasMatriculadas.some(m => m.asignatura.nombre === asignatura.nombre)) {
      this.asignaturasMatriculadas.push({ asignatura: asignatura, nota: notaInicial });
      return true;
    }
    return false;
};

//nuevo metodo para asignar una nota final a una asignatura
Alumno.prototype.asignarNota = function(nombreAsignatura, nota) {
  const matricula = this.asignaturasMatriculadas.find(m => m.asignatura.nombre === nombreAsignatura);
  //validacion basica de la nota
  if (matricula && typeof nota === 'number' && nota >= 0 && nota <= 10) {
    matricula.nota = nota;
    return true;
  }
  return false;
};

//nuevo metodo para obtener la nota media del alumno
Alumno.prototype.getNotaMedia = function() {
  const notas = this.asignaturasMatriculadas.map(m => m.nota).filter(n => typeof n === 'number');

  //solo si tiene todas las notas puestas, devolvemos la media
  if (notas.length < this.asignaturasMatriculadas.length) {
    return null; //devuelve null si faltan notas
  }

  if (notas.length === 0) {
    return 0; //si no esta matriculado o no hay notas.
  }

  const media = notas.reduce((sum, n) => sum + n, 0) / notas.length;
  return parseFloat(media.toFixed(2));
};

//getters y setter requeridos 
//getter para el id (reemplaza getDni)
Object.prototype.getId = function() {
  //verificamos que la propiedad exista antes de devolverla
  if (this.id !== undefined) {
    return this.id;
  }
  if (this.dni !== undefined) {
    return this.dni; //si venia del dni original
  }
  return null;
};

// SETTERS para el nombre completo
Object.prototype.setNombreCompleto = function(nombre) {
  if (this.nombreCompleto !== undefined) {
    this.nombreCompleto = nombre;
  }
};

// Validación del DNI
Alumno.prototype.setDni = function(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const dniRegex = /^\d{8}[A-Z]$/;

  if (!dniRegex.test(dni)) {
    console.log("DNI no válido: formato incorrecto.");
    this.dni = null;
    return;
  }

  const numero = parseInt(dni.substring(0, 8), 10);
  const letraCorrecta = letras[numero % 23];
  const letraDni = dni.charAt(8).toUpperCase();

  if (letraCorrecta !== letraDni) {
    console.log("DNI no válido: letra incorrecta.");
    this.dni = null;
  } else {
    this.dni = dni;
  }
};

//getter para obtener el curso
Object.prototype.getCurso = function() {
  return this.curso;
}
