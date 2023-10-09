/**
 * @author: AarónPF
 * @description: Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que
 * tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

function f(a,b) {
    const objeto = {
        [a] : b,
    }

    return objeto;
}

const a = "clave";
const b = "valor";

console.log(f(a,b));