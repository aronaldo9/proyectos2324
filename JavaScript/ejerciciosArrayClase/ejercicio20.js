/**
 * @author: AarónPF
 * @description: Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays,
 * es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo
 * array con los elementos diferentes.
 */

function diferenciaArrays(arr1,arr2) {
    const dif1 = arr1.filter(elemento => !arr2.includes(elemento));
    const dif2 = arr2.filter(elemento => !arr1.includes(elemento));

    return dif1.concat(dif2).sort();
}

const array1 = [2,4,6,8,7,3];
const array2 = [2,5,1,8,4,9];

console.log(diferenciaArrays(array1,array2));