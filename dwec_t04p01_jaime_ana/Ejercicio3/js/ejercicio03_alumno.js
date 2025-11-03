console.log("T04 - Ejercicio 03");

// FUNCIÓN CONSTRUCTORA DE ALUMNO
function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) {
  this.setDni(dni);
  this.setNombre(nombre);
  this.setFechaNacimiento(fechaNacimiento);
  this.setNotas(nota1, nota2, nota3);
  this.setSexo(sexo);

  this.edad = 0;
  this.notaFinal = 0;
  this.asignaturas = []; // ← añadido para el ejercicio 03

  this.calcularEdad();
  this.calcularNota();
}

// GETTERS
Alumno.prototype.getDni = function() { return this.dni; };
Alumno.prototype.getNombre = function() { return this.nombre; };
Alumno.prototype.getEdad = function() { return this.edad; };
Alumno.prototype.getFechaNacimiento = function() { return this.fechaNacimiento; };
Alumno.prototype.getNota1 = function() { return this.nota1; };
Alumno.prototype.getNota2 = function() { return this.nota2; };
Alumno.prototype.getNota3 = function() { return this.nota3; };
Alumno.prototype.getNotaFinal = function() { return this.notaFinal; };
Alumno.prototype.getSexo = function() { return this.sexo; };

// SETTERS

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

Alumno.prototype.setNombre = function(nombre) { this.nombre = nombre; };
Alumno.prototype.setFechaNacimiento = function(fecha) {
  this.fechaNacimiento = new Date(fecha);
  this.calcularEdad();
};
Alumno.prototype.setNotas = function(n1, n2, n3) {
  this.nota1 = n1;
  this.nota2 = n2;
  this.nota3 = n3;
  this.calcularNota();
};
Alumno.prototype.setSexo = function(sexo) { this.sexo = sexo; };

// MÉTODOS FUNCIONALES

// Calcular edad
Alumno.prototype.calcularEdad = function() {
  const hoy = new Date();
  let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
  const m = hoy.getMonth() - this.fechaNacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
    edad--;
  }
  this.edad = edad;
};

// Calcular nota media
Alumno.prototype.calcularNota = function() {
  this.notaFinal = ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
};

// Mostrar información
Alumno.prototype.mostrarInformacion = function() {
  return `DNI: ${this.dni}
Nombre: ${this.nombre}
Edad: ${this.edad} años
Sexo: ${this.sexo}
Notas: [${this.nota1}, ${this.nota2}, ${this.nota3}]
Nota Final: ${this.notaFinal}\n`;
};

// Cambiar notas
Alumno.prototype.cambiarNotas = function(n1, n2, n3) {
  this.nota1 = n1;
  this.nota2 = n2;
  this.nota3 = n3;
  this.calcularNota();
};

// Comparar por nota
Alumno.prototype.comparar = function(otro) {
  if (this.notaFinal > otro.notaFinal) return 1;
  if (this.notaFinal < otro.notaFinal) return -1;
  return 0;
};

// Comprobar si está aprobado
Alumno.prototype.estaAprobado = function() {
  return this.notaFinal >= 5;
};

// AMPLIACIÓN EJERCICIO 03: ASIGNATURAS

// Matricular alumno en asignaturas
Alumno.prototype.matricularAsignaturas = function(asignaturasObligatorias, asignaturasOptativas) {
  this.asignaturas = [];

  if (asignaturasObligatorias.length !== 4) {
    console.log("Debe haber exactamente 4 asignaturas obligatorias.");
  }
  if (asignaturasOptativas.length !== 2) {
    console.log("Debe haber exactamente 2 asignaturas optativas.");
  }

  this.asignaturas.push(...asignaturasObligatorias, ...asignaturasOptativas);
  console.log(`${this.nombre} matriculado en ${this.asignaturas.length} asignaturas.`);
};

// Mostrar las asignaturas matriculadas
Alumno.prototype.mostrarAsignaturas = function() {
  if (!this.asignaturas || this.asignaturas.length === 0) {
    return `${this.nombre} no tiene asignaturas matriculadas.`;
  }

  let info = `Asignaturas de ${this.nombre}:\n`;
  this.asignaturas.forEach(asig => {
    info += `- ${asig.nombre} (${asig.tipo}, curso ${asig.curso})\n`;
  });
  return info;
};
