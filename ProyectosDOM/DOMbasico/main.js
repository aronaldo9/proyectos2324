// Selectores del DOM

let titulo = document.getElementById('titulo');
let titulo2 = document.querySelector('.titulo-2');
console.log("titulo", titulo);
console.log("titulo2", titulo2);

let lista = document.querySelectorAll("ul.lista-tareas > li");
console.log(lista);


// Modificar Elementos
titulo.innerText = "hola mundo";
titulo.innerHTML = "hola <em> MUNDO </em>";

let miLogo = document.querySelector('img');
miLogo.setAttribute("src", "/javascript.svg");

miLogo.classList.add("new-class"); // añade una nueva clase
// miLogo.classList.toggle();  cambia una clase por otra


// estilos inline
titulo.style.backgroundColor = "lightblue";

const eliminarDiv = document.querySelector(".eliminar-div");
document.removeChild(eliminarDiv);// esto no funciona xq no es hijo de document

