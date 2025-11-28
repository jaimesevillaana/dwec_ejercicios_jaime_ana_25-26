console.log("T02 - Ejercicio 01");


class Libros {

    #listaLibros;

    constructor() {
        this.#listaLibros = new Map();
    }


    addLibro(libro) {
        if (!(libro instanceof Libro)) {
            throw new Error("No es una instancia de Libro");
        }
        if (this.#listaLibros.has(libro.isbn)) {
            throw new Error("Ya existe un libro con ese ISBN");
        }
        this.#listaLibros.set(libro.isbn, libro);
        console.log(`Libro con ISBN ${libro.isbn} añadido.`);
    }
    //getters

    findLibro(isbn) {
        if (!Util.validarEntero(isbn) || Number(isbn) <= 0) {
            return null;
        } 
        return this.#listaLibros.get(Number(isbn)) || null;
    }


    removeLibro(isbn) {
        if (!Util.validarEntero(isbn) || Number(isbn) <= 0) {
            return false;
        }
        return this.#listaLibros.delete(Number(isbn));
    }

    get size() {
        return this.#listaLibros.size;
    }

    mostrarTodosLosLibros() {
        if (this.size === 0) {
            return "*** Colección Libros (total: 0) ***\nNo hay libros en la colección.";
        }
        let output = `*** Colección Libros (total: ${this.size}) ***\n`;
        this.#listaLibros.forEach((libro) => {
            output+= `${libro.mostrarDatosLibro()}\n***\n`;
        });
        return output;
    }
    getAllLibros() {
        return Array.from(this.#listaLibros.values());
    }       

}
