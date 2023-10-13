/**
 * @author: AarónPF
 * @description: Agregar propiedad a cada objeto en la matriz. Escribe una función que tome un Array
 * de objetos y una cadena como argumentos. Agrega una propiedad con clave 'continente' y valor igual
 * a la cadena a cada uno de los objetos. Devuelve el nuevo arreglo de objetos.
 */

function devolverNuevoArray(array,cadena) {
    const nuevosObjetos = array.map( objeto => ({ ...objeto, continente: cadena  }));

    return nuevosObjetos;
}

const arr = [
    {
        nombre : "Aarón",
        edad : 44,
    },
    {
        nombre : "Bárbara",
        edad : 43,
    },
];

const palabra = "Europa";


console.log(devolverNuevoArray(arr,palabra));