console.log("T02 - Ejercicio 01");

class Libro {
    #isbn;
    #titulo;
    #generoLiterario;
    #autores; //array de strings (nombre de autores)
    #precio; //precio sin IVA
    #precioOriginal; //para aplicar o deshacer descuentos

    //propiedad estatica: set de generos permitidos
    static GENEROS_LITERARIOS = new Set([
        "Novela", "Poesía", "Ensayo", "Teatro", "Ciencia ficción",
        "Fantasia", "Histórico", "Biografia", "Autoayuda", "Infantil",
    ]);

    //constructor de libro. Llama a setters para validar los valores

    constructor(isbn, titulo, autores, generoLiterario, precio) {
        //validacion de ISBN
        if (!Util.validarEntero(isbn) || isbn <= 0) {
            throw new Error("ISBN no válido");
        }

        this.isbn = isbn;
        //uso de setters para las propiedades restantes
        this.titulo = titulo;
        this.autores = autores;
        this.generoLiterario = generoLiterario;
        this.precio = precio;
        this.#precioOriginal = precio;
    }

    //getters 
    get isbn() { return this.#isbn; }
    get titulo(){ return this.#titulo; }
    get autores() { return this.#autores; }
    get generoLiterario() { return this.#generoLiterario; }
    get precio() { return this.#precio; }


    //setters validacion de logica de negocio
    set titulo(valor) {
        //validacion de negocio: ¿Es una cadena con contenido valido?
        if (valor.trim().length === 0) {
            throw new Error("Libro: Titulo invalido. No puede estar vacio");
        }
        this.#titulo = valor.trim();
    }

    set autores(arrayAutores) {
        //¿Es un array, tiene contenido y los nombres son validos?
        if (!Array.isArray(arrayAutores) || arrayAutores.length === 0 || 
    !arrayAutores.every(autor => Util.validarNombrePersona(autor))) {
        throw new Error("Libro: Autores invalidos. Debe ser un arra con nombres validos");
        }
        this.#autores = arrayAutores;
    }

    set generoLiterario(valor) {
        //¿EL genero esta en la lista estatica?
        if (!Libro.GENEROS_LITERARIOS.has(valor)) {
            throw new Error(`Libro: Género '${valor}' invalido. Debe ser uno de los generos permitidos.`);
        }
        this.#generoLiterario = valor;
    }

    set precio(valor) {
        //¿El precio esta en el rango permitido?
        if (valor < 0) {
            throw new Error("Libro: Precio invalido. Debe ser positivo o cero.");
        }
        this.#precio = valor;
        if (this.#precioOriginal === undefined) {
            this.#precioOriginal = valor;
        }
    }

    //METODOS
    aplicarDescuento(descuento) {
        if (descuento < 0 || descuento > 1) {
            throw new Error("Descuento invalido. Debe estar entre 0 y 1");
        }
        this.#precio = this.#precioOriginal;
        this.#precio = this.#precio * (1 - descuento);
    }

    deshacerDescuento() {
        if (this.#precio !== this.#precioOriginal) {
            this.#precio = this.#precioOriginal;
        }
    }

    mostrarDatosLibro() {
        return `
        *** Información Básica del Libro ***
        ISBN: ${this.#isbn}
        Titulo: ${this.#titulo}
        Autor(es): ${this.#autores.join(", ")}
        Género: ${this.#generoLiterario}
        Precio Base (sin IVA): ${this.#precio.toFixed(2)} €
        `;
    }

    comprobarDisponibilidad() {
        throw new Error("Método comprobarDisponibilidad() no implementado");
    }
}

class Ebook extends Libro {
    #tamanioArchivo; 
    #formato;

    static FORMATOS = new Set(["pdf", "epub", "mobi"]);

    constructor(isbn, titulo, autores, generoLiterario, precio, tamanioArchivo, formato) {
        super(isbn, titulo, autores, generoLiterario, precio);
        this.tamanioArchivo = tamanioArchivo;
        this.formato = formato;
    }

    //getters y setters (validacion de logica)

    get tamanioArchivo() { return this.#tamanioArchivo; }
    get formato() { return this.#formato; }

    set tamanioArchivo(valor) {
        //¿El tamaño esta en el rango permitido?
        if (valor <= 0) {
            throw new Error("Ebook: Tamaño de archivo invalido. Debe ser positivo.");
        }
        this.#tamanioArchivo = valor;
    }

    set formato(valor) {
        //¿El formato está en la lista estatica?
        if (!Ebook.FORMATOS.has(valor.toLowerCase())) {
            throw new Error(`Ebook: Formato '${valor}' invalido.`);
        }
        this.#formato = valor.toLowerCase();
    }

    comprobarDisponibilidad() {
        return true;
    }

    mostrarDatosLibro() {
        return super.mostrarDatosLibro() + `
        *** Informacion EBook ***
        Tamaño Archivo: ${this.#tamanioArchivo.toFixed(2)} MB
        Formato: ${this.#formato.toUpperCase()}
        Disponible: ${this.comprobarDisponibilidad() ? "Sí" : "No"}
        `;
    }

    descargar() {
        return `Descargando el ebook '${this.titulo}' en formato ${this.#formato.toUpperCase()}...`;
    }
}

class LibroPapel extends Libro {
    #peso;
    #dimensiones;
    #stock;


    static MINIMO_STOCK = 5;

    constructor(isbn, titulo, autores, generoLiterario, precio, peso, dimensiones, stock) {
        super(isbn, titulo, autores, generoLiterario, precio);
        this.peso = peso;
        this.dimensiones = dimensiones;
        this.stock = stock;
    }

    //getters y setters
    get peso() { return this.#peso; }
    get dimensiones() { return this.#dimensiones; }
    get stock() { return this.#stock; }

    set peso(valor) {
        //¿El peso esta en el rango permitido?
        if (valor <= 0) {
            throw new Error("LibroPapel: Peso invalido. Debe ser positivo.");
        }
        this.#peso = valor;
    }

    set dimensiones(valor) {
        //las dimensiones tienen el formato requerido? (usando util)
        if (!Util.validarDimensiones(valor)) {
            throw new Error("LibroPapel: Dimensiones invalidas. Formato correcto 'AltoxAnchoxProfundidad' en cm.");
        }
        this.#dimensiones = valor;
    }

    set stock(valor) {
        //el stock esta en el rango permitido?
        if (valor < 0) {
            throw new Error("LibroPapel: Stock invalido. No puede ser negativo.");
        }
        this.#stock = valor;
    }

    comprobarDisponibilidad() {
        return this.#stock > 0;
    }

    mostrarDatosLibro() {
        return super.mostrarDatosLibro() + `
        *** Información Libro en Papel ***
        Peso: ${this.#peso.toFixed(2)} kg
        Dimensiones: ${this.#dimensiones} cm
        Stock: ${this.#stock} unidades
        Disponible: ${this.comprobarDisponibilidad() ? "Sí" : "No"}
        `;
    }

    reducirStock() {
        if (this.#stock > 0) {
            this.#stock--;
            if (this.stockBajo()) {
                console.log("Advertencia: Stock bajo. Quedan " + this.#stock + " unidades.");
            }
        } else {
            throw new Error("No hay stock disponible para reducir.");
        }
    }

    stockBajo() {
        return this.#stock <= LibroPapel.MINIMO_STOCK;
    }

}