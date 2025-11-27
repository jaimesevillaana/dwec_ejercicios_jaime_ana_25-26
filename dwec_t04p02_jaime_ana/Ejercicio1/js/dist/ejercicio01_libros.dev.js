"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("T02 - Ejercicio 01");

var Libros =
/*#__PURE__*/
function () {
  function Libros() {
    _classCallCheck(this, Libros);

    this.libros = [];
  } //getters


  _createClass(Libros, [{
    key: "addLibro",
    value: function addLibro(libro) {
      if (!(libro instanceof Libro)) {
        throw new Error("No es una instancia de Libro");
      }

      if (this.libros.findLibro(libro.isbn)) {
        throw new Error("Ya existe un libro con ese ISBN");
      }

      this.libros.push(libro);
      console.log("Libro con ISBN ".concat(libro.isbn, " a\xF1adido."));
    }
  }, {
    key: "findLibro",
    value: function findLibro(isbn) {
      if (!Util.validarEntero(isbn) || isbn <= 0) {
        return undefined;
      }

      return this.libros.find(function (libro) {
        return libro.isbn === isbn;
      });
    }
  }, {
    key: "removeLibro",
    value: function removeLibro(isbn) {
      var index = this.libros.findIndex(function (libro) {
        return libro.isbn === isbn;
      });

      if (index === -1) {
        return false;
      }

      this.libros.splice(index, 1);
      console.log("Libro con ISBN ".concat(isbn, " eliminado."));
      return true;
    }
  }, {
    key: "mostrarTodosLosLibros",
    value: function mostrarTodosLosLibros() {
      if (this.libros.length === 0) {
        return "No hay libros en la coleccion.";
      }

      return this.libros.map(function (libro) {
        return libro.mostrarDatosLibro();
      }).join('\n' + '-'.repeat(50) + '\n');
    } //METODOS DE CONSULTA

  }, {
    key: "libros",
    get: function get() {
      return _toConsumableArray(this.libros);
    }
  }]);

  return Libros;
}();