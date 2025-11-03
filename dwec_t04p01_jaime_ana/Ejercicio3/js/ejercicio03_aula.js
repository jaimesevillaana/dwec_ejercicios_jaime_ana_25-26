console.log("T04 - Ejercicio 03");

function Aula(id, descripcion, curso, maxAlumnos) {
    this.id = id;
    this.descripcion = descripcion;
    this.curso = curso;
    this.maxAlumnos = maxAlumnos;
    this.alumnos = [];
}

Aula.prototype.haySitioAlumnos = function() {
    return this.alumnos.length < this.maxAlumnos;
};

Aula.prototype.agregarAlumno = function(alumno) {
    if (this.haySitioAlumnos()) {
        this.alumnos.push(alumno);
    } else {
        console.log("No hay sitio en el aula.");
    }
    };


Aula.prototype.mostrarDatos = function() {
    return this.alumnos.map(a => a.mostrarInformacion()).join("\n");
};


Aula.prototype.mediaNotas = function() {
    const notas = this.alumnos.map(a => parseFloat(a.notaFinal));
    const total = notas.reduce((a, b) => a + b, 0);
    return (total / notas.length).toFixed(2);
};

Aula.prototype.porcentajeSuspensos = function() {
    const suspensos = this.alumnos.filter(a => !a.estaAprobado()).length;
    const porcentaje = (suspensos / this.alumnos.length) * 100;
    return porcentaje.toFixed(2);
};