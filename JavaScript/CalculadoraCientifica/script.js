// Importa la clase Calculadora
import { Calculadora } from "./assets/main.js";

// Funciones de manipulación del display y eventos de botones
const display = document.getElementById("display");
const calculator = new Calculadora();

function addToDisplay(value) {
    if (value === 'sqrt') {
        // Si el valor es 'sqrt', agregar Math.sqrt( al campo de visualización
        display.value += 'Math.sqrt(';
    } else {
        // De lo contrario, simplemente agregar el valor proporcionado
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        // Obtiene la expresión del display
        const expression = display.value;

        // Reemplaza 'sqrt' por 'Math.sqrt'
        const correctedExpression = expression.replace(/sqrt/g, 'Math.sqrt');

        // Evalúa la expresión corregida y muestra el resultado
        calculator.num1 = 0; // Establece el valor de num1
        calculator.num2 = 0; // Establece el valor de num2
        const parts = correctedExpression.split(/([+\-*/])/);
        calculator.num1 = parseFloat(parts[0]);
        let operator = "";
        for (let i = 1; i < parts.length; i++) {
            if (parts[i] === "+" || parts[i] === "-" || parts[i] === "*" || parts[i] === "/") {
                operator = parts[i];
            } else {
                calculator.num2 = parseFloat(parts[i]);
                switch (operator) {
                    case "+":
                        calculator.sumar();
                        break;
                    case "-":
                        calculator.restar();
                        break;
                    case "*":
                        calculator.multiplicar();
                        break;
                    case "/":
                        calculator.dividir();
                        break;
                    default:
                        break;
                }
            }
        }

        display.value = calculator.num1;
    } catch (error) {
        display.value = "Error";
    }
}
