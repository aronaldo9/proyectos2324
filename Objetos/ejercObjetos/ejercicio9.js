/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto (a) como argumento. Devuelve la suma 
 * de todos los valores (temperaturas) del objeto. Vamos a imaginar que el objeto tiene por claves
 * meses del año y los valores de esas claves son temperaturas. Es necesario validar que los valores 
 * de las claves son números para realizar la suma.
 */

function sumarTemperatura(a) {
    const temperaturas = Object.values(a);
    const suma = temperaturas
        .filter(valor=>typeof valor === "number" && !isNaN(valor))
        .reduce((total,valor) => total + valor, 0);
    
    return suma;
}

const a = {
    mayo : 25,
    junio : 27,
    julio : "no es un número",
    agosto : 35
};

console.log(sumarTemperatura(a));