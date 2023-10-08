import { users } from "./assets/modules.js";

// insertar elementos en el localStorage.

localStorage.setItem("misUsers", JSON.stringify(users));

// función saludo
function saludo () {
    alert("Hola mundo");
}

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

document.getElementById("guardar").addEventListener('click', saludo);



/**
 * ejercicio localStorage
 * crear una página web que tenga la siguiente estructura: header ancho 100%, 
 * nombre del proyecto UsuariosLocalStorage(centrado);
 * Seguidamente dos secciones q parten la pantalla por la mitad.
 * La parte izqda tendrá un formulario "login" q contendrá los campos username, password y el botón de guardar.
 * La parte d ela dcha tendrá un título que diga Usuarios almacenados en localStorage y un textarea,
 * junto con el botón cargar.
 * La funcionalidad será la siguiente:
 * 1º Cargaremos todos los usuarios de json/placeholder.users en una variable "user" y 
 * a través de una función a la q pasemos la variable, guardará el password y username de los usuarios
 * dentro de LocalStorage. La password será encriptada antes de ser almacenada.
 * 2º A través del formulario introduciré un nombre y contraseña. Si el nombre no está guardado en localStorage,
 * almacenaremos los datos dentro de localStorage. Si ya está almacenada, hará feedback de que el username
 * ya está almacenado.
 * 3ª A través del botón cargar, sacaremos el nombre de usuario y contraseña desencriptada de todos los usuarios
 * almacenados en localStorage. NOTA: para encriptar la contraseña usaremos btoa con la cadena que queremos
 * encriptar, y con atob y la cadena, la desencriptamos.
 */