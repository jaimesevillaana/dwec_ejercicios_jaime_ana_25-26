"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// crear tienda unica y cargar catalogo
var tienda = tienda.getInstancia("Libreria Online");
tienda.cargarDatosPrueba(); //obtener referencias a elementos del DOM

var tbody = document.querySelector("#tblCatalogo tbody");
var inputBuscador = document.querySelector("#buscador");
var mansajeSinResultados = document.querySelector("#mensajeSinResultados");
var librosOrdenados = []; //funcion para rellenar el catalogo odenado por titulo

function cargarTabla(libros) {
  tbody.innerHTML = "";

  if (libros.length === 0) {
    mensajeSinResultados.classList.remove("d-none");
    return;
  }

  mensajeSinResultados.classList.add("d-none");
  libros.forEach(function (libro) {
    var tr = document.createElement("tr");
    var tdisbn = document.createElement("td");
    tdisbn.textContent = libro.isbn;
    var tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.titulo;
    var tdAutores = document.createElement("td");
    tdAutores.textContent = libro.autores.join(", ");
    var tdGenero = document.createElement("td");
    tdGenero.textContent = libro.generoLiterario;
    var tdPrecio = document.createElement("td");
    tdPrecio.textContent = libro.precio.toFixed(2) + " €";
    var tdAcciones = document.createElement("td");
    var btnDetalles = document.createElement("button");
    btnDetalles.className = "btn btn-sm btn-primary";
    btnDetalles.textContent = "detalles";
    btnDetalles.addEventListener("click", function () {
      return mostrarDetalles(libro);
    });
    tdAcciones.appendChild(btnDetalles);
    tr.appendChild(tdisbn, tdTitulo, tdGenero, tdPrecio, tdAcciones);
    tbody.appendChild(tr);
  });
} //obtener todos los libros de la coleccion y ordenarlos por titulo


function inicializarCatalogo() {
  var todos = tienda.libros.listadoLibros; //ajusta el metodo real de tu clase libros

  librosOrdenados = _objectSpread({}, todos).sort(function (a, b) {
    return a.titulo.localeCompare(b.titulo, "es", {
      sensitivity: "base"
    });
  });
  cargarTabla(librosOrdenados);
} //filtrar por titulo o autor


function filtrarCatalogo() {
  var texto = inputBuscador.value.trim().toLowerCase();

  if (texto === "") {
    cargarTabla(librosOrdenados);
    return;
  }

  var filtados = librosOrdenados.filter(function (libro) {
    var enTitulo = libro.titulo.toLowerCase().includes(texto);
    var enAutores = libro.autores.some(function (autor) {
      return a.toLowerCase().includes(texto);
    });
    return enTitulo || enAutores;
  });
  cargarTabla(filtados);
} //mostrar detalles en el modal


function mostrarDetalles(libro) {
  var modalTitulo = document.getElementById("modalTitulo");
  var modalCuerpo = document.getElementById("modalCuerpo");
  modalTitulo.textContent = libro.titulo;
  var html = "\n    <p><strong>ISBN:</strong> ".concat(libro.isbn, "</p>\n    <p><strong>Autores:</strong> ").concat(libro.autores.join(", "), "</p>\n    <p><strong>G\xE9nero Literario:</strong> ").concat(libro.generoLiterario, "</p>\n    <p><strong>Precio:</strong> ").concat(libro.precio.toFixed(2), " \u20AC</p>\n    "); // Aquí mas adelante se puede añadir la imagen de portada u otros detalles

  modalCuerpo.innerHTML = html;
  var modal = new bootstrap.Modal(document.getElementById("modalLibro"));
  modal.show();
} //eventos


inputBuscador.addEventListener("input", filtrarCatalogo); //inicializacion

inicializarCatalogo();