// Importa las clases
import { Empleado, Gerente, Desarrollador } from "./assets/modules.js";

// Crear empleados
const empleado1 = new Empleado("Empleado 1", 50000);
const gerente1 = new Gerente("Gerente 1", 80000, 4);
const desarrollador1 = new Desarrollador("Desarrollador 1", 60000, "JavaScript");

// Agregar empleados al sistema
Empleado.agregarEmpleados(empleado1);
Empleado.agregarEmpleados(gerente1);
Empleado.agregarEmpleados(desarrollador1);

// Calcular salarios totales
console.log(Empleado.calcularSalarios());

// Mostrar información de los empleados
console.log(Empleado.mostrarInformacion());


// ... tu código anterior

// Actualiza el contenido dinámico en el HTML
document.getElementById("nombre-empleado").textContent = empleado1.getNombre();
document.getElementById("salario-empleado").textContent = empleado1.getSalario();

document.getElementById("nombre-gerente").textContent = gerente1.getNombre();
document.getElementById("salario-gerente").textContent = gerente1.getSalario();
document.getElementById("subordinados-gerente").textContent = gerente1.getSubordinados();

document.getElementById("nombre-desarrollador").textContent = desarrollador1.getNombre();
document.getElementById("salario-desarrollador").textContent = desarrollador1.getSalario();
document.getElementById("lenguaje-desarrollador").textContent = desarrollador1.getLenguaje();

