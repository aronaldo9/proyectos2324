/**
 * @author: AarónPF
 * @description: Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad nombre
 *  y apellidos en una variable llamada nombre y apellidoPersona respectivamente.
 *  Si la propiedad apellidos no existe en el objeto, asigna un valor predeterminado de 'Desconocido'.
 */

const persona = {
    id: 23,
    info: {
        nombre: "María",
        apellidos: "Jiménez Téllez",
        edad: 25,
    },
};

   
const { info: { nombre, apellidos : apellidoPersona = "Desconocido" } } = persona;

console.log(`La persona se llama ${nombre} ${apellidoPersona}`);