function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var i;
   var suma=0;
   for (i = 0; i <= n ; i++) {
     suma= suma + i;
     if (i >= 100) {
       break;
     }
   }
   return suma;
}

module.exports = sumarHastaNConBreak;
