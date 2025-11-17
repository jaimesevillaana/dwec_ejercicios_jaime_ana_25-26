"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("T02 - Ejercicio 01");

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "validarEntero",
    value: function validarEntero(valor) {
      return Number.isInteger(valor);
    }
  }, {
    key: "validarReal",
    value: function validarReal(valor) {
      return typeof valor === "number" && !Number.isNaN(valor);
    }
  }, {
    key: "validarCadenaFecha",
    value: function validarCadenaFecha(valor) {
      if (typeof valor !== "string") {
        return false;
      }

      var d = Date.parse(valor);
      return !Number.isNaN(d);
    }
  }, {
    key: "validarFecha",
    value: function validarFecha(valor) {
      return valor instanceof Date && !Number.isNaN(valor.getTime());
    }
  }, {
    key: "validarTitulo",
    value: function validarTitulo(titulo) {
      return typeof titulo === "string" && titulo.trim().length > 0;
    }
  }, {
    key: "validarNombrePersona",
    value: function validarNombrePersona(nombre) {
      return typeof nombre === "string" & /^[A-Za-zÀ-ÿ\s]{3,}$/.test(nombre.trim());
    }
  }, {
    key: "validarPrecio",
    value: function validarPrecio(precio) {
      return this.validarReal(precio) && precio >= 0;
    }
  }, {
    key: "validarTamanoArchivo",
    value: function validarTamanoArchivo(tamano) {
      return this.validarReal(tamano) && tamano >= 0;
    }
  }, {
    key: "validarPeso",
    value: function validarPeso(peso) {
      return this.validarReal(peso) && peso >= 0;
    }
  }, {
    key: "validarDimensiones",
    value: function validarDimensiones(dimensiones) {
      return typeof dimensiones === "string" && /^\d+(\.\d+)?x\d+(\.\d+)?x\d+(\.\d+)?$/.test(dimensiones).trim();
    }
  }, {
    key: "esMesPromocion",
    value: function esMesPromocion(fecha, array_meses_promocion) {
      if (!(fecha instanceof Date)) {
        return false;
      }

      var mes = fecha.getMonth() + 1;
      return array_meses_promocion.includes(mes);
    }
  }, {
    key: "calcularIVA",
    value: function calcularIVA(precio) {
      var porcentaje = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;

      if (!this.validarReal(precio)) {
        throw new Error("Precio no válido");
        return precio * (porcentaje / 100);
      }
    }
  }]);

  return Util;
}();