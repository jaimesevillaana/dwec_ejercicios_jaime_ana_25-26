console.log("T02 - Ejercicio 01");

class Clientes {
    #listaClientes;

    constructor() {
        this.#listaClientes = new Map();
    }

    addCliente(cliente) {
        if (!(cliente instanceof Cliente)) {
            throw new Error("El parámetro no es una instancia de Cliente");
        }
        if (this.#listaClientes.has(cliente.id)) {
            throw new Error("Ya existe un cliente con ese ID");
        }
        this.#listaClientes.set(cliente.id, cliente);
        console.log(`Cliente con ID ${cliente.id} añadido.`);
    }

    getCliente(id) {
        if (!Util.validarEntero(id) || Number(id) <= 0) {
            return null;
        }
        return this.#listaClientes.get(Number(id)) || null;
    }

    get size() {
        return this.#listaClientes.size;
    }

    listar() {
        if (this.size === 0) {
            return "*** Colección Clientes (total: 0) ***\nNo hay clientes en la colección.";
        }
        let output = `*** Colección Clientes (total: ${this.size}) ***\n`;
        this.#listaClientes.forEach((cliente) => {
            output+= `${cliente.mostrarCliente()}\n***\n`;
        });
        return output;
    }
}

