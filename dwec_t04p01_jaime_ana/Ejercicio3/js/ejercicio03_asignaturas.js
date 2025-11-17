console.log("T04 - Ejercicio 03");

//CURSO 1
const asignaturas1 = {
    obligatorias: [
        {nombre: "Programación I", curso: 1, tipo: "obligatoria"},
        {nombre: "Sistemas I", curso: 1, tipo: "obligatoria"},
        {nombre: "Base de datos I", curso: 1, tipo: "obligatoria"},
        {nombre: "Entornos I", curso: 1, tipo: "obligatoria"}
    ],
    optativas: [
        {nombre: "Proyecto intermodular I", curso: 1, tipo: "optativa"},
        {nombre: "Diseño UX I", curso: 1, tipo: "optativa"},
        {nombre: "DWES I", curso: 1, tipo: "optativa"}
    ]
};

//CURSO 2
const asignaturas2 = {
    obligatorias: [
        {nombre: "Programacion II", curso: 2, tipo: "obligatoria"},
        {nombre: "Sistemas II", curso: 2, tipo: "obligatoria"},
        {nombre: "Base de datos II", curso: 2, tipo: "obligatoria"},
        {nombre: "Entornos II", curso: 2, tipo: "obligatoria"}
    ],
    optativas: [
        {nombre: "Proyecto intermodular II", curso: 2, tipo: "optativa"},
        {nombre: "Diseño UX II", curso: 2, tipo: "optativa"},
        {nombre: "DWES II", curso: 2, tipo: "optativa"}
    ]
};

//CURSO 3
const asignaturas3 = {
    obligatorias: [
        {nombre: "Programacion III", curso: 3, tipo: "obligatoria"},
        {nombre: "Sistemas III", curso: 3, tipo: "obligatoria"},
        {nombre: "Base de datos III", curso: 3, tipo: "obligatoria"},
        {nombre: "Entornos III", curso: 3, tipo: "obligatoria"}
    ],
    optativas: [
        {nombre: "Proyecto intermodular III", curso: 3, tipo: "optativa"},
        {nombre: "Diseño UX III", curso: 3, tipo: "optativa"},
        {nombre: "DWES III", curso: 3, tipo: "optativa"}
    ]
};

//CURSO 4
const asignaturas4 = {
    obligatorias: [
        {nombre: "Programacion IV", curso: 4, tipo: "obligatoria"},
        {nombre: "Sistemas IV", curso: 4, tipo: "obligatoria"},
        {nombre: "Base de datos IV", curso: 4, tipo: "obligatoria"},
        {nombre: "Entornos IV", curso: 4, tipo: "obligatoria"}
    ],
    optativas: [
        {nombre: "Proyecto intermodular IV", curso: 4, tipo: "optativa"},
        {nombre: "Diseño UX IV", curso: 4, tipo: "optativa"},
        {nombre: "DWES IV", curso: 4, tipo: "optativa"}
    ]
};

const asignaturasPorCurso = {
    1: asignaturas1,
    2: asignaturas2,
    3: asignaturas3,
    4: asignaturas4
};


//metodo base reutilizable (para call/apply/bind)

const AsignaturaMetodos = {
    //metodo para obtener un resumen
    getResumen: function() {
        //this será objeto literal (asignatura) al que se aplica el metodo.
        return `[${this.curso}] ${this.nombre} ($this.tipo.toUpperCase()})`;
    }
};

//objeto literal gestor (AsignaturaManager)
const AsignaturaManager = {
    asignaturasPorCurso: asignaturasPorCurso,
    //getter para obtener todas las asignaturas
    get getAllAsignaturas() {
        let todas = [];
        for (const curso in this.asignaturasPorCurso) {
            const data = this.asignaturasPorCurso[curso];
            todas = todas.concat(data.obligatorias).concat(data.optativas);
        }
        return todas;
    },

    //obtiene las asignaturas obligatorias de un curso
    getAsignaturasObligatorias: function(curso) {
        const data = this.asignaturasPorCurso[curso];
        return data ? data.obligatorias : [];
    },

    //obtiene todas las asignaturas optativas de todos los cursos
    getAllOptativas() {
        let optativas = [];
        for (const curso in this.asignaturasPorCurso) {
            optativas = optativas.concat(this.asignaturasPorCurso[curso].optativas);
        }
        return optativas;
        },

        //metodo para buscar asignatura por. nombre
        findAsignaturaByName: function(nombre) {
            return this.getAllAsignaturas.find(a => a.nombre === nombre);
        }
    };
    