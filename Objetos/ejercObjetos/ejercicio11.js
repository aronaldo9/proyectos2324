/**
 * @author: AarónPF
 * @description: Escribe una función que tome dos objetos como argumentos. Lamentablemente,
 * la propiedad 'b' del segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'.
 * Fusione ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante.
 * Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.
 */

function fusionCorregir(obj1, obj2) {
    if('b' in obj2){
        obj2['d'] = obj2['b'];
        delete obj2['b'];
    }

    const objetoFusionado = { ...obj1, ... obj2 };
    return objetoFusionado;
}

const objeto1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  const objeto2 = {
    b: 4,
    e: 5,
  };

console.log(fusionCorregir(objeto1,objeto2));
