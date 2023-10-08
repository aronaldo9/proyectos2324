/**
 * @author: AarónPF
 * @description: Dado el siguiente objeto que representa un punto en coordenadas, utiliza
 *  la desestructuración para extraer las propiedades x y y en variables separadas y calcula la distancia
 *  euclidiana desde el origen (0,0).
 */

const punto = {
    x: 3,
    y: 4,
   };


const { x, y } = punto;
const distEuclidiana = Math.sqrt(x ** 2 + y ** 2);
console.log(`La distancia Euclidiana desde el origen es ${distEuclidiana}`);