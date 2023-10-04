/**
 * @author: AarónPF
 * @description: Define una función llamada invertirCadena que tome una cadena cadena y devuelva una
 * nueva cadena con los caracteres en orden inverso.
 */

const cadena = "AaronPF";

const invertirCadena = cad => cad.split('').reverse().join('');
console.log(invertirCadena(cadena));