console.log("T02 - Ejercicio 01");

class Autor {

    static ultimoId = 0;

    #id;
    #nombreCompleto;
    #libros; // array de ISBN (números)

    constructor(nombreCompleto) {

        if (!Util.validarNombrePersona(nombreCompleto)) {
            throw new Error("ERROR: nombre de autor inválido");
        }

        this.#id = ++Autor.ultimoId;
        this.#nombreCompleto = nombreCompleto.trim();
        this.#libros = [];
    }

    get id() {
        return this.#id;
    }

    get nombreCompleto() {
        return this.#nombreCompleto;
    }

    get libros() {
        return [...this.#libros]; // copia de seguridad
    }

    insertarLibro(isbn) {
        if (!Util.validarEntero(isbn)) {
            throw new Error("ERROR: ISBN inválido al insertar libro en Autor");
        }
        const n = Number(isbn);
        if (!this.#libros.includes(n)) {
            this.#libros.push(n);
        }
        return this.#libros.length;
    }

    mostrarDatosAutor() {
        return `ID Autor: ${this.#id} - ${this.#nombreCompleto} - Libros escritos: ${this.#libros.length}`;
    }
    
}
