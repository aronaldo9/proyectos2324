/**
 * @author: AarónPF
 * @description: Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que
 * tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

function f(a,b) {
    // Creamos un objeto utilizando una sintaxis de clave dinámica.
    // La clave se define a través de la variable "a", y el valor se toma de la variable "b".
    const objeto = {
        [a] : b,
    }

    // Devolvemos el objeto creado
    return objeto;
}

// Definimos dos variables con valores; las variables van a ser los parámetros de nuestra función,
// y por tanto, la clave y el valor del objeto resultante
const a = "clave";
const b = "valor";

console.log(f(a,b));