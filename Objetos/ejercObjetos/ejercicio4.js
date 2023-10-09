/**
 * @author: AarónPF
 * @description: Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una
 * propiedad con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
 */

function f(cadena) {
    const objeto = {
        key : cadena,
    };
    return objeto;
}

const cadena = "llave";
console.log(f(cadena));