console.log("T02 - Ejercicio 01");

class Cliente {

    static #contadorClientes = 1;

    #id;
    #nombre;
    #apellidos;
    #email;

    constructor(nombre, apellidos, email) {

        this.#id = Cliente.#contadorClientes++;
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#email = email;

    }

    //getters
    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    get email() {
        return this.#email;
    }
    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellidos}`;
    }

    //setters
    set nombre(valor) {
        if (!Util.validarNombrePersona(valor)) {
            throw new Error("Cliente: Nombre invalido. Debe tener al menos 3 letras");
        }
        this.#nombre = valor.trim();
    }

    set apellidos(valor) {
        if (!Util.validarNombrePersona(valor)) {
            throw new Error("Cliente: Apellidos invalidos. Debe tener al menos 3 letras");
        }
        this.#apellidos = valor.trim();
    }

    set email(valor) {
        if (typeof valor !== "string" || !valor.includes("@") || valor.trim().length < 5) {
            throw new Error("Cliente: Email invalido.");
        }
        this.#email = valor.trim().toLowerCase();
    }

    //metodos

    mostrarCliente() {
        return `Cliente [ID: ${this.#id}] - Nombre: ${this.nombreCompleto} - Email: ${this.#email}`;
    }

}

