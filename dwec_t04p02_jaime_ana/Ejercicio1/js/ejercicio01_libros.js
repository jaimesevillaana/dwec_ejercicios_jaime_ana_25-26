console.log("T02 - Ejercicio 01");

class Libros {

    constructor() {
        this.listadoLibros = [];   // array de objetos Libro, Ebook o LibroPapel
    }


    existeLibroPorIsbn(isbn) {
        const n = Number(isbn);
        return this.listadoLibros.some(lib => lib.isbn === n);
    }


    insertarLibros(arrayLibros) {
        let contador = 0;

        for (const libro of arrayLibros) {

            // Solo aceptamos instancias de Libro o sus subclases
            if (!(libro instanceof Libro)) continue;

            if (!this.existeLibroPorIsbn(libro.isbn)) {
                this.listadoLibros.push(libro);
                contador++;
            }
        }

        return contador;
    }


    buscarLibroPorIsbn(isbn) {
        const n = Number(isbn);
        return this.listadoLibros.find(lib => lib.isbn === n) || null;
    }


    buscarLibroPorTitulo(titulo) {
        const cad = String(titulo).toLowerCase();
        return this.listadoLibros.filter(lib =>
            lib.titulo.toLowerCase().includes(cad)
        );
    }


    obtenerCadenaLibrosMenu() {
        const ordenados = [...this.listadoLibros].sort(
            (a, b) => a.titulo.localeCompare(b.titulo)
        );

        return ordenados
            .map((libro, i) =>
                `${i + 1}. ${libro.titulo} (${libro.constructor.name})`
            )
            .join("\n");
    }


}

