
console.log("T03 parte 3 - Ejercicio 11");

let equipos = [
  ["Equipo", "PTS", "PJ", "PG", "PE", "PP"],
  ["Levante", 40, 14, 13, 1, 0],
  ["Málaga", 37, 14, 12, 1, 1],
  ["Eibar", 34, 14, 11, 1, 2]
];



//funcion para saber quien es el ganador
function lider(matriz) {
  const mejor = matriz.slice(1).reduce((max, equipo) =>
    equipo[1] > max[1] ? equipo : max
  );
  return mejor[0];
}


//funcion para saber quien lleba mas partidos perdidos
function partidosPerdidos(matriz) {
   const peor = matriz.slice(1).reduce((max, equipo) =>
    equipo[5] > max[5] ? equipo : max
  );
  return peor[0];   
}


//funcion para saber quien lleva mas partidos ganados
function partidosGanados(matriz) {
  const mejor = matriz.slice(1).reduce((max, equipo) =>
    equipo[3] > max[3] ? equipo : max
  );
  return mejor[0];
}


//calcular puntos
function calcularPuntos(pg, pe) {
  return (pg * 3) + pe;
}

//calcular partidos jugados
function calcularPartidos(pg, pe, pp) {
  return pg + pe + pp;
}


//mostrar tabla
function mostrarTabla(matriz) {
  console.log("Clasificación actual:");
  console.table(
    matriz.map(e => ({
      Equipo: e[0],
      Puntos: e[1],
      PJ: e[2],
      PG: e[3],
      PE: e[4],
      PP: e[5]
    }))
  );
}


//funcion insertar equipo
function insertarEquipo(matriz) {
  const nombre = prompt("Introduce el nombre del nuevo equipo: ");
  const pg = parseInt(prompt("Partidos ganados:"), 10);
  const pe = parseInt(prompt("Partidos empatados: "), 10);
  const pp = parseInt(prompt("Partidos perdidos: "), 10);
  const pts = calcularPuntos(pg, pe);
  const pj = calcularPartidos(pg, pe, pp);

  matriz.push([nombre, pts, pj, pg, pe, pp]);
  ordenarClasificacion(matriz);
  console.log("Equipo añadido y clasificación actualizada.");
}

//funcion actualizar jornada
function actualizarJornada(matriz) {
  for (let i = 1; i < matriz.length; i++) {
    let resultado = prompt(`¿Qué ha hecho ${matriz[i][0]} ? (G = ganó, E = empató, P = perdió)`).toUpperCase();
    if (resultado === "G") {
      matriz[i][3]++;
      matriz[i][1] += 3;
    } else if (resultado === "E") {
      matriz[i][4]++;
      matriz[i][1] += 1;
    } else if (resultado === "P") {
      matriz[i][5]++;
    }
    matriz[i][2]++;
  }

  ordenarClasificacion(matriz);
  console.log("Jornada actualizada.");
}


//funcion ordenar clasificacion
function ordenarClasificacion(matriz) {
  matriz.sort((a, b) => b[1] - a[1]);
}

//Menú

let opcion;

do {
  opcion = parseInt(prompt(
    "MENU PRINCIPAL\n\n" +
    "1. Mostrar clasificación (en consola)\n" + 
    "2. Ver lidel actual: \n" +
    "3. Equipo con más partidos ganados\n" +
    "4. Equipo con más partidos perdidos\n" +
    "5. Insertar nuevo equipo\n" + 
    "6. Introducir jornada\n" + 
    "7. Ordenar clasificación\n" + 
    "0. Salir\n\n" +
    "Elige una opción:"
  ));

  switch (opcion) {
    case 1:
      mostrarTabla(equipos);
      break;
    case 2:
      console.log("El lider actual es: " + lider(equipos));
      break;
    case 3: 
      console.log("El que más partidos ha ganado es: " + partidosGanados(equipos));
      break;
    case 4: 
      console.log("El que más partidos ha perdido es: " + partidosPerdidos(equipos));
      break;
    case 5: 
    insertarEquipo(equipos);
      break;
    case 6: 
    actualizarJornada(equipos);
      break;
    case 7: 
    ordenarClasificacion(equipos);
    console.log("Clasificación ordenada por puntos.");
      break;
    case 0:
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción no válida. Inténtalo de nuevo.")
  }
} while (opcion !== 0);