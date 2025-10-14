
console.log("T03 parte 3 - Ejercicio 12");

let categorias = [];

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


function anadirCategoria() {
  let nombre = prompt("Nombre de la nueva categoria (deja vacio para salir):");
  while (nombre !== "" && nombre !== null) {
    categorias.push([nombre]);
    console.log("Categoria '" + nombre + "' creada.");
    nombre = prompt("Nombre de otra categoria (deja vacio para salir)");
  }
}


function borrarCategoria() {
  if (categorias.length === 0) {
    console.log("No hay categorias para borrar.");
    return;
  }
  let lista = "";
  for (let i = 0; i < categorias.length; i++) {
    lista += (i + 1) + ". " + categorias[i][0] + "\n";    
  }
  let num = parseInt(prompt("Elige la categoria a borrar:\n" + lista));
  if (isNaN(num) || num < 1 || num > categorias.length) {
    console.log("Número no válido");
    return;
  }
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



function seleccionarCategoria() {
  if (categorias.length === 0) {
    console.log("No hay categorias todavia.");
    return;
  }
  let lista = "";
  for (let i = 0; i < categorias.length; i++) {
    lista += (i + 1) + ". " + categorias[i][0] + "\n";    
  }
  let num = parseInt(prompt("Elige una categoria:\n" + lista));
  if (num >= 1 && num <= categorias.length) {
    menuTareas(categorias[num - i]);
  }
}


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

function anadirTareas(cat) {
  let nombre = prompt("Nombre de la nueva tarea (deja vacio para salir)");
  while (nombre !== "" && nombre !== null) {
    cat.push([nombre, "todo"]);
    console.log("Tarea '" + nombre + "' añadida.");
    nombre = prompt("Nombre de otra tarea (deja vacio para salir)");
  }  
}


function marcarDone(cat) {
  if (cat.length === 1) {
    console.log("No hay tareas para marcar como hechas.");
    return;
  }
  let lista = "";
  for (let i = 0; i < cat.length; i++) {
    lista += i + ". " + cat[i][0] + " (" + cat[i][1] + ")\n"; 
  }
  let num = parseInt(prompt("Número de la tarea a marcar como hecha:\n"));
  if (!isNaN(num) && num >= 1 && num < cat.length) {
    cat[num][1] = "done";
    console.log("Tarea '" + cat[num][0] + "' marcada como hecha.");
  } else {
    console.log("Número no válido");
  }
}


function borrarTarea(cat) {
  if (cat.length === 1) {
    console.log("No hay tareas para borrar.");
    return;
  }
  let lista = "";
  for (let i = 0; i < cat.length; i++) {
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


function menu3(cat) {
  let opcion = "";
  while (opcion !== "4") {
    let texto = mostrarTareas(cat) +
    "\n1. Añadir nueva" + 
    "\n2. Marcar tarea como hecha" + 
    "\n3. Borrar tarea" + 
    "\n4. Atrás";
    opcion = prompt(texto);

    if (opcion === "1") {
      anadirTareas(cat);
    } else if (opcion === "2") {
      marcarDone(cat);
    } else if (opcion === "3") {
      borrarTarea(cat);
    } else if (opcion === "4") {
      console.log("Volviendo al Menú 2...");
    } else {
      console.log("Opción no válida.")
    }
  }
}


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


function menu2() {
  let opcion = "";
  while (opcion !== String(categorias.length + 1)) {
    if (categorias.length === 0) {
      console.log("No hay categorias aún.")
      return;
    }

    //mostrar lista de categorias
    let texto = "MENU 2\n";
    for (let i = 0; i < categorias.length; i++) {
      texto += (i + 1) + ". " + categorias[i][0] + "\n";      
    }
    texto += (categorias.length + 1) + ". Atrás"; 
    opcion = prompt(texto);

    let num = parseInt(opcion);
    if (!isNaN(num) && num >= 1 && num <= categorias.length) {
      console.log("Has saleccionado la categoria: " + categorias[num - 1][0]);
      //aqui luego podemos entrar al meny 3
    } else if (opcion === String(categorias.length + 1)) {
      console.log("Volviendo al Menú 1...");
    } else {
      console.log("Opcion no válida.");
    }
  }
}

console.log("Bienvenido al gestor de tareas simple.");
menu1();
console.log("Programa finalizado");