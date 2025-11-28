console.log("T02 - Ejercicio 01");

class Tienda {
    #libros;
    #autores;
    #clientes;
    #tiposEnvio;
    #pedidos;
    #lector; // Instancia de LectorDatosPrompt

    constructor(lector) {
        this.#libros = new Libros();
        this.#autores = new Autores();
        this.#clientes = new Clientes();
        this.#tiposEnvio = new TiposEnvio();
        this.#pedidos = new Pedidos();
        //inicializar el lector de datos(strategy pattern)
        this.#lector = new LectorDatosPrompt();

        console.log("Tienda inicializada.");
    }

    cargarDatosIniciales() {
        const autor1 = new Autor("Gabriel García Márquez", "Colombiana", "1927-03-06");
        this.#autores.addAutor(autor1);

        //cargar tipos de envio
        const envio1 = new TipoEnvio("Estándar", 5.00);
        const envio2 = new TipoEnvio("Urgente", 10.00);
        this.#tiposEnvio.addTipoEnvio(envio1);
        this.#tiposEnvio.addTipoEnvio(envio2);

        //cargar clientes
        const cliente1 = new Cliente("Juan Pérez", "juan@example,com");
        this.#clientes.addCliente(cliente1);

        //cargar libros
        const libro1 = new LibroPapel(123456, "Cien Años de Soledad", autor1, 20.00, 10);
        const ebook1 = new Ebook(654321, "El Amor en los Tiempos del Cólera", autor1, 15.00, "PDF");

        this.#libros.addLibro(libro1);
        this.#libros.addLibro(ebook1);

        console.log("Datos iniciales cargados en la tienda.");
    }
}

#solicitarYCrearLibro() {
    console.log("*** Añadir nuevo libro ***");

    const isbn = this.#lector.leerEntero("Ingrese el ISBN del libro (entero positivo): ");
    const titulo = this.#lector.leerCadena("Ingrese el título del libro: ");
    const precio = this.#lector.leerReal("Ingrese el precio base del libro (sin IVA): ");

    const nombreAutor = this.#lector.leerCadena("Ingrese el nombre del autor: ");
    const autores = [nombreAutor];


    //lista de generos para que el cliente elija
    const generosPermitidos = Array.from(Libro.GENEROS_LITERARIOS).join(", ");
    let generoLiterario;
    let generoValido = false;

    //bucle para la validacion del genero
    while (!generoValido) {

        generoLiterario = this.#lector.leerCadena(`Ingrese el género literario (${generosPermitidos}): `);

        if (Libro.GENEROS_LITERARIOS.has(generoLiterario)) {
            generoValido = true;

        } else {
            console.log("Género inválido. Por favor, elija uno de los géneros permitidos.");
        }
    }

    //decision del tipo de libro
    const tipoLibroStr = this.#lector.leerCadena("¿El libro es en formato papel o ebook? (p/e): ").toLowerCase();
    let nuevoLibro = null;
    
    if (tipoLibroStr === "p") {
        console.log("Creando libro en formato papel.");
        const peso = this.#lector.leerReal("Ingrese el peso del libro en gramos: ");
        const dimensiones = this.#lector.leerCadena("Ingrese las dimensiones del libro (Alto x Ancho x Profundidad en cm): ");
        const stock = this.#lector.leerEntero("Ingrese el stock disponible del libro: ");

        nuevoLibro = new LibroPapel(isbn, titulo, autores, generoLiterario, precio, peso, dimensiones, stock, dimensiones);
    } else if (tipoLibroStr === "e") {
        console.log("Creando ebook.");
        const tamanioArchivo = this.#lector.leerReal("Ingrese el tamaño del archivo en MB: ");
        const formato = this.#lector.leerCadena("Ingrese el formato del ebook (e.g., PDF, EPUB): ");
    }




mostrarMenu() {
    let opcion = 0;
    const MENU = `
*** Menú Tienda de Libros ***
1. Añadir nuevo libro (papel/ebook)
2. Mostrar todos los libros
3. Añadir nuevo cliente
4. Crear nuevo pedido
5. Mostrar todos los pedidos
6. Mostrar todos los tipos de envio
0. Salir
`;
    do {
        const opcionStr = this.#lector.leerEntero(MENU + "\nSeleccione una opción: ");
        opcion = Number(opcionStr);
        switch (opcion) {
            case 1:
                console.log
