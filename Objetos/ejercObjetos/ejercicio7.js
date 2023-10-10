/**
 * @author: AaronPF
 * @description: Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz 
 * con todas las claves de los objetos.
 */

function devolverMatriz(a) {
    const claves = Object.keys(a);
    return claves;
}

const a = {
    nombre: "Aarón",
    edad: 44,
    cp: 18194,
};

console.log(devolverMatriz(a));

