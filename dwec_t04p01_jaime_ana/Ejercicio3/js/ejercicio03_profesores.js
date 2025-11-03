console.log("T04 - Ejercicio 03");

function Profesor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.asignaturas = [];
}

Profesor.prototype.asignarAsignatura = function(asignatura) {
    this.asignaturas.push(asignatura);
};

Profesor.prototype.mostrarInfo = function() {
    return `Profesor: ${this.nombre}, Correo: ${this.correo}, Asignaturas: ${this.asignaturas.join(", ")}`;
};