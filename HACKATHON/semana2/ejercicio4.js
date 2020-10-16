/*
Ejercicio #4: Escriba una función de JavaScript para contar el número
de vocales en una cadena dada
*/
const consultarTexto = (phare) => {
  var textoRoto = phare.toLowerCase().split("");
  for (k = 0; k < textoRoto.length; k++) {
    switch (textoRoto[k]) {
      case "a":
      case "à":
      case "á":
        a++;
        break;
      case "e":
      case "é":
      case "è":
        e++;
        break;
      case "i":
      case "í":
      case "ì":
        i++;
        break;
      case "o":
      case "ó":
      case "ò":
        o++;
        break;
      case "u":
      case "ú":
      case "ù":
        u++;
        break;
      case " ":
        blancos++;
    }
  }

  totalVocales = a + e + i + o + u;

  console.log("Hay " + a + " vocales 'a'");
  console.log("Hay " + e + " vocales 'e'");
  console.log("Hay " + i + " vocales 'i'");
  console.log("Hay " + o + " vocales 'o'");
  console.log("Hay " + u + " vocales 'u'");
  console.log("Hay " + blancos + " blancos");
  console.log(`Total de vocal es : ${totalVocales}`);
};

var a = (e = i = o = u = blancos = 0);
vectorLetras = consultarTexto("escribeá un texto cualquiera");
