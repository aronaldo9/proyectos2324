/**
 * @author: AarónPF
 * @description:
 * ejercicio localStorage
 * crear una página web que tenga la siguiente estructura: header ancho 100%,
 * nombre del proyecto UsuariosLocalStorage(centrado);
 * Seguidamente dos secciones q parten la pantalla por la mitad.
 * La parte izqda tendrá un formulario "login" q contendrá los campos username, password y el botón de guardar.
 * La parte de la derecha tendrá un título que diga Usuarios almacenados en localStorage y un textarea,
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

// SOLUCIÓN CLASE
import usuarios from "./assets/modules.js";

// -----------Declaración de variables globales -----------------
let myStructUsers = [];

// creamos función que guarde en LS la estructura usuarios

/**
 * 
 * @param {Array} structData 
 * @return {Boolean}
 */
function insertUsers(key,structData) {
    return localStorage.setItem(key,JSON.stringify(structData));
}

insertUsers("myUsers",usuarios);


// función que cargue del LS la estructura cuyo nombre le pase como parámetro
function loadStruct(key) {
    return JSON.parse(localStorage.getItem(key));
}

myStructUsers = loadStruct("myUsers");



// guardar en una estructura de datos el username y el password codificado de todos los usuarios de mi 
// estructura y de todos los nuevos usuarios que vaya a introducir, sin repetir el username. Después se
// vuelca en LocalStorage

function saveStructUserPaswords (key, structUsers) {
    const tmpArray = [];
    structUsers.map( user => {
        tmpArray.push({ [user.login.username] : btoa(user.login.password)});
        //localStorage.setItem(key,)));
    });
    return localStorage.setItem(key, JSON.stringify(tmpArray));
}

saveStructUserPaswords("newUsers", myStructUsers);


// funcion que guarde del formulario los datos en mi estructura de datos con username, password codificado
// no se puede repetir el username
function saveUserPasswordLocalStorage(key, username, password) {
    const tmpArray = JSON.parse(localStorage.getItem(key)) || [];
    
    const encontrado = tmpArray.some(objeto => objeto.hasOwnProperty(username));

    if (!encontrado) {
        tmpArray.push({ [username]: btoa(password) });
        localStorage.setItem(key, JSON.stringify(tmpArray));
        return true;  // Se ha guardado con éxito
    } else {
        alert(`El usuario con username ${username} ya existe`);
        return false;  // No se pudo guardar
    }
}



function save() {
    // capturar lo que he escrito en el formulario y guardarlo en variables.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // LLamar a mi función que guardaba en la key el username y el password.
    const saveWithExit = saveUserPasswordLocalStorage('newUsers',username,password);
    
    // Si lo guarda, alert indicando que ha sido guardado
    if(saveWithExit) {
        alert ("Usuario y contraseña guardados con éxito");
    }
    else{
        alert ("Error al guardar los datos");
    }

    // Limpiar el formulario
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}


function chargeUsers() {
        const users = JSON.parse(localStorage.getItem('newUsers'));
        if (users) {
            const infoUsers = users.map(user => `Nombre de usuario: ${Object.keys(user)[0]}, Contraseña: ${atob(user[Object.keys(user)[0]])}`).join('\n');
    
            const infoTextArea = document.getElementById('infouserpassword');
            infoTextArea.value = infoUsers;
        } else {
            console.log('No hay usuarios en LocalStorage.');
        }
    }

    const cargar = document.getElementById('cargar');
    cargar.addEventListener('click', chargeUsers);




// -------------- CAPTURA DE EVENTOS EN EL FORMULARIO ----------------------
document.getElementById("guardar").addEventListener("click", save);











// Mi solución!!
// import { users } from "./assets/modules.js";

// // 1ª Funcionalidad
// let user = users;

// const passwordEncriptada = password => btoa(password);

// const guardarDatosUsuario = (users) => {
//     const datosUsuario = users.map(usuario => ({
//         username: usuario.login.username,
//         password: passwordEncriptada(usuario.login.password)
//     })); 
//     localStorage.setItem('user', JSON.stringify(datosUsuario));
//     console.log('Usuarios guardados en LocalStorage');
// };

// // Llamar a la función para guardar los datos de los usuarios en LocalStorage
// guardarDatosUsuario(user);


// // 2ª Funcionalidad
// // Obtener los elementos del formulario
// const loginForm = document.querySelector('.loginForm');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');

// // Evento para guardar los datos del formulario en localStorage
// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();  // Evitar el comportamiento predeterminado del formulario

//     const username = usernameInput.value;
//     const password = passwordInput.value;

//     // Obtener los usuarios almacenados en localStorage
//     const usersGuardados = JSON.parse(localStorage.getItem('user')) || [];

//     // Verificar si el nombre de usuario ya está almacenado en localStorage
//     const existeUser = usersGuardados.some(user => user.username === username);

//     if (existeUser) {
//         alert('El nombre de usuario ya está almacenado en localStorage.');
//     } else {
//         // Guardar el nuevo usuario en localStorage
//         const nuevoUser = {
//             username: username,
//             password: passwordEncriptada(password)
//         };
//         usersGuardados.push(nuevoUser);
//         localStorage.setItem('user', JSON.stringify(usersGuardados));
//         alert('Usuario almacenado en localStorage.');
//     }

//     // Limpiar los campos después de guardar
//     usernameInput.value = '';
//     passwordInput.value = '';
// });


// // 3ª Funcionalidad

// function cargarUsuarios() {
//     const usuariosLocalStorage = JSON.parse(localStorage.getItem('user'));
//     if (usuariosLocalStorage) {
//         const infoUsers = usuariosLocalStorage.map(user => `Nombre de usuario: ${user.username}, Contraseña: ${atob(user.password)}`).join('\n');

//         const infoTextArea = document.getElementById('infouserpassword');
//         infoTextArea.value = infoUsers;
//     } else {
//         console.log('No hay usuarios en LocalStorage.');
//     }
// }


// const cargar = document.getElementById('cargar');
// cargar.addEventListener('click', cargarUsuarios);




// // insertar elementos en el localStorage.

// localStorage.setItem("misUsers", JSON.stringify(users));

// // función saludo
// function saludo () {
//     alert("Hola mundo");
// }

// const username = document.getElementById("username").value;
// const password = document.getElementById("password").value;

// document.getElementById("guardar").addEventListener('click', saludo);
