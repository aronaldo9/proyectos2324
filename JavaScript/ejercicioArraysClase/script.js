/**
 * @author: AarónPF
 * @description: función que suma los elementos de dos Arrays y los mete en un array nuevo
 */

// Ejercicio 1
const a = [1,2,3];
const b = [4,5,6];

function sumaArrays(arr1,arr2) {
    if(a.length !== b.length) {
        return "Los arrays deben tener la misma longitud" 
    } else {
        const sumaArray = arr1.map( (num,index) => num + arr2[index]);
        return sumaArray;
    }
}

/**
 * otras formas de hacerlo
 * 
 * const sumaArrays (arr1,arr2) => arr1.length !== arr2.length ? 0 : arr1.map((num,indice) => num+array2[indice])
 * console.log(sumaArrays(a,b))
 * 
 * 
 * const resultado = []
 * if(a.length !== b.length) {
 *    throw new Error("La longitud de los arrays no es igual")
 * }
 * for( const [numero1,indice1] of a.entries() ) {
 *    for( const [numero2,indice2] of b.entries() {
 *        if (indice1 === indice2) {
 *           resultado.push(numero1+numero2)
 *        }
 *    }
 * }
 */




// Ejercicio 2
const arr = [1,2,3,4,2,5,3,6,1];
const eliminarDuplicados = arr.filter( (num, index) => arr.indexOf(num) === index);




// Ejercicio 3
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
const filtrarPares = array.filter( num => num%2 === 0);



// Ejercicio 4
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const unirArrays = (...arrays) => [].concat(...arrays);
const newArray = unirArrays(array1,array2,array3);



// Ejercicio 5
const texto = "esto es una cadena de texto, esto es una cadena";
function contarPalabras(cadena) {
    const palabras = cadena.split(" ");
    const nPalabras = palabras.reduce( (acumulador,palabra) => acumulador[], { }) // continuará
}



// Ejercicio 6
const array4 = [4,8,2,9,5,1,6,3,7];
const ordenarNumeros = () => {
    const numerosOrdenados = array4.slice().sort((a, b) => a - b);
    return numerosOrdenados;
  };




// Ejercicio 7
const array5 = [1,2,3,4,3,5];

const eliminarElemento = (arr, elemento) => {
    const index = arr.indexOf(elemento);
    if(index !== -1) {
        arr.splice(index,1);
    }

    return arr;
} 



// Ejercicio 8
const array6 = [2,4,6,8,10];
function encontrarMaxMin() {
    const max = Math.max.apply(null,array6);
    const min = Math.min.apply(null,array6);
    return {max,min};
}


// Ejercicio 9
const array7 = [1,3,5,7,9];
const buscarElemento = (array7,elemento) => {
    const index = array7.indexOf(elemento);
    return index === -1 ? -1 : `La posición del elemento es ${index}`;
}




// Llamadas para ejecutar las funciones
console.log(sumaArrays(a,b));
console.log(eliminarDuplicados);
console.log(filtrarPares);
console.log(newArray);
console.log(ordenarNumeros());
console.log(eliminarElemento(array5,3));
console.log(encontrarMaxMin());
console.log(buscarElemento(array7,5));



