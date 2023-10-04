/**
 * @author: AarónPF
 * @description: Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una
 * propiedad específica. La función debe tomar un array arr y una cadena propiedad que
 * indique la propiedad por la cual se debe ordenar.
 */

const arr = [
    {
        nombre: "Aarón",
        edad:44,
    },
    {
        nombre: "Bárbara",
        edad:43,
    },
    {
        nombre: "Leo",
        edad: 6,
    },
];

const cadena = "edad";

function ordenarPorPropiedad (array,propiedad) {
    return array.sort( (a,b) => a[propiedad] - b[propiedad]);
}

console.log(ordenarPorPropiedad(arr,cadena));
