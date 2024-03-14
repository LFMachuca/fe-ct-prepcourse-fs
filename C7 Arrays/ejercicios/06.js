function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
   var longuitud = array.length;
   var mitad = Math.floor(longuitud/2);

   for(var i = 0 ; i < mitad; i++){
    var temp = array[i];
    array[i]=array[longuitud - 1 -i];
    array[longuitud - 1 - i]=temp;
   }
   return array;
}



module.exports = invertirArray;
