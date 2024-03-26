function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tablaMultiplicar = new Array();
  for (let i = 0; i <= 10; i++) {
    tablaMultiplicar.push(i * 6);
  }

  return tablaMultiplicar;
}
console.log(tablaDelSeis());
module.exports = tablaDelSeis;
