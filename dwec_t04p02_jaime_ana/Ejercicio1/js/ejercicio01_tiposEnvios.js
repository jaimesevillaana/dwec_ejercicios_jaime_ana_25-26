console.log("T02 - Ejercicio 01");

class TiposEnvios {

    constructor() {
        this.listado = [];   // array de objetos TipoEnvio
    }

    existeTipoPorNombre(nombre) {
        return this.listado.some(t => t.nombre === nombre);
    }



    insertarTipos(arrayTipos) {
        let contador = 0;

        for (const tipo of arrayTipos) {
            if (!(tipo instanceof TipoEnvio)) continue;

            if (!this.existeTipoPorNombre(tipo.nombre)) {
                this.listado.push(tipo);
                contador++;
            }
        }

        return contador;
    }


    buscarTiposPorNombre(nombre) {
        return this.listado.find(t => t.nombre === nombre) || null;
    }


    obtenerCadenaTiposMenu() {
        const ordenados = [...this.listado].sort(
            (a, b) => b.precioSinIVA - a.precioSinIVA
        );

        return ordenados
            .map((t, i) => `${i + 1}. ${t.nombre} (${t.precioSinIVA}€)`)
            .join("\n");
    }

}

