

console.log("T03 - Ejercicio 15");

let entrada = prompt("Introduce tu fecha de nacimiento (formato DD/MM/YYYY):");

if (!entrada) {
    alert("No has introducido ninguna fecha.")
} else {
    //comprobar longitud y separadores
    if (entrada.length !== 10 || entrada.charAt(2) !== "/" 
    || entrada.charAt(5) !== "/") {
        alert("Formato incorrecto. Debe ser DD/MM/YYYY");
    } else {
        let partes = entrada.split("/");
        let dia = parseInt(partes[0]);
        let mes = parseInt(partes[1]);
        let anio = parseInt(partes[2]);

        //comprobar que son números y rangos básicos
        if (isNaN(dia) || isNaN(mes) || isNaN(anio) 
        || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1900) {
       alert("Fecha no válida");
        } else {
            //crear la fecha
            let fechaNacimiento = new Date(anio, mes - 1, dia);
            if (fechaNacimiento.getDate() !== dia ||
                fechaNacimiento.getMonth() !== mes - 1 ||
                fechaNacimiento.getFullYear() !== anio) {
                    alert("La fecha no existe");
                } else {
                    //calcular la edad
                    let hoy = new Date();
                    let edad = hoy.getFullYear() - anio;

                    //ajustar si aun no ha cumplido este año
                    if (hoy.getMonth() < (mes - 1) ||
                        (hoy.getMonth() === (mes -1) && hoy.getDate() < dia)) {
                        edad--;
                        }

                    alert("Tu edad actual es: " + edad + " años");
                }
        }
    }
}