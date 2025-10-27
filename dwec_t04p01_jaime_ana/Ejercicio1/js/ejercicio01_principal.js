console.log("T04 - Ejercicio 01");


function funcionPrueba1() {
  console.log("Creando alumnos...");

  const alumno1 = new Alumno("71217113M", "Ana", "2000-05-15", 7.5, 8.2, 9.1, 'm');
  const alumno2 = new Alumno("87654321B", "Jaime", "1998-10-20", 6.5, 5.8, 7.0, 'h');

  // Mostrar información
  let salida = "=== INFORMACIÓN INICIAL ===\n";
  salida += alumno1.mostrarInformacion() + "\n";
  salida += alumno2.mostrarInformacion() + "\n";

  // Comparar notas
  salida += "=== COMPARACIÓN ===\n";
  const comparacion = alumno1.comparar(alumno2);
  if (comparacion === 1) salida += `${alumno1.nombre} tiene mejor nota.\n`;
  else if (comparacion === -1) salida += `${alumno2.nombre} tiene mejor nota.\n`;
  else salida += "Ambos tienen la misma nota.\n";

  // Cambiar notas de Ana
  alumno1.cambiarNotas(4, 5, 6);
  salida += "\n=== CAMBIO DE NOTAS ===\n";
  salida += alumno1.mostrarInformacion() + "\n";

  // Aprobados
  salida += "=== APROBADOS ===\n";
  salida += `${alumno1.nombre}: ${alumno1.estaAprobado() ? "Sí" : "No"}\n`;
  salida += `${alumno2.nombre}: ${alumno2.estaAprobado() ? "Sí" : "No"}\n`;

  console.log(salida);
  document.getElementById("output").textContent = salida;
}

// Ejecutar
funcionPrueba1();
