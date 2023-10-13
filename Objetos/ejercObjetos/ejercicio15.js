/**
 * @author: AarónPF
 * @description: Extraer información de objetos. Escriba una función que tome un objeto como argumento
 * que contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso,
 * si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena.
 * Adjunte la unidad cm al tamaño. Adjunte la unidad kg al peso. Devuelve un nuevo objeto con todas las
 * propiedades disponibles que nos interesan y sus modificaciones correspondientes.
 */

function devolverInfo(objeto) {
  const { nombre, apellido, tamaño, peso } = objeto;
  const info = {};

    if (nombre) {
        info.nombre = nombre;
    }

    if (apellido) {
        info.apellido = apellido;
    }

    if (tamaño) {
        info.tamaño = `${tamaño} cm`;
    }

    if (peso) {
        info.peso = `${peso} kg`;
    }

    return info;
}

const persona = {
  nombre: "Aarón",
  apellido: "Pesqueira",
  tamaño: 168,
  peso: 80,
};

console.log(devolverInfo(persona));
