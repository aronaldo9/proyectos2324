/**
 * @author: AaronPF
 * @description: Escribe una función que tome un objeto (a) y un número (b) como argumentos. 
 * Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores 
 * de las claves de (a) son números para realizar la multiplicación.
 */

function multiplicar(a,b) {
    const nuevoObjeto = {};

    for (const clave in a) {
        if (a.hasOwnProperty(clave)) {
          const valor = a[clave];

          if (typeof valor === 'number' && !isNaN(valor)) {
            // Multiplicar solo si el valor es un número
            nuevoObjeto[clave] = valor * b;
          } else {
            nuevoObjeto[clave] = valor;  // Mantener el valor original si no es un número
          }
        }
      }
    
      return nuevoObjeto;
}

const objetoOriginal = {
    a: 10,
    b: 15,
    c: 5.5,
  };
  
  const multiplicador = 2;

console.log(multiplicar(objetoOriginal,multiplicador));