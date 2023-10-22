/**
 * @author: AarónPF
 * @description: Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que
 * tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

/**
 * Crea un objeto utilizando una sintaxis de clave dinámica.
 * @param {*} a - La clave del objeto, definida a través de la variable "a".
 * @param {*} b - El valor del objeto, tomado de la variable "b".
 * @returns {Object} Un objeto con la clave y el valor especificados.
 */

function f(a,b) {
    const objeto = {
        [a] : b,
    }

    return objeto;
}

// Definimos dos variables con valores; las variables van a ser los parámetros de nuestra función,
// y por tanto, la clave y el valor del objeto resultante
const a = "clave";
const b = "valor";

console.log(f(a,b));