console.log("T02 - Ejercicio 01");

class Autor {
    #nombre;
    #fechaNacimiento;
    #nacionalidad; 

    constructor(nombre, fechaNacimiento, nacionalidad) {
        if (!Util.validarNombrePersona(nombre)) {
            throw new Error("Nombre de autor no válido");
        }
        if (!Util.validarFecha(new Date(fechaNacimiento))) {
            throw new Error("Fecha de nacimiento no válida");
        }
        if (typeof nacionalidad !== "string" || nacionalidad.trim().length < 3) {
            throw new Error("Nacionalidad no válida");
        }
        this.#nombre = nombre;
        this.#fechaNacimiento = new Date(fechaNacimiento);
        this.#nacionalidad = nacionalidad;
    }

    get nombre() {
        return this.#nombre;
    }
    get fechaNacimiento() {
        return this.#fechaNacimiento;
    }
    get nacionalidad() {
        return this.#nacionalidad;
    }

    mostrarAutor() {
        return `Autor: ${this.#nombre} (${this.#nacionalidad}), nacido el ${this.#fechaNacimiento.toLocaleDateString()}`;
    }
}