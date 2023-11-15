/**
 * @author: AaronPF
 */

// --------- Import de módulos -------------
import { v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import crearGrafico from "./components/grafico";
import mostrarError from "./components/error.js";

// ---------- Captura de Componentes Html ----------
const newTaskInput = document.querySelector("#new-task-input");
const tasksListUl = document.querySelector(".tasks-list-ul");
const addTaskBtn = document.querySelector(".add-task-btn");
const mostrarGraficoBtn = document.querySelector(".mostrar-grafico-link");

// animaciones auto-animate
autoAnimate(tasksListUl);

/// ----------- Estado de la Aplicación -------------
const tasks = [];

// app es el objeto que almacena el estado de mi aplicación
// const app = {
//     tasks: tasks,
//     newTaskInput: newTaskInput,
//     tasksListUl: tasksListUl,
// }

const app = {
  tasks,
  newTaskInput,
  tasksListUl,
};

// función para crear una tarea
function createNewTask(title, isCompleted = false) {
  return {
    id: uuidv4().toString(),
    title,
    isCompleted,
  };
}

// función que añade un elemento <li> al <ul> generando un hijo nuevo
function addTaskToList(task, tasksListUl) {
  // aquí mando llamar a la función que cree la tarea en html
  const taskElementLi = createTaskElement(task);
  tasksListUl.appendChild(taskElementLi);
}

/// ----------- Creación de los elementos de la tarea ------------
// función que genera el código <li> para insertarlo en <ul>
function createTaskElement(task) {
  const taskElementLi = document.createElement("li");

  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;

  const taskTitleElement = document.createElement("span");
  taskTitleElement.textContent = task.title;
  taskTitleElement.style.width = "70%";
  // aquí pondría cambiar el color del texto si pulsamos el check
  taskTitleElement.classList.toggle("completed", task.isCompleted);

  // Añadir evento de doble clic para editar el texto de la tarea
  taskTitleElement.addEventListener("dblclick", () => {
    const prevTitle = task.title; // Almacenar el título anterior
    const newTitle = prompt("Editar tarea:", task.title);

    if (newTitle !== null && newTitle !== prevTitle) {
      const isDuplicate = app.tasks.some((t) => t.title === newTitle);
      if (isDuplicate) {
        mostrarError("¡Esta tarea ya existe!", ".tasks-list-ul");
        return;
      }

      task.title = newTitle;
      taskTitleElement.textContent = newTitle;
      saveTaskToLocalStorage();
    }
  });

  // creo el botón para imprimir la tarea
  const taskPrintBtn = document.createElement("button");
  taskPrintBtn.className = "print-button";
  taskPrintBtn.innerHTML = '<i class="fas fa-print"></i>'; // Asegúrate de tener Font Awesome cargado en tu proyecto

  // programo el evento para imprimir
  taskPrintBtn.addEventListener("click", () => {
    imprimirTarea(task);
  });

  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Eliminar Tarea";
  taskDeleteBtn.className = "delete-button";

  // Aquí programo el evento de eliminar y el check de checkbox
  taskDeleteBtn.addEventListener("click", () => {
    const taskIndex = app.tasks.indexOf(task);
    if (taskIndex > -1) {
      app.tasks.splice(taskIndex, 1);
      taskElementLi.remove();
      saveTaskToLocalStorage();
    }
  });

  // Agrega un nuevo selector para el input de búsqueda
  const inputSearch = document.querySelector('.search-input');

  // Evento para la tecla Enter en el input de búsqueda
  inputSearch.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
      const searchText = inputSearch.value.toLowerCase().trim();
      const tasksFiltered = app.tasks.filter(task => task.title.toLowerCase().includes(searchText));

      // Limpiar la lista antes de agregar las tareas filtradas
      tasksListUl.innerHTML = '';

      // Agregar las tareas filtradas a la lista
      tasksFiltered.forEach(task => addTaskToList(task, tasksListUl));

      // Desactivar el scrolling en el evento 'touchstart'
    document.addEventListener('touchstart', (e) => {
      e.preventDefault();
    }, { passive: false });
    }
  });

  /// --------------- PARA CASA ----------
  /**
   * realizar un método saveTaskToLocaLStorage que almacene en local storage el uuid, el nombre
   * de la tarea y true o false
   * realizar un método llamado loadTasksFromLocalStorage que cargue del local Storage las tareas
   */

  taskCheckBox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    taskTitleElement.classList.toggle("completed", task.isCompleted);
    crearGrafico(".grafico-container", tasks);

    const updatedTasks = app.tasks.map((savedTask) => {
      if (savedTask.id === task.id) {
        return { ...savedTask, isCompleted: task.isCompleted };
      }
      return savedTask;
    });
    app.tasks = updatedTasks;

    saveTaskToLocalStorage();
  });

  /// -------- Añadimos los elementos al <li> ---------------
  taskElementLi.appendChild(taskCheckBox);
  taskElementLi.appendChild(taskTitleElement);
  taskElementLi.appendChild(taskPrintBtn);
  taskElementLi.appendChild(taskDeleteBtn);
  return taskElementLi;
}

function saveTaskToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(app.tasks));
}

function loadTasksFromLocalStorage(key) {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem(key));
  console.log(tasksFromLocalStorage);
  if (tasksFromLocalStorage) {
    tasksFromLocalStorage.forEach((task) => {
      const newTask = createNewTask(task.title, task.isCompleted);
      app.tasks.push(newTask);
      addTaskToList(newTask, app.tasksListUl);
    });
  }

  //saveTaskToLocalStorage("tasks",app.tasks);
}

function addTask() {
  const newTaskTitle = app.newTaskInput.value;
  if (newTaskTitle) {
    const taskExists = app.tasks.some((task) => task.title === newTaskTitle);
    if (taskExists) {
      mostrarError("¡Esta tarea ya existe!", ".tasks-list-ul");
    } else {
      const newTask = createNewTask(newTaskTitle);
      app.tasks.push(newTask);
      addTaskToList(newTask, app.tasksListUl);
      app.newTaskInput.value = "";
      saveTaskToLocalStorage();
    }
  }
}

function imprimirTarea(task) {
  const { id, title, isCompleted } = task;
  const fechaActual = new Date().toLocaleDateString();

  // Crear contenido HTML
  const contenidoHTML = `
    <h2>Detalles de la Tarea</h2>
    <p>ID: ${id}</p>
    <p>Texto de la Tarea: ${title}</p>
    <p>Completada: ${isCompleted ? 'Sí' : 'No'}</p>
    <p>Fecha Actual: ${fechaActual}</p>
  `;

  // Crear un Blob con el contenido HTML
  const blobPdf = new Blob([contenidoHTML], { type: 'application/pdf' });

  // Crear URL para el Blob
  const urlBlob = URL.createObjectURL(blobPdf);

  // Crear enlace descarga
  const enlacePdf = document.createElement('a');
  enlacePdf.href = urlBlob;
  enlacePdf.download = `${task.title.substring(
    0,
    4
  )}_${new Date().toLocaleDateString()}.pdf`;

  // Agregar enlace al DOM
  document.body.appendChild(enlacePdf);
  enlacePdf.click();

  // Revocar la URL del Blob para liberar recursos
  URL.revokeObjectURL(urlBlob);
}






/// ---------------- Eventos -----------------
addTaskBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    addTask();
  }
});

mostrarGraficoBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  crearGrafico(".grafico-container", tasks);
});

function init() {
  loadTasksFromLocalStorage("tasks");
}

/// ------------ Inicio de la aplicación --------------
document.addEventListener("DOMContentLoaded", init);

/**
 * Primero: crear un módulo error.js que le pase como primer parámetro el texto que quiero mostrar, y como
 * segundo parámetro el elemento del dom donde lo quiero colocar, de tal forma que cuando inserte
 * una tarea cuyo nombre ya exista, automáticamente me mostrará un error en color rojo
 * indicando el texto que le hemos indicado a la función, con una duración de 3segs
 *
 * Segundo: doble click sobre el span de una tarea lanzará un prompt con el contenido de esa tarea,
 * pudiendo modificar sólo el texto.
 *
 * Tercero: añadir un botón al lado del de eliminar tarea con el texto imprimir tarea, con un icono de font
 * awesome que imprima el id de la tarea, el texto de la tarea, si está completada y la fecha actual.
 * Utilizando blob descargar el pdf a nuestro ordenador, con el nombre que sea las 4 primeras letras de
 * la tarea_dia_mes_año.pdf
 *
 * Cuarto: pulsando la lupa buscaremos a través del input e introduciendo cualquier texto, al lanzar el
 * evento del enter me filtrará todas aquellas tareas que contengan en title el texto introducido
 *
 * Quinto: crear un botón a la izqda de mostrarGrafico, generarEventoCalendario de tipo ics que al pulsarlo
 * genere un evento del calendario cuya fecha de inicio sea la fecha actual, cuya fecha de fin sea
 * exactamente 30 días después y cuyo contenido sea el número de tareas que tengo sin realizar.
 */
