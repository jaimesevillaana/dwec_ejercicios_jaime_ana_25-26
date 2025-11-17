function Aula(id, descripcion, maxAlumnos) {
    this.id = id;
    this.descripcion = descripcion;
    this.maxAlumnos = maxAlumnos;
    this.alumnos = [];
}

//precarga de alumnos
const AulasPrecargadas = [
    new Aula("AU01", "Aula de primero (Curso 1)", 40),
    new Aula("AU02", "Aula de segundo (Curso 2)", 30),
    new Aula("AU03", "Aula de tercero (Curso 3)", 35),
    new Aula("AU04", "Aula de cuarto (Curso 4)", 25)
];

//metodos fuera del constructor usando prototype
Aula.prototype.agregarAlumno = function(alumno) {
    if (this.alumnos.length < this.maxAlumnos) {
        this.alumnos.push(alumno);
        return true;
    }
    return false;
};

Aula.prototype.getCurso = function() {
    //el curso se deduce del ID (ej. AU02 <- 2)
    return parseInt(this.id.substring(2));
};

