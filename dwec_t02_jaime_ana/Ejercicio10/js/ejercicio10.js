console.log("T02 - Ejercicio 10");

let num = parseInt(prompt("Introduce un número:"));

function factorial(n){
    if(n < 0){
        return "El factorial no está definido para números negativos";
    } else if(n === 0 ||n === 1){
        return 1;
    } else {
    let resultado = 1;
    for(let i = 2; i <= n; i++){
        resultado *= i;
    }   
    return resultado;
    }
}