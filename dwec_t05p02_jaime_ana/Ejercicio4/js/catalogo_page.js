// crear tienda unica y cargar catalogo
const tienda = tienda.getInstancia("Libreria Online");
tienda.cargarDatosPrueba();

//obtener referencias a elementos del DOM
const tbody = document.querySelector("#tblCatalogo tbody");
const inputBuscador = document.querySelector("#buscador");
const mansajeSinResultados = document.querySelector("#mensajeSinResultados");

let librosOrdenados = [];

//funcion para rellenar el catalogo odenado por titulo
function cargarTabla(libros) {
    tbody.innerHTML = "";

    if (libros.length === 0) {
        mensajeSinResultados.classList.remove("d-none");
        return;
    }

    mensajeSinResultados.classList.add("d-none");

    libros.forEach(libro => {
        const tr = document.createElement("tr");

        const tdisbn = document.createElement("td");
        tdisbn.textContent = libro.isbn;

        const tdTitulo = document.createElement("td");
        tdTitulo.textContent = libro.titulo;

        const tdAutores = document.createElement("td");
        tdAutores.textContent = libro.autores.join(", ");

        const tdGenero = document.createElement("td");
        tdGenero.textContent = libro.generoLiterario;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = libro.precio.toFixed(2) + " €";

        const tdAcciones = document.createElement("td");
        const btnDetalles = document.createElement("button");
        btnDetalles.className = "btn btn-sm btn-primary";
        btnDetalles.textContent = "detalles";
        btnDetalles.addEventListener("click", () => mostrarDetalles(libro));
        tdAcciones.appendChild(btnDetalles);
        tr.appendChild(tdisbn, tdTitulo, tdGenero, tdPrecio, tdAcciones);
        tbody.appendChild(tr);
    });
}

//obtener todos los libros de la coleccion y ordenarlos por titulo
function inicializarCatalogo() {
    const todos = tienda.libros.listadoLibros; //ajusta el metodo real de tu clase libros
    librosOrdenados = {...todos}.sort((a, b) => a.titulo.localeCompare(b.titulo, "es", { sensitivity: "base"})
);
cargarTabla(librosOrdenados);
}

//filtrar por titulo o autor
function filtrarCatalogo() {
    const texto = inputBuscador.value.trim().toLowerCase();

    if (texto === "") {
        cargarTabla(librosOrdenados);
        return;
    }
    const filtados = librosOrdenados.filter(libro => {
        const enTitulo = libro.titulo.toLowerCase().includes(texto);
        const enAutores = libro.autores.some(autor => a.toLowerCase().includes(texto)
    );
        return enTitulo || enAutores;
    });
    cargarTabla(filtados);
}

//mostrar detalles en el modal
function mostrarDetalles(libro) {
    const modalTitulo = document.getElementById("modalTitulo");
    const modalCuerpo = document.getElementById("modalCuerpo");

    modalTitulo.textContent = libro.titulo;

    let html = `
    <p><strong>ISBN:</strong> ${libro.isbn}</p>
    <p><strong>Autores:</strong> ${libro.autores.join(", ")}</p>
    <p><strong>Género Literario:</strong> ${libro.generoLiterario}</p>
    <p><strong>Precio:</strong> ${libro.precio.toFixed(2)} €</p>
    `;
    

    // Aquí mas adelante se puede añadir la imagen de portada u otros detalles
    modalCuerpo.innerHTML = html;
    const modal = new bootstrap.Modal(document.getElementById("modalLibro"));
    modal.show();
}

//eventos
inputBuscador.addEventListener("input", filtrarCatalogo);

//inicializacion
inicializarCatalogo();