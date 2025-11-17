

console.log("T04 - Ejercicio 04");


let personajes = [
    {
        nombre: "Spider-Man",
        nombreReal: "Peter Parker",
        profesionReal: "Fotógrafo",
        editorial: "Marvel",
        superpoder: "Agilidad sobrehumana, sentido arácnido, fuerza mejorada",
        debilidad: "Familia, responsabilidades",
        heroe: "héroe",
        edad: 28,
        numeroApariciones: 2500,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Batman",
        nombreReal: "Bruce Wayne",
        profesionReal: "Empresario",
        editorial: "DC",
        superpoder: "Inteligencia superior, combate cuerpo a cuerpo",
        debilidad: "Humanidad, miedo a perder seres queridos",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Iron Man",
        nombreReal: "Tony Stark",
        profesionReal: "Ingeniero, Empresario",
        editorial: "Marvel",
        superpoder: "Armadura tecnológica avanzada, inteligencia superior",
        debilidad: "Alcoholismo, ego",
        heroe: "héroe",
        edad: 40,
        numeroApariciones: 2200,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Joker",
        nombreReal: "Desconocido",
        profesionReal: "Criminal",
        editorial: "DC",
        superpoder: "Ingenio criminal, inmunidad a toxinas",
        debilidad: "Insanidad",
 heroe: "villano",
        edad: 45,
        numeroApariciones: 1000,
        equipo: "Injusticia",
        nacionalidad: "Desconocido",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Wonder Woman",
        nombreReal: "Diana Prince",
        profesionReal: "Embajadora, guerrera",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, habilidades de combate",
        debilidad: "Cuerdas mágicas",
        heroe: "héroe",
        edad: 3000,
        numeroApariciones: 1200,
        equipo: "Liga de la Justicia",
        nacionalidad: "Themyscirana",
        especie: "Amazona",
        universo: "Tierra-1"
    },
    {
        nombre: "Thor",
        nombreReal: "Thor Odinson",
        profesionReal: "Dios del Trueno",
        editorial: "Marvel",
        superpoder: "Control del trueno, vuelo, fuerza sobrehumana",
        debilidad: "Humildad (cuando sin Mjolnir)",
        heroe: "héroe",
        edad: 1500,
        numeroApariciones: 1500,
        equipo: "Los Vengadores",
        nacionalidad: "Asgardiano",
        especie: "Dios",
        universo: "Tierra-616"
    },
    {
        nombre: "Loki",
        nombreReal: "Loki Laufeyson",
        profesionReal: "Dios de las mentiras",
        editorial: "Marvel",
        superpoder: "Ilusionismo, cambio de forma, magia",
        debilidad: "Celos hacia Thor",
        heroe: "antiheroe",
        edad: 1000,
        numeroApariciones: 900,
        equipo: "",
nacionalidad: "Asgardiano",
        especie: "Gigante de Hielo",
        universo: "Tierra-616"
    },
    {
        nombre: "Flash",
        nombreReal: "Barry Allen",
        profesionReal: "Forense",
        editorial: "DC",
        superpoder: "Súper velocidad, viaje en el tiempo",
        debilidad: "Demasiada velocidad puede destruir el tiempo",
        heroe: "héroe",
        edad: 30,
        numeroApariciones: 1500,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Thanos",
        nombreReal: "Thanos",
        profesionReal: "Tirano galáctico",
        editorial: "Marvel",
        superpoder: "Fuerza inmensa, inteligencia táctica, uso del Guantelete del Infinito",
        debilidad: "Arrogancia, obsesión con la muerte",
        heroe: "villano",
        edad: 1000,
        numeroApariciones: 500,
        equipo: "Orden Negra",
        nacionalidad: "Titán",
        especie: "Eterno-Deviant",
        universo: "Tierra-616"
    },
    {
        nombre: "Superman",
        nombreReal: "Clark Kent (Kal-El)",
        profesionReal: "Periodista",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, visión de rayos X, invulnerabilidad",
        debilidad: "Kryptonita",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Kryptoniano",
        especie: "Extraterrestre (Kryptoniano)",
        universo: "Tierra-1"
}
];



//"some" para comprobar si hay algún personaje que sea anti-héroe.

//¿Hay al menos un personaje que sea anti-héroe? some()
//recibe una funcion callback, some llama a esa funcion para cada elemento del array, en orden
//Si encuentra al menos uno, devuelve true y se detiene.
//si algun personaje no tiene esa propiedad , la comparacion devuelve false
//Loki es “antiheroe”, así que el resultado es true.

//const hayAntiheroe = personajes.some(personaje => personaje.heroe === "antiheroe");
//console.log(hayAntiheroe); // true

//para verificar si todos los personajes son humanos.

//¿Todos los personajes son humanos? every()
//Revisa cada personaje.
//Si alguno no es humano, devuelve false.
//Si esta vacio el array every devuelve true por definición porque no hay ningun elemento que viole la condicion
//En este caso hay muchos que no lo son (Thor, Wonder Woman, Thanos…), así que el resultado es false

//const todosHumanos = personajes.every(personaje => personaje.especie === "Humano");
//console.log(todosHumanos); // false

//comprobar si existe algún personaje cuyo universo sea "Tierra-616".

//includes() busca si un valor concreto existe en una lista
//como hay varios personajes de ese universo el resultado será true.
//si universo contiene objetos en lugar de string, buscaria la misma referencia del objeto, 
//no una comparacion por propiedad

//const hayTierra616 = universos.includes("Tierra-616");
//console.log(hayTierra616); // true

const numeros = [4, 8, 15, NaN, undefined];
let texto1 = numeros.includes(8,-4);
let texto2 = numeros.indexOf(NaN);
console.log(texto1);
console.log(texto2);