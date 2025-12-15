console.log("T02 - Ejercicio 01");

class Tienda {

    static instancia = null;
    static IVA = 21;

    static getInstancia(nombre = "Mi Tienda") {
        if (Tienda.instancia === null) {
            Tienda.instancia = new Tienda(nombre);
        }
        return Tienda.instancia;
    }


    constructor(nombre) {

        // Impedir que se instancie directamente
        if (Tienda.instancia !== null) {
            throw new Error("ERROR: use Tienda.getInstancia() para obtener la tienda");
        }

        if (!Util.validarTitulo(nombre)) {
            throw new Error("ERROR: nombre de tienda inválido");
        }

        this.nombre = nombre.trim();

        // Colecciones
        this.libros = new Libros();
        this.autores = new Autores();
        this.clientes = new Clientes();
        this.tiposEnvio = new TiposEnvios();
        this.pedidos = new Pedidos();

        // Lector de datos
        this.lector = new LeerDatosPrompt();
    }


    cargarDatosPrueba() {

        // Autores
        const a1 = new Autor("J. K. Rowling");
        const a2 = new Autor("George R. R. Martin");

        this.autores.insertarAutores([a1, a2]);

        // Libros
        const l1 = new Ebook(
            1001,
            "Harry Potter y la piedra filosofal",
            ["J. K. Rowling"],
            "Infantil",
            9.99,
            2.5,
            "epub"
        );

        const l2 = new LibroPapel(
            2001,
            "Juego de Tronos",
            ["George R. R. Martin"],
            "Fantasía",
            24.50,
            800,
            "15x23x5",
            5
        );

        this.libros.insertarLibros([l1, l2]);

        // Asociar ISBN a autores
        a1.insertarLibro(l1.isbn);
        a2.insertarLibro(l2.isbn);

        // Tipos de envío
        const t1 = new TipoEnvio("Estándar", 5, 2000, 3.50);
        const t2 = new TipoEnvio("Rápido", 2, 2000, 6.50);

        this.tiposEnvio.insertarTipos([t1, t2]);

        // Clientes
        const c1 = new Cliente(12345678, "Ana Pérez", "Calle Falsa 123");
        this.clientes.insertarClientes([c1]);

        console.log("Datos de prueba cargados correctamente.");
    }


    mostrarCatalogo() {
        console.log("--- Catálogo de Libros ---");
        console.log(this.libros.obtenerCadenaLibrosMenu());
    }


}

