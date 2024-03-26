function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumaNotas = 0;
  var contador = 0;
  promedioFinal = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    sumaNotas = sumaNotas + resultadosTest[i];
    contador++; 
  }

  promedioFinal= sumaNotas / contador;

  return promedioFinal;
}

module.exports = promedioResultadosTest;
