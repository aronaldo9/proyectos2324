/**
 * @author: AarónPF
 * @description: Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y
 * un número escalar . La función debe multiplicar cada elemento de la matriz por el escalar y
 * devolver una nueva matriz con los resultados.
 */

const escalar = 5;
const matriz = [
    [1,2,3],
    [4,5,6],
];

/**
 * Función que devuelve una nueva matriz con los elementos de la matriz original multiplicados por el número
 * @param {*} num - Un número cualquiera
 * @returns - Devuelve una nueva matriz
 */
const multiplicarMatrizPorEscalar = num => matriz.map( fila => fila.map(numero => numero * escalar));

console.log(multiplicarMatrizPorEscalar(escalar));