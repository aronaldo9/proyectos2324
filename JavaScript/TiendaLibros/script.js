/**
* Ejercicio 1 Tienda de Libros 📚
* Enunciado: Crea una aplicación que modele una tienda de libros. Cada libro debe tener un título, un
* autor y un precio. La tienda debe permitir agregar libros, eliminar libros y calcular el precio total de
* todos los libros en el inventario.
 */

// --------- Imports -------------
import { libroLiteral as Libro} from "./assets/modules.js";

// --------- Variables Globales ---------
let inventario = [];

// --------- Funciones -------------
function agregarLibrosLocalStorage(key,obj) {
    if(localStorage.getItem(key)) {
        inventario = JSON.parse(localStorage.getItem(key));

        if(inventario.some( libro => libro._titulo === obj.titulo)) { // verifica si se repite el título
            document.getElementById('mensajeError').style.display = 'block';
            setTimeout(() => {document.getElementById('mensajeError').style.display = 'none'}, 5000);
        }
        else {
            console.log("object");
            inventario.push(obj);
        }
    } else {
        inventario.push(obj);
    }
    localStorage.setItem(key,JSON.stringify(inventario));
}


function handlerAgregarLibro(e) {
    e.preventDefault();
    // const formularioLibros = document.getElementById('formularioLibros');
    const frmTitulo = document.getElementById('titulo').value;
    const frmAutor = document.getElementById('autor').value;
    const frmPrecio = document.getElementById('precio').value;

    let newLibro = Object.create(Libro);
    newLibro.titulo = frmTitulo;
    newLibro.autor = frmAutor;
    newLibro.precio = parseFloat(frmPrecio);

    if(newLibro.titulo) {
        agregarLibrosLocalStorage('datosLibros', newLibro);
        document.getElementById('mensajeExito').style.display = 'block';
        setTimeout(() => {document.getElementById('mensajeExito').style.display = 'none'}, 5000);
    }
    else {
        document.getElementById('mensajeError').style.display = 'block';
        setTimeout(() => {document.getElementById('mensajeError').style.display = 'none'}, 5000);
    }

    // limpiar formulario
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('precio').value = "";

}

function handlerEliminarLibro(e) {
    e.preventDefault();
    const frmTituloAEliminar = document.getElementById('borrarTitulo').value;
  
    // Filtra el inventario para encontrar el libro a eliminar por el título
    const inventarioFiltrado = inventario.filter(libro => libro._titulo !== frmTituloAEliminar);
  
    // Verifica si el libro existe en el inventario
    const existeLibro = inventario.some(libro => libro._titulo === frmTituloAEliminar);
  
    // Update the inventario with the filtered array
    if (existeLibro) {
      inventario = inventarioFiltrado;
      localStorage.setItem('datosLibros', JSON.stringify(inventario));
      console.log(`Libro "${frmTituloAEliminar}" eliminado del inventario.`);
    } else {
      console.log(`No se encontró el libro "${frmTituloAEliminar}" en el inventario.`);
    }
  
    // Limpiar el campo de entrada
    document.getElementById('borrarTitulo').value = "";
}


function sumarPrecioTotal() {
    console.log(inventario);
    // Cargar el inventario desde el almacenamiento local
    const inventarioGuardado = localStorage.getItem('datosLibros');
    if (inventarioGuardado) {
        inventario = JSON.parse(inventarioGuardado);
    }
    const precioTotal = inventario.reduce( (acc,libro) => acc + libro._precio, 0);
    return precioTotal;
}

function init() {
    document.getElementById("insertarLibro").addEventListener("click", handlerAgregarLibro);
    // Agregar el evento click para el botón de eliminar libros
    document.getElementById("borrarLibro").addEventListener("click", handlerEliminarLibro);
    // Agregar el evento click para el botón de calcular precio y mostrarlo en el html
    document.getElementById("precioTotal").addEventListener("click", () => {
        const precioTotal = sumarPrecioTotal();
      
        // Selecciona el div donde deseas mostrar el precio total
        const precioTotalDiv = document.getElementById("precioTotalDiv");
      
        // Actualiza el contenido del div con el precio total
        precioTotalDiv.textContent = `Precio Total: ${precioTotal}`;
      });
      
}


// ------- Inicio de la Aplicación ----------
document.addEventListener("DOMContentLoaded", init);