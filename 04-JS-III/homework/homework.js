// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var array = [1,2,3,4,5,6]
   return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
   return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array [array.length];
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = [1,2,3,4,5];
 array([0][1][2][3][4]) + 1
 return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = [1,2,3,4,5];
   array.push ('coco');
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array = [1,2,3,4,5];
   array.unshift ('coco');
   return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras = ['pelo', 'duro'];
  return palabras
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array = [1,2,3,4,5];
  if (numero === 1 || 2 || 3 || 4 || 5);{
  return true;
 } else {
    return false
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numeros = [5,5,5,5,5];
  return Suma(numeros);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTest = [6,5,7,2];
  for (let i = 0; i < resultadosTest.length; (i[0] + i[1] + i[2] + i[3]) / 4); {
 console.log (resultadosTest.length(i[0] + i[1] + i[2] + i[3]));
 }
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var array = [2,4,9,5];
  if ([0]>[1] [2] [3]); {
  return [0];
 } else if ([1]>[0] [2] [3]) {
  return [1];
 }  else if ([2]>[0] [1] [3]) {
  return [2];
 } else if ([3]>[0] [1] [2]) {
  return [3];
 }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo.
  // Escribe tu código aquí:
  var argumentos = [5,5,5,5,5];
  return multiplicación(argumentos);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var elementos = [1,2,3,4,5,6,7];
  if (elementos >= 18); {
    return elementos [elementos.length];
  }
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí:
  var diasDeLaSemana = [1,2,3,4,5,6,7];
   if (diaDeLaSemana === 1 || 7); {
     return 'Es fin de semana'
   } else if (diaDeLaSemana === 2 || 3 || 4 || 5 || 6);{
     return 'Es dia Laboral'
   }
 }


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (numeroentero >= 90 && < 100); {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
    var array = [6,6,6,6];
    if ([0] === [1] && [2] && [3]); {
      return true;
    } else {
      return false;
    }
 }


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var string = []
  var mesesDelAño = [Enero,Marzo,Noviembre];
  if (mesesdelaño === Enero || Marzo || Noviembre);{
    return var str = (mesesDelAño.shift(); || mesesDelAño.pop());
    return str
  } else if (mesesdelaño ==! Enero || Marzo || Noviembre);{
    return 'No se encontraron los meses pedidos'
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var str = [];
  var lista = [170,94,5]
  if (numero > 100);{
    return var str = (lista.shift() || lista.pop());
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var juan = [];
  var pepe = [20];
  for (let i = 2; i < 'pepe'; i+2 ) {
 console.log ('pepe'(i))
   return var juan = (pepe.shift() || pepe.pop());
 }
} else if (suma === iteraciones) {
   return break
   return 'Se interrumpió la ejecución'
   return juan
 }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var 'rosa' = [];
  var 'marta' = [20];
  for (let i = 2; i < 'marta'; i+2 ) {
 console.log ('marta'(i))
   return var 'rosa' = ('marta'.shift() || 'marta'.pop());
 }
} else if (iteraciones === 5) {
   return continue 
   return 'rosa'
 }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
