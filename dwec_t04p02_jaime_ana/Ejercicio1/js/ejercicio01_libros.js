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
        this.libros.push(libro);
        console.log(`Libro con ISBN ${libro.isbn} añadido.`);
    }



    findLibro(isbn) {
        if (!Util.validarEntero(isbn) || isbn <= 0) {
            return undefined;
        } 
        return this.libros.find(libro => libro.isbn === isbn);
    }

    removeLibro(isbn) {
        const index = this.libros.findIndex(libro => libro.isbn === isbn);
        if (index === -1) {
            return false;
        }
        this.libros.splice(index, 1);
        console.log(`Libro con ISBN ${isbn} eliminado.`);
        return true;
    }

    mostrarTodosLosLibros() {
        if (this.libros.length === 0) {
            return "No hay libros en la coleccion.";
        }
        return this.libros.map(libro => libro.mostrarDatosLibro()).join('\n' + '-'.repeat(50) + '\n');
    }

    //METODOS DE CONSULTA
    

}
