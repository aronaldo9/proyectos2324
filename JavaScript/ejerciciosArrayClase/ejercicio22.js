/**
 * @author: AarónPF
 * @description: Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales)
 * y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays
 * con la misma cantidad de filas y columnas.
 */


function sumarMatrices (m1,m2) {
    if(m1.length !== m2.length || m1[0].length !== m2[0].length) {
        throw new Error("Las matrices deben tener igual número de filas y columnas");
    }
    return m1.map((row,i) => {
       return row.map( (element,j) => element + m2[i][j]);
    });
}

const matriz1 = [[1,2],[3,4]];
const matriz2 = [[5,6],[7,8]];

console.log(sumarMatrices(matriz1,matriz2));