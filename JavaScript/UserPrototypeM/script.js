/**
 * Crear una app web que a través de un formulario me permita recoger los datos del nombre, edad y dni.
 * Cuando pulsemos el botón de insertar usuario automáticamente creará usando la herencia por prototipos, 
 * un usuario de tipo usuarioLiteral, y guardará en un array dichos objetos, almacenándolos en el 
 * localStorage a través de la clave datosUsuarios.
 */

// ------- Imports ----------
import { usuarioLiteral as Usuario } from "./assets/modules.js";

// ------- Variables Globales --------



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
    if(newUser.dni = dniFrm) {
        alert("Insertado Correctamente");
        console.log(newUser.mostrarInfo());
    }
}

function init() {
    document.getElementById("insertarUsuario").addEventListener('click', handlerInsertarUsuario);
}


// ------- Inicio de la Aplicación ----------
document.addEventListener("DOMContentLoaded", init);