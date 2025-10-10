
console.log("T03 parte 3 - Ejercicio 11");

const jugadasValidas = new Set(["piedra", "papel", "tijera", "lagarto", "spock"]);

//funcion para pedir el nombre de un jugador (verifica duplicado)
function pedirNombreJugador(mapJugadores, numero) {
  let nombre;
  do {
    nombre = prompt(`Introduce el nombre del jugador ${numero}:`).trim();
  } while (!nombre || mapJugadores.has(nombre)); //se repite si esta vacio o ya existe
  return nombre;
}

//funcion para pedir una jugada vallida
function pedirJugada(numeroRonda, nombre) {
  let jugada;
  do {
    jugada = prompt(
      `Ronda ${numeroRonda} - ${nombre}, elige tu jugada:\n` +
      "1. Piedra\n2. Papel\n3. Tijera\n4. Lagarto\n5. Spock\n" +
      "(Escribe el nombre o el numero)").toLowerCase().trim();

      //permitir introducir numero o texto
      if (jugada === "1") jugada = "piedra";
      else if (jugada === "2") jugada = "papel";
      else if (jugada === "3") jugada = "tijera";
      else if (jugada === "4") jugada = "lagarto";
      else if (jugada === "5") jugada = "spock";

  } while (!jugadasValidas.has(jugada)); //repetir hasta que sea valida

  return jugada;
}

//funcion para generar una jugada aleatoria para la maquina
function jugadaAleatoria() {
  const opciones = Array.from(jugadasValidas);
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}


//funcion que determina quien gana una ronda
function ganadorRonda(j1, j2) {
  if (j1 === j2) return 0; //empate

  const ganaA = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["spock", "papel"],
    spock: ["tijera", "piedra"]
  };
  return ganaA[j1].includes(j2) ? 1 : 2; // 1 gana j1 y 2 gana j2
}

//programa principal
console.log("Bienvenido a Piedra, Papel, Tijera, Lagarto, Spock");

const jugadores = new Map();

//pedir nombres
const nombre1 = pedirNombreJugador(jugadores, 1);
let nombre2 = prompt("Introduce el nombre del jugador 2 o escribe 'maquina' para jugar contra la maquina:").trim().toLowerCase();

if (nombre2 === "maquina") {
  nombre2 = "Máquina";
} else {
  while (!nombre2 || nombre2 === nombre1) {
    nombre2 = prompt("Nombre no valido o repetido. Introduce otro nombre:");
  }
}

//pedir jugadas de cada jugador
const jugadasJ1 = [];
const jugadasJ2 = [];

for (let i = 1; i <= 5; i++) {
  jugadasJ1.push(pedirJugada(1, nombre1));
  if (nombre2 === "Máquina") {
    const aleatoria = jugadaAleatoria();
    jugadasJ2.push(aleatoria);
    console.log(`La maquina ha elegido ${aleatoria}`);
  } else {
    jugadasJ2.push(pedirJugada(i, nombre2));
  }
}

//guardar en el map
jugadores.set(nombre1, jugadasJ1);
jugadores.set(nombre2, jugadasJ2);


//comparar resultados
let puntosJ1 = 0;
let puntosJ2 = 0;


console.log("\nRESULTADOS DE LAS 5 RONDAS:\n");

for (let i = 0; i < 5; i++) {
  const j1 = jugadasJ1[i];
  const j2 = jugadasJ2[i];
  const ganador = ganadorRonda(j1, j2);

  console.log(`Ronda ${i + 1}: ${nombre1} (${j1}) vs ${nombre2} (${j2})`);

  if (ganador === 0) {
    console.log("Empate\n");
  } else if (ganador === 1) {
    console.log(`Gana ${nombre1}\n`);
    puntosJ1++;
  } else {
    console.log(`Gana ${nombre2}\n`);
    puntosJ2++;
  }
}

//resultado final
console.log("Puntuacion final\n");
console.log(`${nombre1}: ${puntosJ1} puntos\n`);
console.log(`${nombre2}: ${puntosJ2} puntos\n`);


if (puntosJ1 > puntosJ2) {
  console.log(`${nombre1} ha ganado la partida!`);
} else if (puntosJ2 > puntosJ1) {
  console.log(`${nombre2} ha ganado la partida!`);
} else {
  console.log("Empate total!");
}

