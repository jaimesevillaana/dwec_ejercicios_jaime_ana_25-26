console.log("T02 - Ejercicio 01");

class Autores {


    constructor() {
        this.listado = [];  // array de objetos Autor
    }


    existeAutorPorNombre(nombre) {
        return this.listado.some(a => a.nombreCompleto === nombre);
    }


    insertarAutores(arrayAutores) {
        let contador = 0;

        for (const autor of arrayAutores) {
            if (!(autor instanceof Autor)) continue;

            if (!this.existeAutorPorNombre(autor.nombreCompleto)) {
                this.listado.push(autor);
                contador++;
            }
        }

        return contador;
    }


    buscarAutorPorId(id) {
        id = Number(id);
        return this.listado.find(a => a.id === id) || null;
    }


    buscarAutorPorNombre(nombre) {
        return this.listado.find(a => a.nombreCompleto === nombre) || null;
    }


    obtenerCadenaAutoresMenu() {
        const ordenados = [...this.listado].sort(
            (a, b) => a.nombreCompleto.localeCompare(b.nombreCompleto)
        );

        return ordenados
            .map((autor, i) => `${i + 1}. ${autor.nombreCompleto}`)
            .join("\n");
    }

}
