console.log("T04 - Ejercicio 03");

const ProfesoresPrecargados = [
    { nombreCompleto: "Laura García", Email: "laura@edu.es", Asignaturas: []},
    { nombreCompleto: "David Perez", Email: "david@edu.es", Asignaturas: []},
    { nombreCompleto: "Ana Jaime", Email: "ana@edu.es", Asignaturas: []},
    { nombreCompleto: "Alberto Sanchez", Email: "Alberto@edu.es", Asignaturas: []}
];

const ProfesorManager = {
    profesores: ProfesoresPrecargados,
    get getAllProfesores() {
        return this.profesores;
    },

    asignarAsignatura: function(nombreProfesor, asignatura) {
        const profesor = this.profesores.find(p => p.nombreCompleto === nombreProfesor);
        if (profesor) {
            profesor.asignaturas.push(asignatura);
            return true;
        }
        return false;
    }
};

//metodo a ser reutilizado con bind
const profesorMetodos = {
    getDatosContacto: function() {
        return `${this.nombreCompleto} (${this.email})`;
    }
};
