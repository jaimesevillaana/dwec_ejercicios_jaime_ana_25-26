

console.log("T03 - Ejercicio 17");

let entrada1 = prompt("Introduce la primera fecha (AAAA-MM-DD):");
let entrada2 = prompt("Introduce la segunda fecha (AAAA-MM-DD):");

let f1 = new Date(entrada1);
let f2 = new Date(entrada2);

let mayor, menor;

if (f1 > f2) {
    mayor = f1;
    menor = f2;
} else {
    mayor = f2;
    menor = f1;
}

//calcular la diferencia entre meses
let anios = mayor.getFullYear() - menor.getFullYear();
let meses = mayor.getMonth() - menor.getMonth();
let diferenciaMeses = anios * 12 + meses;

//ajustar por dias
if (mayor.getDate() < menor.getDate()) {
    diferenciaMeses--;
}

alert("La fecha mayor es: " + mayor.toDateString());
alert("La fecha menor es: " + menor.toDateString());
alert("Meses entre ambas: " + diferenciaMeses);
