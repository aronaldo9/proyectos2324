/**
 * @author: AarónPF
 * @description: Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como
 * objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.
 */

const obj1 = {
    nombre: "Aarón",
    edad: 44,
};

const obj2 = {
    nombre: "Leo",
    edad: 6,
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinarObjetos = (obj1, obj2) => {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return [...obj1, ...obj2];
    } else if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        return { objeto1: obj1, objeto2: obj2 };
    } else {
        throw new Error('Los argumentos deben ser objetos o arrays.');
    }
};

const objetosCombinados = combinarObjetos(obj1, obj2);
console.log(objetosCombinados); // Combina dos objetos
console.log(combinarObjetos(array1, array2));  // Combina dos arrays