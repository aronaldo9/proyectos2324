/**
 * @author: AarónPF;
 * @description: Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad ciudad en una
 * variable llamada lugar.
 */

const direccion = {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345",
   };

const {ciudad : lugar} = direccion;

console.log(lugar);