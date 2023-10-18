/**
 * Crear una app web que a través de un formulario me permita recoger los datos del nombre, edad y dni.
 * Cuando pulsemos el botón de insertar usuario automáticamente creará usando la herencia por prototipos, 
 * un usuario de tipo usuarioLiteral, y guardará en un array dichos objetos, almacenándolos en el 
 * localStorage a través de la clave datosUsuarios.
 */

// ------- Imports ----------
import { usuarioLiteral as Usuario } from "./assets/modules.js";

// ------- Variables Globales --------
let arrayUsers = [];


// ------- Funciones --------------
function handlerInsertarUsuario(e) {
    e.preventDefault();
    // const formularioUsuarios = document.getElementById('formularioUsuarios');
    const usernameFrm = document.getElementById('username').value;
    const edadFrm = document.getElementById('edad').value;
    const dniFrm = document.getElementById('dni').value;

    // para instanciar o crear un objeto cuyo prototipo sea UsuarioLiteral???
    // const objetoHijo = Object.create(nombre del objeto padre)
    let newUser = Object.create(Usuario);
    newUser.nombre = usernameFrm;
    newUser.edad = edadFrm;
    newUser.dni = dniFrm;

    let mensaje = "";
    if (newUser.dni === dniFrm) {
        mensaje = "DNI Insertado Correctamente";
        // Agregar el usuario al array
        arrayUsers.push(newUser);
        console.log(newUser.mostrarInfo());
        // Guardar en localStorage
        localStorage.setItem("datosUsuarios", JSON.stringify(arrayUsers));
    } else {
        mensaje = "Error al insertar el DNI";
    }

    const mensajeElement = document.getElementById(newUser.dni === dniFrm ? "mensajeExito" : "mensajeError");
        mensajeElement.textContent = mensaje;
        mensajeElement.style.display = "block";

    // Mostrar el mensaje después de 5 segundos
    setTimeout(() => {
        mensajeElement.remove();
    }, 5000); 
}

function init() {
    document.getElementById("insertarUsuario").addEventListener("click", handlerInsertarUsuario);
}


// ------- Inicio de la Aplicación ----------
document.addEventListener("DOMContentLoaded", init);