/**
 * Ejercicio 1
 * 
 * 
 */


// import:

 import  pintarCallbacks  from "./components/pintarCallback.js";

// // componentes del DOM
 const divApp = document.getElementById('app');

// function realizarOperacion(num1, num2, callback) {  
//   setTimeout(() => {
//     const resultado = num1 + num2;
//     callback(resultado);
//   }, 1000);
// }

// function imprimirSumaCallback(resultado,callback) {
//   pintarCallbacks(resultado,divApp);
// }

// realizarOperacion(7,3,imprimirSumaCallback);


/**
 * Ejercicio 2
 * 
 * 
 */

// function filtrarParesAsync(numeros,callback) {
//   setTimeout(() => {
//     const numerosPares = numeros.filter(n => n % 2 === 0);
//     callback(numerosPares);
//   }, 2000);
// }

// filtrarParesAsync([1,2,3,4,5,6,7,8], function(pares) {
//   console.log("Los números pares son:",pares);
//   pintarCallbacks(pares,divApp);

// })


/**
 * Ejercicio 3
 * 
 * 
 */

function iterarSync(miArray,callback) {
  miArray.forEach((element,indice) => {
    setTimeout(() => {
      callback(element)
    }, 1500*(indice+1));
  });

  /**
   * versión con map
   * miArray.map(elemento)=> {
   *  setTimeout(() => 
   *    callback(elemento);
   * }, 1500 * (miArray[elemento] + 1));
   * )};
   */
}

iterarSync([1,2,3,4,5], function(dato) {
console.log("Pinto el dato",dato);
pintarCallbacks(dato,divApp);
});