console.log("T02 - Ejercicio 01");

class Pedido {
    
   static ultimoId = 0;

    #id;
    #cliente;
    #librosPedido;     // Map: isbn → unidades
    #fecha;
    #tipoEnvio;
    #descuento;
    #abierto;


    constructor(cliente) {

        if (!cliente) {
            throw new Error("ERROR: el pedido necesita un cliente");
        }

        this.#id = ++Pedido.ultimoId;
        this.#cliente = cliente;
        this.#librosPedido = new Map();
        this.#fecha = new Date();
        this.#tipoEnvio = null;
        this.#descuento = 0;
        this.#abierto = true;
    }


    get id() { return this.#id; }
    get cliente() { return this.#cliente; }
    get fecha() { return this.#fecha; }
    get abierto() { return this.#abierto; }


    insertarLibro(libro, unidades = 1) {

        if (!libro) {
            throw new Error("ERROR: libro inválido");
        }
        if (!Util.validarEntero(unidades) || unidades <= 0) {
            throw new Error("ERROR: unidades inválidas");
        }

        // Ebook siempre se añade como 1 unidad
        if (libro instanceof Ebook) {
            unidades = 1;
        }

        const isbn = libro.isbn;
        const prev = this.#librosPedido.get(isbn) || 0;

        this.#librosPedido.set(isbn, prev + Number(unidades));

        return [...this.#librosPedido.values()].reduce((a, b) => a + b, 0);
    }


    establecerTipoEnvio(tipoEnvio, librosCatalogo) {

        // 1º comprobar si contiene libros en papel
        const contienePapel = [...this.#librosPedido.keys()].some(isbn => {
            const lib = librosCatalogo.buscarLibroPorIsbn(isbn);
            return lib instanceof LibroPapel;
        });

        // Si NO contiene libros en papel, el tipo de envío NO se usa
        if (!contienePapel) {
            this.#tipoEnvio = null;
            return true;
        }

        // Si contiene papel, el tipo de envío es obligatorio
        if (!(tipoEnvio instanceof TipoEnvio)) {
            throw new Error("ERROR: tipo de envío inválido");
        }

        this.#tipoEnvio = tipoEnvio;
        return true;
    }


    aplicarDescuento(pct) {
        if (!Util.validarReal(pct)) {
            throw new Error("ERROR: descuento inválido");
        }
        this.#descuento = Number(pct);
        return true;
    }


    calcularTotal(librosCatalogo, IVA = 21) {

        let totalLibros = 0;

        // Calcular total sin IVA
        for (const [isbn, unidades] of this.#librosPedido.entries()) {
            const libro = librosCatalogo.buscarLibroPorIsbn(isbn);

            if (!libro) {
                throw new Error("ERROR: libro no existe en el catálogo");
            }

            totalLibros += libro.precio * unidades;
        }

        // Aplicar descuento
        totalLibros = totalLibros * (1 - this.#descuento / 100);

        // Calcular gastos de envío
        let envio = 0;
        if (this.#tipoEnvio instanceof TipoEnvio) {
            envio = this.#tipoEnvio.precioSinIVA;
        }

        const totalConIVA = (totalLibros + envio) * (1 + IVA / 100);

        return {
            totalLibrosSinIVA: Number(totalLibros.toFixed(2)),
            envioSinIVA: Number(envio.toFixed(2)),
            totalConIVA: Number(totalConIVA.toFixed(2))
        };
    }


    mostrarDatosPedido(librosCatalogo) {

        const lineas = [];

        lineas.push(`Pedido #${this.#id}`);
        lineas.push(`Fecha: ${this.#fecha.toLocaleString()}`);
        lineas.push(`Cliente: ${this.#cliente.nombre} (DNI: ${this.#cliente.dni})`);
        lineas.push("");

        for (const [isbn, unidades] of this.#librosPedido.entries()) {

            const libro = librosCatalogo.buscarLibroPorIsbn(isbn);

            const titulo = libro ? libro.titulo : "Libro no encontrado";
            const precio = libro ? libro.precio.toFixed(2) : "N/A";

            lineas.push(` - ${titulo} (ISBN ${isbn}) x${unidades} → ${precio}€ c/u`);
        }

        lineas.push("");

        const totales = this.calcularTotal(librosCatalogo);

        lineas.push(`Subtotal libros (sin IVA): ${totales.totalLibrosSinIVA}€`);
        lineas.push(`Gastos de envío (sin IVA): ${totales.envioSinIVA}€`);
        lineas.push(`TOTAL CON IVA: ${totales.totalConIVA}€`);

        return lineas.join("\n");
    }


    cerrarPedido() {
        this.#abierto = false;
        return true;
    }


        
}

