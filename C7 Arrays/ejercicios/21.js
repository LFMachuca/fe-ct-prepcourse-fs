function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesConsultados = ['Marzo','Noviembre','Enero'];
  var mesesEncontrados =[];
  for (const mes of mesesConsultados) {
    if (array.includes(mes)) {
      mesesEncontrados.push(mes);
    }else{
      return 'No se encontraron los meses pedidos';
    }
  }
  return mesesEncontrados;

}
module.exports = mesesDelAño;
