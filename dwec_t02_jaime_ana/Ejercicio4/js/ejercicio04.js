console.log("T02 - Ejercicio 04");


const entrada = prompt("Introduce un número para ver si es primo:");
if (entrada === null) {
    alert("Operacion cancelada.");      
} else {
    const num = Number(entrada.trim()); 

    if(!Number.isInteger(num)){
        alert("Por favor, introduce un número entero válido.");
    } else {
        let primo = true;
        if (num <= 1) {
            primo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    primo = false;
                    break;
                }
    }
    } 
    if (primo) {
        alert("El número " + num + " es primo.");
    } else {
        alert("El número " + num + " no es primo.");
    }  
}
}
