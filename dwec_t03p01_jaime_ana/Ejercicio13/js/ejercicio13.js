

console.log("T03 - Ejercicio 13");

Math.random2 = function(lim_inf, lim_sup) {
    return Math.floor(Math.random() * (lim_sup - lim_inf + 1)) + lim_inf;
};

console.log("Simulación del sorteo del cupón diario de la ONCE con Math.ramdom2");

//definir el nuevo metodo
Math.random2 = function(lim_inf, lim_sup) {
    return Math.floor(Math.random() * (lim_sup - lim_inf + 1)) + lim_inf;
};

//usar el metodo para sacar 5 numeros de 0 a 9
let decenasDeMillar = Math.random2(0, 9);
let unidadesDeMillar = Math.random2(0, 9);
let centenas = Math.random2(0, 9);
let decenas = Math.random2(0, 9);
let unidades = Math.random2(0, 9);

let numeroPremiado = "" + decenasDeMillar 
+ unidadesDeMillar
+ centenas
+ decenas
+ unidades;

console.log("El numero premiado es: " + numeroPremiado);
