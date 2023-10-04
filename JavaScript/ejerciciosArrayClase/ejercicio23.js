/**
 * @author: AarónPF
 * @description: Escribe una función llamada promedioFilas que calcule el promedio de cada fila en una
 * matriz (array bidimensional) y devuelva un array con los resultados.
 */

const matriz = [[5,5,5],[4,4,4],[3,3,3]];

const promedioFilas = matriz.map( row => {const suma = row.reduce((acc, elemento) => acc + elemento, 0);
    return suma/row.length;
});

console.log(promedioFilas);