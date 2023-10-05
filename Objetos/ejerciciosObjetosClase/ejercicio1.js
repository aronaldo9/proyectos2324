/**
 * @author: AarónPF
 * @description: Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad
 *  en variables separadas. Después crear un objeto con dichas propiedades y los valores obtenidos.
 */

const persona = {
    nombre: "Juan",
    edad: 30,
   };

   const { nombre, edad } = persona;

   const nuevaPersona = {
    nombre,
    edad,
   };

   console.log(nuevaPersona);