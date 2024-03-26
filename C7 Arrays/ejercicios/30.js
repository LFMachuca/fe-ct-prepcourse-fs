function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
    var elementoVisto = new Array();

    for (const num of numeros) {
      if (elementoVisto[num] !== undefined) {
        return num;
      }else{
        elementoVisto[num] = true;
      }
    }
}

module.exports = encontrarElementoRepetido;