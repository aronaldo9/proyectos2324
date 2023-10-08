/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento. 
 * Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
 */

const existe = (a,b) => b in a;

const a = {
    nombre: "Aarón",
    apellido: "Pesqueira",
};
const b = "caramelo";

console.log("¿Existe la propiedad nombre?", existe(a,b));