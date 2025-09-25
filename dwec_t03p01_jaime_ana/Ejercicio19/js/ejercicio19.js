
console.log("T03 - Ejercicio 19");


let a = ["Sung", "Luffy", "Goku", "Sakura", "Asta", "Kenshin", "Meliodas"];
//fecha actual
let b = new Date();

//getDay da el dia de la semana (hoy es jueves, por lo tanto dia 4, domingo es dia 0)
//los corchetes significa que esta cogiendo algo del array a)
let c = a [b.getDay() % a.length];

let d = 0;
//c.length devuelve la cantidad de caracteres del elemento del array, en este caso Asta)
for (let i = 0; i < c.length; i++) {
   let e = Math.floor(Math.random() * c.length); //numero aleatorio redondeando hacia abajo del 0 al 3
   let f = c.charAt(e); //coge el numero aleatorio y muestra la letra que esta en esa posicion

   if (i % 2 === 0) { //si la posicion es solo par
       f = f.toUpperCase();
       c = c.slice(0, i) + f + c.slice(i + 1);
   }

   if ("aeiou".includes(f.toLowerCase())) {
       d += Math.pow(2, i);
   }

   console.log(f);
}
//mostrar sin decimales (toFixed) por lo que es posible que d tenga decimales
console.log(d.toFixed(0));
console.log(c);
console.log(e); // no valido porque la variable esta dentro del for, inaccesible