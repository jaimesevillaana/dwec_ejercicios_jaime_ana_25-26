console.log("T04 - Ejercicio 02 - Ampliación");

//propiedad para grupos
Aula.prototype.grupos = new Set();
Aula.prototype.asignaciones = {};

//crear nuevo grupo
Aula.prototype.crearGrupo = function(nombre) {
    if (this.grupos.has(nombre)) {
        console.log("El grupo ya existe.");
        return false;
    }
    this.grupos.add(nombre);
    this.asignaciones[nombre] = [];
    console.log( `Grupo ${nombre} creado.` );
    return true;
};

//asignar un grupo a un alumno
Aula.prototype.agregarAlumnoAGrupo = function(alumno, nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        console.log("El grupo no existe. Crea el grupo primero");
        return;
    }

//eliminar al alumno de cualquier grupo previo
    for (let grupo in this.asignaciones) {
        this.asignaciones[grupo] = this.asignaciones[grupo].filter(a => a.getDni() !== alumno.getDni());
}

this.asignaciones[nombreGrupo].push(alumno);
console.log(`Alumno ${alumno.getNombre()} agregado al grupo ${nombreGrupo}.`);
};



//mostrar alumnos por grupo
Aula.prototype.mostrarAlumnosPorGrupo = function(nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        return "El grupo no existe.";
    }
    const lista = this.asignaciones[nombreGrupo];
    if (lista.length === 0) {
        return `No hay alumnos en el grupo ${nombreGrupo}.`;
    }
    let salida = `Alumnos en el grupo ${nombreGrupo}:\n\n`;
    lista.forEach(a => {
        salida += a.mostrarInformacion() + "\n";
    });
    return salida;
};


//eliminar grupo
Aula.prototype.eliminarGrupo = function(nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        console.log("El grupo no existe.");
        return;
    }
    this.grupos.delete(nombreGrupo);
    delete this.asignaciones[nombreGrupo];
    console.log(`Grupo ${nombreGrupo} eliminado.`);
};

//mostrar resumen de grupos
Aula.prototype.mostrarResumenGrupos = function() {
    if (this.grupos.size === 0) {
        return "No hay grupos creados.";
    }
    let resumen = "Resumen de grupos:\n\n";
    for (let grupo of this.grupos) {
        resumen += `${grupo}: ${this.asignaciones[grupo].length} alumno(s)\n`;
    }
    return resumen;
};

//calcular media de notas de un grupo
Aula.prototype.mediaGrupo = function(nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        return 0;
    }
    const lista = this.asignaciones[nombreGrupo];
    if (lista.length === 0) {
        return 0;
    }
    const suma = lista.reduce((acc, a) => acc + parseFloat(a.getNotaFinal()), 0);
    return (suma / lista.length).toFixed(2);
};

//mejor alumno del grupo
Aula.prototype.mejorAlumnoGrupo = function(nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        return null;
    }
    const lista = this.asignaciones[nombreGrupo];
    if (lista.length === 0) {
        return null;
    }
    return lista.reduce((mejor, actual) => 
        parseFloat(actual.getNotaFinal()) > parseFloat(mejor.getNotaFinal()) ? actual : mejor
    );
};

//mostrar todos los alumnos con su grupo
Aula.prototype.mostrarTodosAlumnosConGrupo = function() {
    if (!this.hayAlumnos()) {
        return "No hay alumnos matriculados";
    }

    let texto = "Listado de alumnos y sus grupos:\n\n";
    this.alumnos.forEach(a => {
        const grupo = a.grupo ? a.grupo : "Sin grupo asignado";
        texto += `${a.getNombre()} (${a.getDni()}) -> ${grupo}\n`;
    });
    return texto;
};

//mmostrar alumnos de un grupo concreto
Aula.prototype.mostrarTodosAlumnosConGrupo = function(nombreGrupo) {
    const filtrados = this.alumnos.filter(a => a.grupo === nombreGrupo);
    if (filtrados.length === 0) {
        return `No hay alumnos en el ${nombreGrupo}`;           
    }
    return filtrados.map(a => a.mostratInformacion()).join("\n");
};

//eliminar un grupo
Aula.prototype.eliminarGrupo = function(nombreGrupo) {
    if (!this.grupos.has(nombreGrupo)) {
        console.log("El grupo no existe.");
        return;
    }
    this.alumnos.forEach(a => {
        if (a.grupo === nombreGrupo) {
            delete a.grupo;
        }});
        this.grupos.delete(nombreGrupo);
        console.log(`El grupo ¢{nombreGrupo} ha sido eliminado.`);
};

//mostrar resumen de grupos y cantidad de alumnos
Aula.prototype.mostrarResumenGrupos = function() {
    if (this.grupos.size === 0) {
        return "No hay grupos creados.";

        let resumen = "Resumen de grupos:\n\n";
        this.grupos.forEach(gr => {
            const num = this.alumnos.filter(a.grupo === gr).length;
            resumen += `${gr}: ${num} alumno(s)\n`;
    });
        return resumen; 
    }};

    //calcular media de un grupo
    Aula.prototype.mediaGrupo = function(nombreGrupo) {
        const grupo = this.alumnos.filter(a => a.grupo === nombreGrupo);
        if (grupo.length === 0) {
            return 0;
        }
        const total = grupo.reduce((acc, a) => acc + parseFloat(a.getNotaFinal()), 0);
        return (total / grupo.length).toFixed(2);
    };

    //mejor nota dentro de un grupo
    Aula.prototype.mejorNotaGrupo = function(nombreGrupo) {
        const grupo = this.alumnos.filter(a => a.grupo === nombreGrupo);
        if (grupo.length === 0) {
            return null;
        }
        return grupo.reduce((mejor, a) => 
            parseFloat(a.getNotaFinal()) > parseFloat(mejor.getNotaFinal()) ? a : mejor
        );
    };

    //porcentaje de suspensos en un grupo
    Aula.prototype.porcentajeSuspensosGrupo = function(nombreGrupo) {
        const grupo = this.alumnos.filter(a => a.grupo === nombreGrupo);
        if (grupo.length === 0) {
            return 0;
        }
        const suspensos = grupo.filter(a => !a.estaAprobado()).length;
        return ((suspensos / grupo.length) * 100).toFixed(2);
    };