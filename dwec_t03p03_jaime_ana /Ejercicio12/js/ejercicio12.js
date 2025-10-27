
console.log("T03 parte 3 - Ejercicio 12");
//Ejercicio 12 sin ampliaciones

let categorias = []; //guarda todas las categorias
let historialDone = [];

function mostrarCategorias() {
  if (categorias.length === 0) {
    console.log("No hay categorias aún");
    return;
  }
  let texto = "Categorias:\n";
  for (let i = 0; i < categorias.length; i++) {
    texto += (i + 1) + ". " + categorias[i][0] + "\n";
  }
  console.log(texto);
}

//crear nuevas categorias
function anadirCategoria() {
  let nombre = prompt("Nombre de la nueva categoria (deja vacio para salir):");
  while (nombre !== "" && nombre !== null) {
    categorias.push([nombre]);
    console.log("Categoria '" + nombre + "' creada.");
    nombre = prompt("Nombre de otra categoria (deja vacio para salir)");
  }
}

//borrar categorias solo si todas las tareas estan como done 
function borrarCategoria() {
  if (categorias.length === 0) {
    console.log("No hay categorias para borrar.");
    return;
  }
//muestra la lista de categorias
  let lista = "";
  for (let i = 0; i < categorias.length; i++) {
    lista += (i + 1) + ". " + categorias[i][0] + "\n";    
  }
  
  let num = parseInt(prompt("Elige la categoria a borrar:\n" + lista), 10);
  if (isNaN(num) || num < 1 || num > categorias.length) {
    console.log("Número no válido");
    return;
  }

  //comprobar si todas las tareas estan completadas
  let cat = categorias[num - 1];
  let puedeBorrar = true;
  let i = 1;
  while (i < cat.length && puedeBorrar) {
    if (cat[i][1] !== "done") {
      puedeBorrar = false;
    }
    i = i + 1;
  }
  if (!puedeBorrar) {
    console.log("No se puede borrar. La categoria tiene tareas sin completar.");
    return;
  }
  let conf = prompt("¿Seguro que quieres borrar '" + cat[0] + "' ? (s/n)");
  if (conf === "s" || conf === "S") {
    categorias.splice(num - 1, 1);
    console.log("Categoria borrada.");
  } else {
    console.log("Borrado cancelado.");
  }
}


//permite elegir una categoria para gestionar sus tareas
function seleccionarCategoria() {
  if (categorias.length === 0) {
    console.log("No hay categorias todavia.");
    return;
  }
  let lista = "";
  for (let i = 0; i < categorias.length; i++) {
    lista += (i + 1) + ". " + categorias[i][0] + "\n";    
  }

  //cuando se elige una categoria, llama al menu 3
  let num = parseInt(prompt("Elige una categoria:\n" + lista));
  if (!isNaN(num) && num >= 1 && num <= categorias.length) {
    let cat = categorias[num -1];
    menu3(cat);
  } else {
    console.log("Numero no válido");
  }
}

//Mostrar las tareas dentro de una categoria concreta
function mostrarTareas(cat) {
  let texto = "Categoria: " + cat[0] + "\n";
  if (cat.length === 1) {
    texto += "(Sin tareas)\n";
  } else {
    for (let i = 1; i < cat.length; i++) {
        texto += i + ". " + cat[i][0] + " (" + cat[i][1] + ")\n";      
      }
  }
  return texto;
}

//agregar nuevas tareas a una categoria
function anadirTareas(cat) {
  let nombre = prompt("Nombre de la nueva tarea (deja vacio para salir)");

  //cada tarea se guarda como [nombre, estado]
  while (nombre !== "" && nombre !== null) {
    cat.push([nombre, "todo"]);
    console.log("Tarea '" + nombre + "' añadida.");
    nombre = prompt("Nombre de otra tarea (deja vacio para salir)");
  }  
}

//Permite marcar las tareas como hechas
function marcarDone(cat) {
  if (cat.length === 1) {
    console.log("No hay tareas para marcar como hechas.");
    return;
  }

  //muestra las tareas
  let lista = "";
  for (let i = 0; i < cat.length; i++) {
    lista += i + ". " + cat[i][0] + " (" + cat[i][1] + ")\n"; 
  }

  //se pide el numero de las que queremos marcar
  let entrada = prompt("Número de la tarea a marcar como hecha:\n");
  if (entrada === null || entrada.trim() === "") {
    console.log("Operación cancelada o sin números");
    return;
  } 

  let indices = entrada.split(",").map(n => parseInt(n.trim(),10));
  let realizadas = []; //guardara pares, nombreCategoria, indiceTarea

  for (let j = 0; j < indices.length; j++) {
    let idx = indices[j];

    //cambia su estado a done
    if (!isNaN(idx) && idx >= 1 && idx < cat.length) {
      if (cat[idx][1] !== "done") {
        cat[idx][1] = "done";
        realizadas.push([cat[0], idx]);
        console.log("Tarea '" + cat[idx][0] + "' marcada como hecha.");
      }
    }
  }

  //guardan los cambios en historialDOne para poder deshacerlos mas tarde (sin terminar)
  if (realizadas.length > 0) {
    historialDone.push(realizadas);
    if (historialDone.length > 5) {
      historialDone.shift(); //solo guardamos los ultimos 5 pasos
    }
    console.log("Se guardó el paso en historial (pasos guardador: " + historialDone.length + ").");
  } else {
    console.log("No se marcó ninguna tarea nueva.");
  }
}

//revertir el ultimo grupo de tareas que se marcaron como done
function deshacerDone() {
  if (historialDone.length === 0) {
    console.log("No hay acciones de 'done' para deshacer.");
    return;
  }

  let ultimo = historialDone.pop(); //recupera el ultimo grupo
  for (let i = 0; i < ultimo.length; i++) {
    let nombreCat = ultimo[i][0];
    let indice = ultimo[i][1];
    //buscar la cateforia por nombre
    for (let c = 0; c < categorias.length; c++) {
      if (categorias[c][0] === nombreCat) {
        if (categorias[c][indice]) {
          categorias[c][indice][1] = "todo";
          console.log("Tarea '" + categorias[c][indice][0] + "' devuelta a 'todo'.");
        } else {
          console.log("Aviso: La tarea ya no existe (fue borrada), no se puede deshacer ese elemento.");
        }
      }
    } 
  }
  console.log("Ultimo paso 'done' deshecho correctamente.");
}


//borrar una tarea concreta de una categoria
function borrarTarea(cat) {
  if (cat.length === 1) {
    console.log("No hay tareas para borrar.");
    return;
  }
  let lista = "";
  for (let i = 1; i < cat.length; i++) {
    lista += i + ". " + cat[i][0] + " (" + cat[i][1] + ")\n";  
  }
  let num = parseInt(prompt("Número de la tarea a borrar:\n" + lista));
  if (!isNaN(num) && num >= 1 && num < cat.length) {
    let conf = prompt("¿Seguro que quieres borrar '" + cat[num][0] + "'? (s/n)");
    if (conf === "s" || conf === "S") {
      cat.splice(num, 1);
      console.log("Tarea borrada.");
    } else {
      console.log("Borrado cancelado.");
    }
  } else {
    console.log("Número no válido.");
  }
}

//menu de
function menu3(cat) {
  let opcion = "";
  while (opcion !== "4") {
    let texto = mostrarTareas(cat) +
    "\n1. Añadir nueva tarea" + 
    "\n2. Marcar tarea como hecha" + 
    "\n3. Borrar tarea" + 
    "\n4. Atrás";
    "\n5. Deshacer ultimos 'done' realizados";
    opcion = prompt(texto);

    if (opcion === null) {
      console.log("Volviendo al Menú 2...");
      return;

      opcion = opcion.trim();
    }

    if (opcion === "1") {
      anadirTareas(cat);
    } else if (opcion === "2") {
      marcarDone(cat);
    } else if (opcion === "3") {
      borrarTarea(cat);
    } else if (opcion === "4") {
      console.log("Volviendo al Menú 2...");
      break;
    } else if (opcion === "5") {
      deshacerDone();
    } else {
      console.log("Opción no válida.")
    }
  }
}

//menu principal
function menu1() {
  let opcion = "";

  if (categorias.length === 0) {
    console.log("Aún no hay categorias. Vamos a crear la primera.");
    anadirCategoria();
  }

  //ya con al menos una categoria
  while (opcion !== "4") {
    opcion = prompt(
      "MENU PRINCIPAL\n" + 
      "1. Listar categorias\n" + 
      "2. Añadir nueva categoria\n" +
      "3. Borrar categoria\n" + 
      "4. Salir"
    );

    if (opcion === null) {
        console.log("Entrada cancelada. Vuelve a elegir una opción.");
        opcion = "";
        continue;
      } 

      opcion = opcion.trim();

      if (opcion === "1") {
        if (categorias.length === 0) {
          console.log("No hay categorias aún.");
        } else {
          menu2();
        }
    } else if (opcion === "2") {
      anadirCategoria();
    } else if (opcion === "3") {
      borrarCategoria();
    } else if (opcion === "4") {
      console.log("Saliendo del programa...");
    } else {
      console.log("Opción no válida.");
    }
  }
}

//menu de categorias
function menu2() {
  let opcion = "";
  while (opcion !== "0") {
    if (categorias.length === 0) {
      console.log("No hay categorias aún.")
      return;
    }

    //mostrar lista de categorias
    let texto = "MENU 2\n";
    for (let i = 0; i < categorias.length; i++) {
      texto += (i + 1) + ". " + categorias[i][0] + "\n";      
    }
    texto += "0. Atrás"; 
    opcion = prompt(texto);

    if (opcion === null) {
      console.log("Volviendo al Menú 1...");
      return;
    }

    opcion = opcion.trim();


    if (opcion === "0") {
      console.log("Volviendo al Menú 1...");
      return;
    }

    let num = parseInt(opcion, 10);

    if (!isNaN(num) && num >= 1 && num <= categorias.length) {
      console.log("Has saleccionado la categoria: " + categorias[num - 1][0]);
      menu3(categorias[num -1]);
      //aqui luego podemos entrar al meny 3
    } else {
      console.log("Opcion no válida.");
    }
  }
}

console.log("Bienvenido al gestor de tareas simple.");
menu1();
console.log("Programa finalizado");