console.log("T02 - Ejercicio 01");

class Autores {
    #listaAutores;

    constructor() {
        this.#listaAutores = new map();
    }

    insertar(autor) {
        if (!(autor instanceof Autor)) {
            throw new Error("El parámetro no es una instancia de Autor");
        }
        this.#listaAutores.set(autor.id, autor);
    }

    existeAutor(nombre) {
        return Array.from(this.#listaAutores.values()).some(a => a.nombre === nombre);
    }

    buscar(nombre) {
        return Array.from(this.#listaAutores.values()).find(a => a.nombre === nombre) || null;
    }

    buscarPorId(id) {
        return this.#listaAutores.get(id) || null;
    }

    listar() {
        return Array.from(this.#listaAutores.values()).map(a => a.mostrarAutor()).join("\n");
    }
    get lista() {
        return Array.from(this.#listaAutores.values());
    }
    get size() {
        return this.#listaAutores.size;
    }
}