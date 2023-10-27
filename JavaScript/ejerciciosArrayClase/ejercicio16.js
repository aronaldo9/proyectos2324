/**
 * @author: AarónPF
 * @description: Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva
 * una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás
 * en minúscula.
 */

const cadena = "Esto es una cadena que vamos a capitalizar";

/**
 * Función que devuelve una cadena con la primera letra de cada palabra en mayúscula y el resto en minúscula
 * @param {*} cad - Una cadena de caracteres
 * @returns - Devuelve una nueva cadena
 */
const capitalizarPalabras = cad => cad.toLowerCase().split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');

console.log(capitalizarPalabras(cadena));