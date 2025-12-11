"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // 1. OBTENCIÓN DE ELEMENTOS (Ahora solo se ejecutan cuando el DOM está listo)
  var $input = document.getElementById('alimentoInput');
  var $lista = document.getElementById('listaAlimentos');
  var $addBtn = document.getElementById('addBtn');
  var $deleteBtn = document.getElementById('deleteBtn');
  var $sortBtn = document.getElementById('sortBtn'); // Inicializar el estado del botón de ordenar al cargar la página
  // Ahora esta llamada es segura porque $lista ya ha sido definido.

  actualizarEstadoBotonOrdenar();
  $addBtn.addEventListener('click', agregarAlimento);
  $deleteBtn.addEventListener('click', borrarAlimento);
  $sortBtn.addEventListener('click', ordenarAlimentos);
  /**
   * Habilita o deshabilita el botón de ordenar.
   */

  function actualizarEstadoBotonOrdenar() {
    // $lista es accesible aquí porque estamos dentro del mismo ámbito (scope)
    var itemCount = $lista.children.length;
    $sortBtn.disabled = itemCount <= 1;
  } //  MANEJADORES DE EVENTOS


  function agregarAlimento() {
    var alimento = $input.value.trim();

    if (alimento === '') {
      return;
    }

    var nuevoLi = document.createElement('li');
    nuevoLi.textContent = alimento;
    nuevoLi.classList.add('list-group-item');
    $lista.appendChild(nuevoLi);
    $input.value = '';
    actualizarEstadoBotonOrdenar();
  }

  function borrarAlimento() {
    var alimentoABorrar = $input.value.trim();

    if (alimentoABorrar === '') {
      return;
    }

    var items = $lista.querySelectorAll('li');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.textContent.trim() === alimentoABorrar) {
          $lista.removeChild(item);
          $input.value = '';
          actualizarEstadoBotonOrdenar();
          return;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function ordenarAlimentos() {
    var items = Array.from($lista.querySelectorAll('li'));
    var alimentosTexto = items.map(function (item) {
      return item.textContent.trim();
    });
    alimentosTexto.sort(function (a, b) {
      return a.localeCompare(b);
    });
    $lista.innerHTML = '';
    alimentosTexto.forEach(function (alimento) {
      var nuevoLi = document.createElement('li');
      nuevoLi.textContent = alimento;
      nuevoLi.classList.add('list-group-item');
      $lista.appendChild(nuevoLi);
    });
  }
});