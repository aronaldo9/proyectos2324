/**
 * @author: AarónPF
 * @description: Crea una función llamada capitalizarPalabras que tome una cadena cadena y devuelva
 * una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás
 * en minúscula.
 */

const cadena = "Esto es una cadena que vamos a capitalizar";

const capitalizarPalabras = cad => cad.toLowerCase().split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');

console.log(capitalizarPalabras(cadena));