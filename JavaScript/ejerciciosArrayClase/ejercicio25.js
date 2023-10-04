/**
 * @author: AarónPF
 * @description: Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un
 * rango dado dentro de un array. La función debe tomar un array de números arr y dos
 * números enteros inicio y fin que representan el rango. La función debe devolver un array
 * con los números que faltan en ese rango
 */

function numerosFaltantes(arr, inicio, fin) {
    const numerosFaltantes = [];

    for (let i = inicio; i <= fin; i++) {
        if (!arr.includes(i)) {
            numerosFaltantes.push(i);
        }
    }

    return numerosFaltantes;
}

const arr = [2, 5, 8];
const inicio = 1;
const fin = 10;

const numerosFaltantesArray = numerosFaltantes(arr, inicio, fin);
console.log('Números faltantes:', numerosFaltantesArray);


