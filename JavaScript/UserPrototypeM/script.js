/**
 * Crear una app web que a través de un formulario me permita recoger los datos del nombre, edad y dni.
 * Cuando pulsemos el botón de insertar usuario automáticamente creará usando la herencia por prototipos, 
 * un usuario de tipo usuarioLiteral, y guardará en un array dichos objetos, almacenándolos en el 
 * localStorage a través de la clave datosUsuarios. Si el dni no está repetido en la clave de LS donde se 
 * almacene mi array de objetos, entonces se almacenará.
 */

// ------- Imports ----------
import { usuarioLiteral as Usuario } from "./assets/modules.js";

// ------- Variables Globales --------
let arrayUsers = [];


// ------- Funciones --------------

function insertUsersLocalStorage(key,obj) {
    if(localStorage.getItem(key)) { // verifica que exista el objeto en LS
        arrayUsers = JSON.parse(localStorage.getItem(key));

        if(arrayUsers.some( user => user._dni === obj.dni)) { // verifica si se repite el dni
            document.getElementById('mensajeError').style.display = 'block';
            setTimeout(() => {document.getElementById('mensajeError').style.display = 'none'}, 5000);
        }
        else {
            console.log("object");
            arrayUsers.push(obj);
        }

    }else {
        arrayUsers.push(obj);
    }

    localStorage.setItem(key, JSON.stringify(arrayUsers));
}

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

    if ((newUser.dni)) {
        document.getElementById('mensajeExito').style.display = 'block';
        setTimeout(() => {document.getElementById('mensajeExito').style.display = 'none'}, 5000);
        

        insertUsersLocalStorage('datosUsuarios', newUser);
    }
    else{
        document.getElementById('mensajeError').style.display = 'block';
        setTimeout(() => {document.getElementById('mensajeError').style.display = 'none'}, 5000);
        // document.getElementById('mensajeExito').style.display = 'none';
    }

    // Limpiar el formulario
    document.getElementById('username').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('dni').value = '';
        
}

function init() {
    document.getElementById("insertarUsuario").addEventListener("click", handlerInsertarUsuario);
}

function chargeUsers() {
    const users = JSON.parse(localStorage.getItem('datosUsuarios'));
    if (users) {
        const infoUsers = users.map(user => `Nombre de usuario: ${user._nombre}, Edad: ${user._edad}, Dni: ${user._dni}`).join('\n');

        const infoTextArea = document.getElementById('infoUsuarios');
        infoTextArea.value = infoUsers;
    } else {
        console.log('No hay usuarios en LocalStorage.');
    }
}

const cargar = document.getElementById('cargar');
cargar.addEventListener('click', chargeUsers);


// ------- Inicio de la Aplicación ----------
document.addEventListener("DOMContentLoaded", init);