/**
 * @author: AarónPF
 * @description: Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento
 * o valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la
 * propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined
 */


function devolverPropiedad(objeto) {
    // Verifica si 'a' existe y si 'b' existe dentro de 'a'
  if (objeto && objeto.a && objeto.a.b) {
    return objeto.a.b;  // Devuelve el valor de 'b'
  } else {
    return undefined;  // Devuelve undefined si no existe 'a' o 'b'
  }
}

const miObjeto = {
    a: {
      b: '¡Hola, soy la propiedad b!'
    }
  };
  
  console.log(devolverPropiedad(miObjeto)); // Devolverá '¡Hola, soy la propiedad b!'
  