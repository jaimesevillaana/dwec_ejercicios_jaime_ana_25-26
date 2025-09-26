/*
* Desarrolla un script que determine si el precio de venta de un 
* artículo dado por un usuario es valido.
* El precio no puede tener más de 6 dígitos en la parte entera y 
* sólo podrá tener dos decimales. Los decimales podrán estar indicados por “.” ó “,”. 
* Deberás hacer uso del objeto RegExp y crear una función que se denomine
*  "validarMiReal()" que reciba la cadena 
* introducida por el usuario y devuelva un booleano.
*/


console.log("T03 - Ejercicio 20");

function validaMiReal (cadena) {
    //creamos el patron
    var patt = new RegExp('^\\d{1,6}([\\.,]\\d{1,2})?$'); // ejemplo de patrón para números reales
    return patt.test(cadena);
}

function convertirMiReal (precio) {
    var precioNormalizado = precio.replace(",", ".");
    return parseFloat(precioNormalizado);
}


console.log(validaMiReal("123")); //true, entero valido
console.log(validaMiReal("123.45")); //true, dos decimales con punto
console.log(validaMiReal("123,4")); //true, un decimal con coma
console.log(validaMiReal("123456")); //true, 6 digitos exactos
console.log(validaMiReal("1234567")); //false, mas de 6 digitos
console.log(validaMiReal("123.456")); //false, mas de 2 decimales
console.log(validaMiReal("abc")); //false, no numerico
