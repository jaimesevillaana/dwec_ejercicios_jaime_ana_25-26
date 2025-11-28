console.log("T02 - Ejercicio 01");

class Autor {

    static #contadorAutores = 1;


    #id;
    #nombre;
    #fechaNacimiento;
    #nacionalidad; 

    constructor(nombre, fechaNacimiento, nacionalidad) {

        this.#id = Autor.#contadorAutores++;
        this.#nombre = nombre;
        this.#fechaNacimiento = fechaNacimiento;
        this.#nacionalidad = nacionalidad;

    }

    //getters
    get id() {
        return this.#id;
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

    //setter 

    set nombre(valor) {
        if (!Util.validarNombrePersona(valor)) {
            throw new Error("Autor: Nombre invalido. Debe tener al menos 3 letras");
        }
        this.#nombre = valor.trim();
    }

    set fechaNacimiento(valorCadenaOFecha) {
        const fechaObj = new Date(valorCadenaOFecha);

        if (!Util.validarFecha(fechaObj)) {
            throw new Error("Autor: Fecha de nacimiento invalida.");
        }
        this.#fechaNacimiento = fechaObj;
    }

    set nacionalidad(valor) {
        if (typeof valor !== "string" || valor.trim().length < 3) {
            throw new Error("Autor: Nacionalidad invalida. Debe tener al menos 3 letras");
        }
        this.#nacionalidad = valor.trim();
    }

    //metodos

    mostrarAutor() {
        return `Autor: ${this.#nombre} (${this.#nacionalidad}), nacido el ${this.#fechaNacimiento.toLocaleDateString()}`;
    }
    toString() {
        return this.mostrarAutor();
    }
}