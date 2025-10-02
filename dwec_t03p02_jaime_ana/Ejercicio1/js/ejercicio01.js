


function oraculo() {
  //Si no se recibe ningún argumento, usamos 0 como valor por defecto
  let args = arguments.length === 0 ? [0] : Array.from(arguments);

  //Función 1: Tradicional - Validar los argumentos
  function validarArgumentos(valores) {
    let validos = [];

    for (let valor of valores) {
      if (typeof valor === "string") {

        if (!isNaN(valor)) {
          validos.push(Number(valor));
        } else {
          console.error(`Error: "${valor}" no es un número válido.`);
          return undefined;
        }
      } else if (typeof valor === "number") {
        validos.push(valor);
      } else {
        console.error(`Error: valor de tipo ${typeof valor} no permitido.`);
        return undefined;
      }
    }

    return validos;
  }

  let valoresNumericos = validarArgumentos(args);
  if (valoresNumericos === undefined) return;

  // Función 2: Anónima - Calcular media
  const calcularMedia = function (valores) {
    let suma = valores.reduce((acc, val) => acc + val, 0);
    return suma / valores.length;
  };

  //Función 3: Flecha - Máximo
  const maximo = valores => Math.max(...valores);

  //Función 4: Flecha - Mínimo
  const minimo = valores => Math.min(...valores);

  // unción 5: Tradicional 
  function calcularDesviaciones(valores, media) {
    let desviaciones = [];
    for (let val of valores) {
      desviaciones.push((val - media).toFixed(2)); // 2 decimales
    }
    return desviaciones;
  }

  //Función 6: Anónima - Mensaje según la media
  const obtenerMensaje = function (media, max, min, desviaciones) {
    if (media < 30) {
      return "Tu destino es entrenar más duro. Tus estadísticas están por debajo del mínimo requerido.";
    } else if (media >= 30 && media <= 60) {
      return `Estás en el camino del héroe. El valor máximo alcanzado fue ${max} y el mínimo ${min}.`;
    } else {
      return `Eres un maestro legendario. Tus desviaciones son: [${desviaciones.join(", ")}].`;
    }
  };

  //Cálculos
  const media = calcularMedia(valoresNumericos);
  const max = maximo(valoresNumericos);
  const min = minimo(valoresNumericos);
  const desviaciones = calcularDesviaciones(valoresNumericos, media);
  const mensaje = obtenerMensaje(media, max, min, desviaciones);

  //Resultado
  console.log("Resultados del Oráculo:");
  console.log("Valores:", valoresNumericos);
  console.log("Media:", media.toFixed(2));
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
  console.log("Mensaje:", mensaje);
}

//Función autoinvocada

(function () {
  console.log("🔮 Consulta 1:");
  oraculo(25, 40, 35);

  console.log("\n🔮 Consulta 2:");
  oraculo(70, 90, 85, "100");

  console.log("\n🔮 Consulta 3:");
  oraculo("juan", 45); // debe dar error

  console.log("\n🔮 Consulta 4:");
  oraculo(); // sin argumentos

  console.log("\n🔮 Consulta 5:");
  oraculo("55", "60", "65"); // strings numéricos válidos
})();
