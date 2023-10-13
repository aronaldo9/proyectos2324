/**
 * @author: AarónPF
 * @description: Intercambiar claves y valores de objetos. Escribe una función que tome un objeto
 * como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron.
 * Intercambia la clave del objeto Javascript con sus valores y devuelve el objeto resultante.
 */

function intercambiar(objeto) {
    const objetoIntercambiado = {};

    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            const valor = objeto[clave];
            objetoIntercambiado[valor] = clave;
        }
    }

    return objetoIntercambiado;
}

const objetoOriginal = {
    a: 'valorA',
    b: 'valorB',
    c: 'valorC'
  };

console.log(intercambiar(objetoOriginal));