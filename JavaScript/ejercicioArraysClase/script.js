/**
 * @author: AarónPF
 * @description: ejercicios con Arrays
 */


/**
 * Ejercicio 1
 * Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño.
 * La función debe devolver un nuevo array que contenga la suma de los elementos 
 * correspondientes de arr1 y arr2.
 */
const a = [1,2,3];
const b = [4,5,6];

function sumaArrays(arr1,arr2) {
    if(arr1.length !== arr2.length) {
        return "Los arrays deben tener la misma longitud" 
    } else {
        const sumaArray = arr1.map( (num,index) => num + arr2[index]);
        return sumaArray;
    }
}

/**
 * otras formas de hacerlo
 * 
 * const sumaArrays (arr1,arr2) => arr1.length !== arr2.length ? 0 : arr1.map((num,indice) => num+array2[indice])
 * console.log(sumaArrays(a,b))
 * 
 * 
 * const resultado = []
 * if(a.length !== b.length) {
 *    throw new Error("La longitud de los arrays no es igual")
 * }
 * for( const [numero1,indice1] of a.entries() ) {
 *    for( const [numero2,indice2] of b.entries() {
 *        if (indice1 === indice2) {
 *           resultado.push(numero1+numero2)
 *        }
 *    }
 * }
 */




/**
 * Ejercicio 2
 * Define una función llamada eliminarDuplicados que tome un array arr. La función debe 
 * eliminar los elementos duplicados y devolver un nuevo array con elementos únicos,
 * manteniendo el orden original.
 */
const arr = [1,2,3,4,2,5,3,6,1];
const eliminarDuplicados = arr.filter( (num, index) => arr.indexOf(num) === index);




/**
 * Ejercicio 3
 * Crea una función llamada filtrarPares que tome un array de números arr y 
 * devuelva un nuevo array que contenga solo los números pares.
 */
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
const filtrarPares = array.filter( num => num%2 === 0);



/**
 * Ejercicio 4
 * Escribe una función llamada unirArrays que acepte un número variable de arrays y
 * los combine en uno solo. Nota: Se podría utilizar el método reduce y el método concat
 * para lograrlo.
 */
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const unirArrays = (...arrays) => [].concat(...arrays);
const newArray = unirArrays(array1,array2,array3);



/**
 * Ejercicio 5
 * Define una función llamada contarPalabras que tome una cadena de texto texto y
 * devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */
const texto = "esto esto es un un contador de de palabras";
function contarPalabras(cadena) {
    const palabras = cadena.split(" ");
    const contadorPalabras = palabras.reduce((acumulador, palabra) => {
      if (acumulador[palabra]) {
        acumulador[palabra]++;
      } else {
        acumulador[palabra] = 1;
      }
      return acumulador;
    }, {});
  
    return contadorPalabras;
  }



/**
 * Ejercicio 6
 * Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene 
 * de menor a mayor.
 */
const array4 = [4,8,2,9,5,1,6,3,7];
const ordenarNumeros = () => {
    return array4.sort((a, b) => a - b);
  };




/**
 * Ejercicio 7
 * Escribe una función llamada eliminarElemento que tome un array arr y un elemento
 * "elemento", y elimine la primera aparición de ese elemento en el array.
*/
const array5 = [1,2,3,4,3,5];

const eliminarElemento = (arr, elemento) => {
    const index = arr.indexOf(elemento);
    if(index !== -1) {
        arr.splice(index,1);
    }
    return arr;
} 



/**
 * Ejercicio 8
 * Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva
 * un objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array,
 * respectivamente.
 */
const array6 = [2, 4, 6, 8, 10];

function encontrarMaxMin() {
  const max = Math.max(...array6);
  const min = Math.min(...array6);
  return { max, min };
}



/**
 * Ejercicio 9
 * Crea una función llamada buscarElemento que tome un array arr y un elemento elemento.
 * La función debe devolver el índice de la primera aparición de elemento en el array,
 * o -1 si no se encuentra.
 */
const array7 = [1,3,5,7,9];

const buscarElemento = (arr,elemento) => {
    const index = arr.indexOf(elemento);
    return index === -1 ? -1 : `La posición del elemento es ${index}`;
}



/**
 * Ejercicio 10
 * Escribe una función llamada dividirFragmento que tome un array "arr" y un número entero
 * "tamano". La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo
 * array con los Fragmentos.
 */

const arr7 = [1,2,3,4,5,6,7,8,9];
const tamano = 3;

function dividirFragmento(arr, tamano) {
    const fragmentos = [];
    for (let i = 0; i < arr.length; i += tamano) {
      fragmentos.push(arr.slice(i, i + tamano));
    }
    return fragmentos;
  }




// Llamadas para ejecutar las funciones
// console.log(sumaArrays(a,b));
// console.log(eliminarDuplicados);
// console.log(filtrarPares);
// console.log(newArray);
// console.log(contarPalabras(texto));
// console.log(ordenarNumeros());
// console.log(eliminarElemento(array5,3));
// console.log(encontrarMaxMin(array6));
// console.log(buscarElemento(array7,5));
console.log(dividirFragmento(arr7,tamano));



