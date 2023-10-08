/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento.
 * Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor
 * verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

const existe = (a,b) => b in a && !!a[b];

const a = {
    nombre: "Aarón",
    apellido: "Pesqueira",
};
const b = "perro";

console.log("La propiedad nombre tiene un valor verdadero?",existe(a,b));