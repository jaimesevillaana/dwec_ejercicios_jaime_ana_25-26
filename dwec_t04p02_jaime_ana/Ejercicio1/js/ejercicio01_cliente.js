console.log("T02 - Ejercicio 01");

class Cliente {

    #dni;
    #nombre;
    #direccion;
    #pedidos;   // array de objetos Pedido

    constructor(dni, nombre, direccion) {

        if (!Util.validarEntero(dni)) {
            throw new Error("ERROR: DNI inválido");
        }
        if (!Util.validarNombrePersona(nombre)) {
            throw new Error("ERROR: nombre de cliente inválido");
        }
        if (!Util.validarDireccion(direccion)) {
            throw new Error("ERROR: dirección inválida");
        }

        this.#dni = Number(dni);
        this.#nombre = nombre.trim();
        this.#direccion = direccion.trim();
        this.#pedidos = [];
    }


    get dni() {
        return this.#dni;
    }

    get nombre() {
        return this.#nombre;
    }

    get direccion() {
        return this.#direccion;
    }

    get pedidos() {
        return [...this.#pedidos]; // copia
    }


    insertarPedido(pedido) {
        if (!pedido) {
            throw new Error("ERROR: pedido inválido");
        }
        this.#pedidos.push(pedido);
        return this.#pedidos.length;
    }


    mostrarDatosCliente() {
        return `Cliente: ${this.#nombre} (DNI: ${this.#dni}) - ${this.#direccion}`;
    }


    
   
}

