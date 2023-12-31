/**
 * @author: AarónPF
 * @description: Escribe una función llamada rangoNumeros que tome dos números inicio y fin . La
 * función debe devolver un array que contenga todos los números en el rango desde inicio
 * hasta fin, incluyendo ambos números.
 */

const inicio = 1;
const fin = 10;
const arr = [];

/**
 * Función que devuelve un array de números que están dentro del rango dado por los parámetros
 * @param {*} num1 - Un número
 * @param {*} num2 - Otro número
 * @returns - Devuelve un array con todos los números que están entre el primer parámetro y el segundo
 */
function rangoNumeros(num1,num2) {
    for(let i=num1;i<num2+1;i++){
        arr.push(i);
    }
    return arr;
};

console.log(rangoNumeros(inicio,fin));


// chatGPT
// function rangoNumeros(num1, num2) {
//     return Array.from({length: num2 - num1 + 1}, (_, index) => index + num1);
// }

// const inicio = 1;
// const fin = 10;
// console.log(rangoNumeros(inicio, fin));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
