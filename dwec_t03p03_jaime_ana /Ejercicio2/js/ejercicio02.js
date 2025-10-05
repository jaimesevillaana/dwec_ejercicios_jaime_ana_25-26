
console.log("T03 parte 3 - Ejercicio 02");

function principal() {
  const datos = pedirDatos();
  const media = calcularMedia(datos);
  const superiores = calcularSuperioresMedia(datos, media);

  console.log("Array original:");
  mostrarArray(datos);

  console.log(`Media: ${media}`);

  console.log("Números superiores a la media:");
  mostrarArray(superiores);

  console.log("Array ordenado ascendente:");
  mostrarArrayOrdenado(ordenarArray(datos, "asc"));

  console.log("Array ordenado descendente:");
  mostrarArrayOrdenado(ordenarArray(datos, "desc"));
}

function pedirDatos() {
  let cantidad;

  do {
    let respuesta = prompt("Cuantos números vas a introducir?");
    cantidad = Number(respuesta);
  } while (isNaN(cantidad) || cantidad <= 0);

  const array = [];

  for (let i = 0; i < cantidad; i++) {
    let numero;

    do {
      let entrada = prompt(`Introduce el numero ${i + 1}:`);
      numero = Number(entrada);
    } while (isNaN(numero));
  
    array.push(numero);
  }

  return array;

}

function calcularMedia(array) {
  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  return suma / array.length;
}

function calcularSuperioresMedia(array, media) {
  return array.filter(num => num > media);
}

function ordenarArray(array, orden = "asc") {
  const arr = array.slice(); //copia para no modificar el original

  for (let i = 1; i < arr.length; i++) {
    let actual = arr[i];
    let j = i - 1;

    if (orden === "asc") {
      while (j >= 0 && arr[j] > actual) {
        arr[j + 1] = arr[j];
        j--;
      }
    } else {
      while (j >= 0 && arr[j] < actual) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    
    arr[j + 1] = actual;
  }

  return arr;
}

function mostrarArray(array) {
  console.log(array.join(", "));
}

//mostrar array ordenado
function mostrarArrayOrdenado(array) {
  mostrarArray(array);
}

principal();
