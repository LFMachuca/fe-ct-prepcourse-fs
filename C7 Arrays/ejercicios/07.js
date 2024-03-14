function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  var longuitud = array.length;
  var ordenado = false;
  while (!ordenado) {
    ordenado = true;
  for (let i = 0; i < longuitud - 1; i++) {
  
    if (array[i] > array[i + 1]) {
      var temp=array[i];
      array[i]=array[i + 1];
      array[i +1]= temp;
      ordenado = false;
    }
  }
}
  return array;
}
module.exports = ordenarArray;
