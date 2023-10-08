/**
 * @author: AarónPF
 * @description: Dado el siguiente objeto que representa una persona con un nombre y una lista de amigos,
 *  utiliza la desestructuración para extraer el nombre de la persona y el primer amigo de la lista.
 */

const persona = {
    nombre: "Carlos",
    amigos: ["Ana", "David", "Elena"],
};


const { nombre, amigos: [primerAmigo] } = persona;
console.log(`El primer amigo de ${nombre} es ${primerAmigo}`);