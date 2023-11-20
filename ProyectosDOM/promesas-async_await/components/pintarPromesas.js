import { users } from "../assets/users";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const pintarPromesas = ( element ) => {
    // consumo de la promesa
    const id = 1;
    const id2 = 2;
    findUser(id)
        .then((user) => (element.innerHTML = user.login.username))
        // .then(({ login }) => (element.innerHTML = login.username)) -> podemos hacer destructuring

        .catch((err) => (element.innerHTML = err));
};


const findUser = (id) => {
    return new Promise ((resolve,reject) => {
        const user = users.find((user) => user.id === id);
        if(user) {
            resolve(user);
            return; // es como un break
        } 
        reject(`User ${id} does not exist`);
    });
};


/**
 * 1. Ejercicio1
 * Crear una función que realice operaciones matemáticas de manera asíncrona, que le pases dos números
 * y una cadena de texto que sea sumar, restar, mult o dividir y devuelva una promesa que se resuelva
 * si la operación es correcta
 * 
 * 2. Ejercicio2 
 * Crear una secuencia de 3 operaciones asíncronas llamadas paso 1, paso 2 y paso 3. Cada función debe
 * indicar en qué paso está. La última función debe devolver una promesa que muestre la secuencia
 * de promesas anteriores.
 * 
 * 3. Ejercicio3
 * Crear una función que realice un contador regresivo desde un número dado hasta 0, de segundo en segundo.
 * La función debe devolver una promesa q se resuelva con el mensaje tiempo cumplido cuando el contador 
 * llegue a 0
 */


// Ejercicio1
// export async function operaciones(num1, num2, op) {
//     return new Promise((resolve, reject) => {
//         if (op === "sumar") {
//             resolve(num1 + num2);
//         } else if (op === "restar") {
//             resolve(num1 - num2);
//         } else if (op === "multiplicar") {
//             resolve(num1 * num2);
//         } else if (op === "dividir") {
//             if (num2 !== 0) {
//                 resolve(num1 / num2);
//             } else {
//                 reject(new Error("No se puede dividir por cero"));
//             }
//         } else {
//             reject(new Error("Operación no válida"));
//         }
//     });
// }


// console.log(operaciones(10,5,"multiplicar"));



// Definir las funciones paso1, paso2 y paso3
// async function paso1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Paso 1 completado");
//         }, 1000);
//     });
// }

// async function paso2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Paso 2 completado");
//         }, 1000);
//     });
// }

// async function paso3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Paso 3 completado");
//         }, 1000);
//     });
// }

// // Función secuencia
// async function secuencia() {
//     const resultadoPaso1 = await paso1();
//     console.log(resultadoPaso1);

//     const resultadoPaso2 = await paso2();
//     console.log(resultadoPaso2);

//     const resultadoPaso3 = await paso3();
//     console.log(resultadoPaso3);

//     return [resultadoPaso1, resultadoPaso2, resultadoPaso3];
// }

// // Llamada a la función que ejecuta la secuencia
// secuencia()
//     .then((resultado) => console.log("Resultado:", resultado))
//     .catch((error) => console.error("Error externo:", error.message));



// Ejercicio3
export function contadorRegresivo(segundos) {
    return new Promise((resolve) => {
        let contador = segundos;

        const intervalo = setInterval(() => {
            console.log(contador);
            contador--;

            if (contador < 0) {
                clearInterval(intervalo); // Detener el temporizador
                resolve("Tiempo cumplido");
            }
        }, 1000);
    });
}

// Uso de la función
contadorRegresivo(5)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error("Error en el contador regresivo:", error.message));


