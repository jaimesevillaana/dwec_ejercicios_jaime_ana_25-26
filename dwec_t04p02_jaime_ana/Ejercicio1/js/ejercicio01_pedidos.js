console.log("T02 - Ejercicio 01");

class Pedidos {
    
    constructor() {
        this.listadoPedidos = [];   // array de objetos Pedido
    }


    insertarPedido(arrayPedidos) {
        let contador = 0;

        for (const pedido of arrayPedidos) {
            if (!(pedido instanceof Pedido)) continue;

            this.listadoPedidos.push(pedido);
            contador++;
        }

        return contador;
    }


    buscarPedidoPorId(id) {
        const n = Number(id);
        return this.listadoPedidos.find(p => p.id === n) || null;
    }


    cerrarPedidoPorId(id) {
        const pedido = this.buscarPedidoPorId(id);

        if (!pedido) {
            return false;
        }

        return pedido.cerrarPedido();  // devuelve true
    }

}

