
console.log("T03 parte 3 - Ejercicio 01");

let array = [10, 20, 30, 40, 50];


let ultimaAccion = null;
let borradoUltimo1 = null;
let borradoUltimo2 = null;
let opcion = 0;

do {

  console.log("Array: ", array);
  
  let respuesta = prompt("¿Qué quieres hacer? \n" +
    "1. Borrar el primero\n" +
    "2. Borrar el último\n" + 
    "3. Borrar ambos\n" +
    "4. Ninguno \n" +
    "5. Deshacer\n" +
    "0. Salir"
  );

  opcion = Number(respuesta);

  switch(opcion) {
    case 1:
      if (array.length >= 1) {
        borradoUltimo1 = array[0];
        ultimaAccion = 1;
        array.shift();
      } else {
        console.log("No hay elementos para borrar.");
      }
      break;

    case 2:
      if (array.length >= 1) {
        borradoUltimo1 = array[array.length - 1];
        ultimaAccion = 2;
        array.pop();
      } else {
        console.log("No hay elementos para borrar.");
      }
      break;

    case 3:
      if (array.length >= 2) {
        borradoUltimo1 = array[0];
        borradoUltimo2 = array[array.length - 1];
        ultimaAccion = 3;

        array.shift();
        array.pop();
      } else {
        console.log("No se pueden borrar ambos si hay menos de 2 elementos");
      }
      break;

    case 4:
      console.log("Has elegido no borrar nada.");
      array = [];
      break;

    case 5:
      if (!ultimaAccion) {
        console.log("No hay nada que deshacer");
      } else {
        if (ultimaAccion === 1) {
          array.unshift(borradoUltimo1);
          console.log("Acción de 'Borrar el primero' deshecha");
        } else if (ultimaAccion === 2) {
          array.push(borradoUltimo1);
          console.log("Acción de 'Borrar el ultimo' deshecha");
        } else if (ultimaAccion === 3) {
          array.unshift(borradoUltimo1);
          array.push(borradoUltimo2);
          console.log("Acción 'Borrar ambos' deshecha");
        }

        //borrar la informacion guardada
      ultimaAccion = null;
      borradoUltimo1 = null;
      borradoUltimo2 = null;
      }
      break;

    case 0:
      console.log("Hasta luego! Gracias por participar.");
      break;

    default:
        console.log("Opcion no válida, intentalo de nuevo.");
        break;
  }

  if (opcion >= 1 && opcion <=3) {
    ultimaAccion = ultimaAccion;
    borradoUltimo1 = borradoUltimo1;
    borradoUltimo2 = borradoUltimo2;
  }

      
} while (opcion != 0 && array.length > 0); //fin del while

//console.log("No quedan mas elementos.");



 