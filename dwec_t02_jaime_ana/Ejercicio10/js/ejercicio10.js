console.log("T02 - Ejercicio 10");

function factorial(n){
    if(n < 0){
        return "El factorial no está definido para números negativos";
    }
    if(n === 0 || n === 1){
        return 1;
    }
    let resultado = 1;
    for(let i = 2; i <= n; i++){
        resultado *= i;
    }  
    return resultado;
}

let numero = parseInt(prompt("Introduce un número:"));

let resultado = factorial(numero);

alert(`El factoial de ${numero} es: ${resultado}`);