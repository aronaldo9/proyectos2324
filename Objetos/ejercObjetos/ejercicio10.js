/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto como argumento. Debería devolver un objeto
 * con todas las propiedades del objeto original. excepto la propiedad con clave 'b'
 */

function devolverPropiedades(objeto) {
    const objetoClonado = {...objeto};
    if('b' in objetoClonado){
        delete objetoClonado.b;
    }

    return objetoClonado;
}

const nuevoObjeto = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
};

console.log(devolverPropiedades(nuevoObjeto));