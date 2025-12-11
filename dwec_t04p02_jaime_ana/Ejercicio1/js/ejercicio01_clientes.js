console.log("T02 - Ejercicio 01");

class Clientes {;

    constructor() {
        this.listadoClientes = [];   // array de objetos Cliente
    }

    existeClientePorDNI(dni) {
        const n = Number(dni);
        return this.listadoClientes.some(c => c.dni === n);
    }

    insertarClientes(arrayClientes) {
        let contador = 0;

        for (const cliente of arrayClientes) {
            if (!(cliente instanceof Cliente)) continue;

            if (!this.existeClientePorDNI(cliente.dni)) {
                this.listadoClientes.push(cliente);
                contador++;
            }
        }

        return contador;
    }

    buscarClientePorDNI(dni) {
        const n = Number(dni);
        return this.listadoClientes.find(c => c.dni === n) || null;
    }

    borrarClientePorDNI(dni) {
        const n = Number(dni);
        const index = this.listadoClientes.findIndex(c => c.dni === n);

        if (index === -1) {
            return false;
        }

        this.listadoClientes.splice(index, 1);
        return true;
    }
}

