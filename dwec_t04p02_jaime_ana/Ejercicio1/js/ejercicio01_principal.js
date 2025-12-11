console.log("T02 - Ejercicio 01");


// Obtener la instancia única de Tienda
const tienda = Tienda.getInstancia("Librería Online");

// Cargar datos de prueba del PDF
tienda.cargarDatosPrueba();

// Mostrar catálogo de libros
console.log("\n=== Catálogo de Libros ===");
console.log(tienda.libros.obtenerCadenaLibrosMenu());

// Mostrar tipos de envío
console.log("\n=== Tipos de Envío ===");
console.log(tienda.tiposEnvio.obtenerCadenaTiposMenu());

// Mostrar clientes
console.log("\n=== Clientes ===");
console.log(
    tienda.clientes.listadoClientes
        .map(c => `${c.dni} - ${c.nombre}`)
        .join("\n")
);

console.log("\n=== Creando pedido de prueba ===");

const clienteDemo = tienda.clientes.buscarClientePorDNI(12345678);

const pedido = new Pedido(clienteDemo);

// Insertar libros del catálogo
const libro1 = tienda.libros.buscarLibroPorIsbn(1001); // Ebook
const libro2 = tienda.libros.buscarLibroPorIsbn(2001); // Papel

pedido.insertarLibro(libro1);
pedido.insertarLibro(libro2, 1);

// Establecer tipo de envío (hay libro en papel → obligatorio)
const envioRapido = tienda.tiposEnvio.buscarTiposPorNombre("Rápido");
pedido.establecerTipoEnvio(envioRapido, tienda.libros);

// Calcular total
const total = pedido.calcularTotal(tienda.libros, Tienda.IVA);

console.log("\n=== Datos del Pedido ===");
console.log(pedido.mostrarDatosPedido(tienda.libros));
