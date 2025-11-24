console.log("T02 - Ejercicio 01");


class Libros {

    constructor() {
        this.libros = [];
    }


    //getters

    get libros() {
        return [...this.libros];
    }

    addLibro(libro) {
        if (!(libro instanceof Libro)) {
            throw new Error("No es una instancia de Libro");
        }
        if (this.libros.findLibro(libro.isbn)) {
            throw new Error("Ya existe un libro con ese ISBN");
        }
        this.#libros.push(libro);
        console.log(`Libro con ISBN ${libro.isbn} añadido.`);
    }

    findLibro(isbn) {
        if (!Util.validarEntero(isbn) || isbn <= 0) {
            return this.#libros.find(libro => libro.isbn === isbn);
        }
    }  

}
