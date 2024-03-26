function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var sumaElementosArray=0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    sumaElementosArray+= arrayOfNums[i];
    
  }
  return sumaElementosArray;
}

module.exports = agregarNumeros;
