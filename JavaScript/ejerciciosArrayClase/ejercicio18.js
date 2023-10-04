/**
 * @author: AarónPF
 * @description: Escribe una función llamada combinarArrays que pase como parámetro "creciente" o
 * "decreciente", junto con un número indeterminado de arrays con valores numéricos.
 * Seguidamente me devolverá un array con todos los elementos que conformen los arrays
 * ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada
 * se hará de forma creciente.
 */

function combinarArrays(orden,...arrays) {
    const conjuntoArrays = [].concat(...arrays);
    if(orden==="creciente") {
        conjuntoArrays.sort((a,b) => a - b);
    } else if (orden==="decreciente") {
        conjuntoArrays.sort((a,b) => b - a);
    } else {
        return "El orden sólo puede ser creciente o decreciente";
    }

    return conjuntoArrays;
}

const arr = [1,8,5];
const arr1 = [7,2,4];
const arr2 = [3,6,9];

console.log(combinarArrays("creciente",arr,arr1,arr2));
console.log(combinarArrays("decreciente",arr2,arr,arr1));
console.log(combinarArrays("caramelo",arr2,arr,arr1));

