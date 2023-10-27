/**
 * @author: AarónPF
 * @description: Define una función llamada extraerPropiedades que tome un objeto obj y un array de
 * propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades
 * especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
 * el nuevo objeto
 */

const obj = {
    nombre:"Aarón",
    edad:44,
    ciudad:"Churriana",
};

const propiedades = ["nombre","edad","email"];

/**
 * Función que devuelve un objeto con las propiedades del array
 * @param {*} objeto - Un objeto con propiedades y sus valores
 * @param {*} array - Un array con objetos
 * @returns - Devuelve un objeto con las propiedades del array que coinciden con las del objeto original
 */
const extraerPropiedades = (objeto,array) => {
    const nuevoObjeto = {};
    for(propiedad of array){
        if(objeto.hasOwnProperty(propiedad)){
            nuevoObjeto[propiedad]=objeto[propiedad];
        }
    }
    return nuevoObjeto;
    
} 

const objetoExtraido = extraerPropiedades(obj,propiedades);
console.log(objetoExtraido);