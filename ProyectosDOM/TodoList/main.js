/**
 * @author: AaronPF
 */

// --------- Import de módulos -------------
import { v4 as uuidv4 } from 'uuid';
import autoAnimate from '@formkit/auto-animate';
import crearGrafico from './components/grafico';


// ---------- Captura de Componentes Html ----------
const newTaskInput = document.querySelector('#new-task-input');
const tasksListUl = document.querySelector('.tasks-list-ul');
const addTaskBtn = document.querySelector('.add-task-btn');
const mostrarGraficoBtn = document.querySelector('.mostrar-grafico-link');

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
function createNewTask(title,isCompleted=false) {
    return {
        id: uuidv4().toString(),
        title,
        isCompleted,
    };
} 

// función que añade un elemento <li> al <ul> generando un hijo nuevo
function addTaskToList(task,tasksListUl) {
    // aquí mando llamar a la función que cree la tarea en html
    const taskElementLi = createTaskElement(task);
    tasksListUl.appendChild(taskElementLi);
}

/// ----------- Creación de los elementos de la tarea ------------
// función que genera el código <li> para insertarlo en <ul>
function createTaskElement(task) {
    const taskElementLi = document.createElement('li');

    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;

    const taskTitleElement = document.createElement('span');
    taskTitleElement.textContent = task.title;
    taskTitleElement.style.width = "70%";
    // aquí pondría cambiar el color del texto si pulsamos el check
    taskTitleElement.classList.toggle("completed",task.isCompleted);
    
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = "Eliminar Tarea";
    taskDeleteBtn.className = "delete-button";

    // Aquí programo el evento de eliminar y el check de checkbox
    taskDeleteBtn.addEventListener('click', () => {
        const taskIndex = app.tasks.indexOf(task);
        if(taskIndex > -1) {
            app.tasks.splice(taskIndex,1);
            taskElementLi.remove();
            saveTaskToLocalStorage();
        }
    });

    /// --------------- PARA CASA ----------
    /**
     * realizar un método saveTaskToLocaLStorage que almacene en local storage el uuid, el nombre
     * de la tarea y true o false
     * realizar un método llamado loadTasksFromLocalStorage que cargue del local Storage las tareas
     */

    taskCheckBox.addEventListener('change', () => {
        task.isCompleted ? task.isCompleted = false : task.isCompleted = true;
        taskTitleElement.classList.toggle("completed",task.isCompleted);
        saveTaskToLocalStorage();
    });

    function loadTasksFromLocalSTorgae(key) {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem(key));
        if (tasksFromLocalStorage) {
          tasksFromLocalStorage.forEach((task) => {
            const newTask = createNewTask(task.title, task.isCompleted);
            app.tasks.push(newTask);
            addTaskToList(newTask, app.taskslistUl);
          });
        }
      
        saveTaskToLocalStorage("tasks",app.tasks);
      }

    /// -------- Añadimos los elementos al <li> ---------------
    taskElementLi.appendChild(taskCheckBox);
    taskElementLi.appendChild(taskTitleElement);
    taskElementLi.appendChild(taskDeleteBtn);
    return taskElementLi;
}

function addTask() {
    const newTaskTitle = app.newTaskInput.value;
    if(newTaskTitle) {
        const newTask = createNewTask(newTaskTitle);
        app.tasks.push(newTask);
        addTaskToList(newTask,app.tasksListUl);

        app.newTaskInput.value("");
    }
}


/// ---------------- Eventos -----------------
addTaskBtn.addEventListener('click', addTask);
newTaskInput.addEventListener('keydown', (evento) => {
    if(evento.key === 'Enter') {
        addTask();
    }
})

mostrarGraficoBtn.addEventListener('click', (evento) => {
    evento.preventDefault();
    crearGrafico(".grafico-container",tasks);
});


function init() {
    // load del LocalStorage

}


/// ------------ Inicio de la aplicación --------------
document.addEventListener('DOMContentLoaded', init);


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
 * Utilizando bob descargar el pdf a nuestro ordenador, con el nombre que sea las 4 primeras letras de 
 * la tarea_dia_mes_año.pdf
 * 
 * Cuarto: pulsando la lupa buscaremos a través del input e introduciendo cualquier texto, al lanzar el 
 * evento del enter me filtrará todas aquellas tareas que contengan en title el texto introducido
 * 
 * Quinto: crear un botón a la izqda de mostrarGrafico, generarEventoCalendario de tipo ics que al pulsarlo
 * genere un evento del calendario cuya fecha de inicio sea la fecha actual, cuya fecha de fin sea
 * exactamente 30 días después y cuyo contenido sea el número de tareas que tengo sin realizar.
 */