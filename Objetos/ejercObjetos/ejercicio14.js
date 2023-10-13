/**
 * @author: AarónPF
 * @description: Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome
 * un objeto como argumento. Algunos de los valores de propiedad contienen cadenas vacías. 
 * Reemplace cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos.
 * Devuelva el objeto resultante.
 */

function reemplazarCadenas(objeto) {
    const objetoResultante = {};

    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
          let valor = objeto[clave];
    
          // Reemplazar cadenas vacías o cadenas con espacios en blanco por nulos
          if (typeof valor === 'string' && (valor.trim() === '' || valor.trim().length === 0)) {
            valor = null;
          }
    
          objetoResultante[clave] = valor;
        }
      }
    
      return objetoResultante;
}

const objetoOriginal = {
    a : "hola",
    b : "",
    c : "adios",
    d : "    ",
    e : "   eso   ",
};

console.log(reemplazarCadenas(objetoOriginal));