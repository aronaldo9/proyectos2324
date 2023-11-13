/**
 * crear un módulo error.js que le pase como primer parámetro el texto que quiero mostrar, y como 
 * segundo parámetro el elemento del dom donde lo quiero colocar, de tal forma que cuando inserte 
 * una tarea cuyo nombre ya exista, automáticamente me mostrará un error en color rojo
 * indicando el texto que le hemos indicado a la función, con una duración de 3segs
 */

export default function mostrarError(text, selector) {
    const error = document.createElement('span');
    error.className = "text-error";
    error.textContent = text;
    error.style.color = "red"; // Establecer el color rojo

    const container = document.querySelector(selector);
    container.appendChild(error);
    
    setTimeout(() => {
        error.remove();
    }, 3000);
}

