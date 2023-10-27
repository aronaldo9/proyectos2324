/**
 * @author: AarónPF
 * @description: Define una función llamada invertirCadena que tome una cadena cadena y devuelva una
 * nueva cadena con los caracteres en orden inverso.
 */

const cadena = "AaronPF";

/**
 * Función que toma una cadena y la devuelve con los caracteres en orden inverso
 * @param {*} cad - Una cadena de caracteres
 * @returns - Devuelve una cadena igual a la que se pasa por parámetro pero con los caracteres
 *  en orden inverso
 */
const invertirCadena = cad => cad.split('').reverse().join('');
console.log(invertirCadena(cadena));