/**
 * @author: AarónPF
 * @description: Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
 * función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
 * devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

const arr = [1,2,3,4,5];
const funcion = a => a*a;

const mapearNumeros = (array,funcion) => array.map(elemento => funcion(elemento));
console.log(mapearNumeros(arr,funcion));
