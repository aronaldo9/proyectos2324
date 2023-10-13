/**
 * @author: AarónPF
 * @description: Convertir matriz en objeto con contador. Escriba una función que tome una matriz
 * de números como argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único
 * de la matriz. El valor del objeto correspondiente debe ser el número de veces que aparece
 * la clave dentro de la matriz.
 */

function convertirMatriz(arr) {
    return arr.reduce((contador, valor) => {
        contador[valor] = (contador[valor] || 0) + 1;
        return contador;
      }, {});
}

const matriz = [1, 2, 3, 2, 1, 1, 2, 4, 5, 4];
console.log(convertirMatriz(matriz));