console.log("T02 - Ejercicio 01");

class Libro {
    #isbn;
    #titulo;
    #autores; //array de strings (nombre de autores)
    #generoLiterario;
    #precio; //precio sin IVA
    #precioOriginal; //para aplicar o deshacer descuentos
    #ultimoDescuento;

    //propiedad estatica: set de generos permitidos
    static GENEROS_LITERARIOS = new Set([
        "Novela", "Poesía", "Ensayo", "Teatro", "Ciencia ficción",
        "Fantasía", "Histórico", "Biografia", "Autoayuda", "Infantil",
    ]);

    //constructor de libro. Llama a setters para validar los valores
    constructor(isbn, titulo, autores, generoLiterario, precio) {

        if (!Util.validarEntero(isbn)) {
            throw new Error("ERROR: ISBN inválido");
        }
        if (!Util.validarTitulo(titulo)) {
            throw new Error("ERROR: título inválido");
        }
        if (!Array.isArray(autores) || autores.length === 0) {
            throw new Error("ERROR: debe haber al menos un autor");
        }
        // Validar autores según el PDF
        for (const a of autores) {
            if (!Util.validarAutor(a)) {
                throw new Error("ERROR: autor inválido en la lista de autores");
            }
        }
        if (!Util.validarGenero(generoLiterario, Libro.GENEROS_LITERARIOS)) {
            throw new Error("ERROR: género literario inválido");
        }
        if (!Util.validarPrecio(precio)) {
            throw new Error("ERROR: precio inválido");
        }

        this.#isbn = Number(isbn);
        this.#titulo = titulo.trim();
        this.#autores = [...autores];
        this.#generoLiterario = generoLiterario;
        this.#precio = Number(precio);
        this.#precioOriginal = Number(precio);
        this.#ultimoDescuento = 0;
    }


    get isbn() { return this.#isbn; }
    get titulo() { return this.#titulo; }
    get autores() { return [...this.#autores]; }
    get generoLiterario() { return this.#generoLiterario; }
    get precio() { return this.#precio; }


    set precio(nuevoPrecio) {
        if (!Util.validarPrecio(nuevoPrecio)) {
            throw new Error("ERROR: precio inválido");
        }
        this.#precio = Number(nuevoPrecio);
    }


    aplicarDescuento(porcentaje) {
        if (!Util.validarReal(porcentaje)) {
            throw new Error("ERROR: porcentaje de descuento inválido");
        }
        this.deshacerDescuento();  // restaurar antes de aplicar

        this.#ultimoDescuento = Number(porcentaje);
        const factor = (100 - porcentaje) / 100;
        this.#precio = Number((this.#precioOriginal * factor).toFixed(2));
    }


    deshacerDescuento() {
        if (this.#ultimoDescuento !== 0) {
            this.#precio = this.#precioOriginal;
            this.#ultimoDescuento = 0;
        }
    }


    mostrarDatosLibro() {
        return `ISBN: ${this.#isbn} - ${this.#titulo} - ${this.#autores.join(", ")} - ${this.#generoLiterario} - ${this.#precio.toFixed(2)}€`;
    }



     comprobarDisponibilidad() {
        return true; // por defecto
    }


}


class Ebook extends Libro {

    static FORMATOS_VALIDOS = new Set(["pdf", "epub", "mobi"]);

    #tamanoArchivo;
    #formato;

    constructor(isbn, titulo, autores, generoLiterario, precio, tamanoArchivo, formato) {

        super(isbn, titulo, autores, generoLiterario, precio);

        if (!Util.validarTamanoArchivo(tamanoArchivo)) {
            throw new Error("ERROR: tamaño de archivo inválido");
        }
        if (!Util.validarFormato(formato, Ebook.FORMATOS_VALIDOS)) {
            throw new Error("ERROR: formato de ebook inválido");
        }

        this.#tamanoArchivo = Number(tamanoArchivo);
        this.#formato = String(formato).toLowerCase();
    }

    get tamanoArchivo() { return this.#tamanoArchivo; }
    get formato() { return this.#formato; }

    mostrarDatosLibro() {
        return super.mostrarDatosLibro() +
               ` [EBOOK ${this.#tamanoArchivo}MB - ${this.#formato}]`;
    }

    comprobarDisponibilidad() {
        return true; // siempre disponible
    }
}


class LibroPapel extends Libro {

    static STOCK_MINIMO = 2;

    #peso;
    #dimensiones;
    #stock;

    constructor(isbn, titulo, autores, generoLiterario, precio, peso, dimensiones, stock) {

        super(isbn, titulo, autores, generoLiterario, precio);

        if (!Util.validarPeso(peso)) {
            throw new Error("ERROR: peso inválido");
        }
        if (!Util.validarDimensiones(dimensiones)) {
            throw new Error("ERROR: dimensiones inválidas");
        }
        if (!Util.validarStock(stock)) {
            throw new Error("ERROR: stock inválido");
        }

        this.#peso = Number(peso);
        this.#dimensiones = dimensiones.trim();
        this.#stock = Number(stock);
    }


    get peso() { return this.#peso; }
    get dimensiones() { return this.#dimensiones; }
    get stock() { return this.#stock; }

    reducirStock(unidades = 1) {
        if (!Util.validarEntero(unidades) || unidades <= 0) {
            throw new Error("ERROR: unidades inválidas");
        }
        if (this.#stock < unidades) {
            throw new Error("ERROR: no hay suficiente stock");
        }
        this.#stock -= unidades;
        return this.#stock;
    }


    ampliarStock(unidades) {
        if (!Util.validarEntero(unidades) || unidades <= 0) {
            throw new Error("ERROR: unidades inválidas");
        }
        this.#stock += unidades;
        return this.#stock;
    }


  
    avisoStockMinimo() {
        return this.#stock < LibroPapel.STOCK_MINIMO;
    }

    mostrarDatosLibro() {
        return super.mostrarDatosLibro() +
               ` [PAPEL ${this.#peso}g - ${this.#dimensiones} - stock: ${this.#stock}]`;
    }

    comprobarDisponibilidad() {
        return this.#stock > 0;
    }
}