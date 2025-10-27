

console.log("T04 - Ejercicio 02");

function Aula(maxAlumnos, identificador, descripcion, curso) {
    this.alumnos = [];
    this.numAlumnos = 0;
    this.maxAlumnos = maxAlumnos;
    this.identificador = identificador;
    this.descripcion = descripcion;
    this.curso = curso;
}

//getters y setters
Aula.prototype.getAlumnos = function() {
    return this.alumnos;
};

Aula.prototype.getNumAlumnos = function() {
    return this.numAlumnos;
};

Aula.prototype.getMaxAlumnos = function() {
    return this.maxAlumnos;
};

Aula.prototype.getIdentificador = function() {
    return this.identificador;
};

Aula.prototype.getDescripcion = function() {
    return this.descripcion;
};

Aula.prototype.getCurso = function() {
    return this.curso;
};

Aula.prototype.setDescripcion = function(desc) {
    this.descripcion = desc;
};
Aula.prototype.setCurso = function(curso) {
    this.curso = curso;
};

//metodos funcionales
//indicar si hay sitio libre en el aula
Aula.prototype.haySitioAlumnos = function() {
    return this.numAlumnos < this.maxAlumnos;
};

//indicar si hay algun alumno en el aula
Aula.prototype.hayAlumnos = function() {
    return this.numAlumnos > 0;
};

//pide los datos de un alumno y crea el objeto
Aula.prototype.pedirDatosUnAlumno = function() {
    const dni = prompt("DNI del alumno:");
    const nombre = prompt("Nombre del alumno:");
    const fechaNacimiento = prompt("Fecha de nacimiento (yyyy-mm-dd):");
    const nota1 = parseInt(prompt("Nota del primer trimestre:"));
    const nota2 = parseInt(prompt("Nota del segundo trimestre:"));
    const nota3 = parseInt(prompt("Nota del tercer trimestre:"));
    const sexo = prompt("Sexo del alumno (h/m):");

    const nuevoAlumno = new Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo);

    if (nuevoAlumno.getDni() === null) {
        console.log("DNI no válido. Alumno no creado.");
        return null;
    }
    return nuevoAlumno;
};

//Pide los datos de varios alumnos , comprobando si hay sitio.
Aula.prototype.pedirDatos = function() {
    const cantidad = parseInt(prompt("¿Cuántos alumnos desea añadir?"));
    if (this.numAlumnos + cantidad > this.maxAlumnos) {
        console.log("No hay suficiente espacio en el aula para " + cantidad + " alumnos.");
        return [];
    }

    const nuevosAlumnos = [];
    for (let i = 0; i < cantidad; i++) {
        console.log(`Introduciendo datos del alumno... ${i + 1}`);
        const nuevo = this.pedirDatosUnAlumno();
        if (nuevo) {
            nuevosAlumnos.push(nuevo);
        } 
    }
    this.alumnos = this.alumnos.concat(nuevosAlumnos);
    this.numAlumnos += nuevosAlumnos.length;
    return nuevosAlumnos;
};

//devuelve una cadena con todos los datos de los alumno
Aula.prototype.mostrarDatos = function() {
    if (!this.hayAlumnos()) {
        return "El aula está vacia.";
    }
    return this.alumnos.map(a => a.mostrarInformacion()).join("\n");
};

//devuelve la media de las notas finales del aula
Aula.prototype.mediasNota = function() {
    if (!this.hayAlumnos()) {
        return 0;
    }
    const total = this.alumnos.reduce((acc, a) => acc + parseFloat(a.getNotaFinal()), 0);
    return (total / this.alumnos.length).toFixed(2);
};

//devuelve el alumno con mejor nota
Aula.prototype.mejorNota = function() {
    if (!this.hayAlumnos()) {
        return null;
    }
    return this.alumnos.reduce((mejor, a) => 
        parseFloat(a.getNotaFinal()) > parseFloat(mejor.getNotaFinal()) ? a : mejor
    );
};

//devuelve el porcentaje de suspensos(< 5)
Aula.prototype.porcentajeSuspensos = function() {
    if (!this.hayAlumnos()) {
        return 0;
    }
    const suspensos = this.alumnos.filter(a => !a.estaAprobado()).length;
    return ((suspensos / this.alumnos.length) * 100).toFixed(2);
};

//Devuelve texto con el % de aprobados y suspensos
Aula.prototype.mostrarSuspensosAprobados = function() {
    const susp = this.porcentajeSuspensos();
    const aprob = (100 - susp).toFixed(2);
    return `Porcentaje de aprobados: ${aprob}%\nPorcentaje de suspensos: ${susp}%`;
};
