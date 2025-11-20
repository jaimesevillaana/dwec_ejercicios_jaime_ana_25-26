console.log("T02 - Ejercicio 01");

class Autores {
    #listaAutores;

    constructor() {
        this.#listaAutores = [];
    }

    insertar(autor) {
        if (!(autor instanceof Autor)) {
            throw new Error("El parámetro no es una instancia de Autor");
        }
        this.#listaAutores.push(autor);
    }

    existeAutor(nombre) {
        return this.#listaAutores.some(a => a.nombre === nombre);
    }

    buscar(nombre) {
        return this.#listaAutores.find(a => a.nombre === nombre) || null;
    }

    listar() {
        return this.#listaAutores.map(a => a.mostrarAutor()).join("\n");
    }
    get lista() {
        return [...this.#listaAutores];
    }
}