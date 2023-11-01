/**
 * @author: AarónPF
 * @description: Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
 * función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
 * devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

const arr = [1,2,3,4,5];
const funcion = a => a*a;

/**
 * Función que toma dos argumentos, un array y una función, y devuelve un nuevo array con los resultados
 * de la función aplicada a cada elemento
 * @param {Array} array - Array de números
 * @param {Funcion} funcion - Función que se aplicaa los elementos del otro parámetro
 * @returns {Array} - Devuelve un nuevo array con los resultados de aplicar la función a los elementos
 */
const mapearNumeros = (array,funcion) => array.map(elemento => funcion(elemento));
console.log(mapearNumeros(arr,funcion));
