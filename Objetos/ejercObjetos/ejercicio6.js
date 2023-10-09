/**
 * @author: AarónPF
 * @description: Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que 
 * tenga propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. 
 * Devuelve el objeto.
 */


function crearObjeto(a,b) {
    if (a.length !== b.length) {
        throw new Error('Las matrices deben tener la misma longitud.');
    }

    // const objeto = {};

    // for (let i = 0; i < a.length; i++) {
    //     objeto[a[i]] = b[i];
    // }

    // return objeto;

    const objeto = a.reduce( (acc, clave, index) => {
        acc[clave] = b[index];
        return acc;
    }, {});

    return objeto;
}

const a = ['clave1', 'clave2', 'clave3'];
const b = ['valor1', 'valor2', 'valor3'];

console.log(crearObjeto(a,b));