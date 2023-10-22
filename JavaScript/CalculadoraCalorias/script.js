/**
 * @author: AarónPF
 * @description: Crea una aplicación web para calcular las calorías consumidas en una dieta .
 * Crea una clase Comida con un constructor que tome dos parámetros: nombre y calorias.
 * Esta clase debe tener un método calcularCalorias que retorne la cantidad de calorías.
 * Crea una clase Dieta con un constructor que inicialice un arreglo llamado alimentosConsumidos.
 * Agrega un método llamado agregarAlimento a la clase Dieta, que permita agregar un objeto de
 * tipo Comida al arreglo alimentosConsumidos.
 * Implementa un método llamado calcularTotalCalorias en la clase Dieta que calcule el total de
 * calorías consumidas sumando las calorías de todos los alimentos en el arreglo.
 * Crea un método listarAlimentosConsumidos en la clase Dieta que muestre en la consola el nombre y 
 * la cantidad de calorías de cada alimento consumido.
 * Crea instancias de la clase Dieta y de la clase Comida, agrega alimentos a la dieta y muestra la
 * lista de alimentos consumidos junto con el total de calorías en la consola.
 */


import { ComidaLiteral as Comida, DietaLiteral as Dieta } from "./assets/modules.js";

// Crear instancias de Comida y Dieta
const comida1 = Object.create(Comida);
comida1._nombre = 'Manzana';
comida1._calorias = 95;

const comida2 = Object.create(Comida);
comida2._nombre = 'Pollo a la parrilla';
comida2._calorias = 200;

const comida3 = Object.create(Comida);
comida3._nombre = 'Arroz integral';
comida3._calorias = 150;

const comida4 = Object.create(Comida);
comida4._nombre = 'Entrecot';
comida4._calorias = 300;

const miDieta = Object.create(Dieta);
miDieta.agregarAlimento(comida1);
miDieta.agregarAlimento(comida2);
miDieta.agregarAlimento(comida3);
miDieta.agregarAlimento(comida4);

// Funciones para mostrar datos

/**
 * Muestra la lista de alimentos consumidos en el elemento "listaAlimentos".
 */
function mostrarListaAlimentos() {
    const listaAlimentosDiv = document.getElementById("listaAlimentos");
    listaAlimentosDiv.innerHTML = miDieta.listarAlimentosConsumidos().join("<br>");
    const seccionLista = document.getElementById("seccionLista");
    seccionLista.style.display = "block";
}

/**
 * Muestra el total de calorías consumidas en el elemento "totalCalorias".
 */
function mostrarTotalCalorias() {
    const totalCaloriasDiv = document.getElementById("totalCalorias");
    const totalCalorias = miDieta.calcularTotalCalorias();
    totalCaloriasDiv.textContent = `Total de calorías consumidas: ${totalCalorias}`;
    const seccionTotal = document.getElementById("seccionTotal");
    seccionTotal.style.display = "block";
}

// Agregar eventos a los botones
document.getElementById("botonLista").addEventListener("click", mostrarListaAlimentos);
document.getElementById("botonTotal").addEventListener("click", mostrarTotalCalorias);

