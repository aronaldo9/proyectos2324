/**
 * @author: AaronPF
 */

// --------- Import de módulos -------------
import { v4 as uuidv4 } from 'uuid';
import autoAnimate from '@formkit/auto-animate';


// ---------- Captura de Componentes Html ----------
const newTaskInput = document.querySelector('#new-task-input');
const tasksListUl = document.querySelector('.tasks-list-ul');
const addTaskBtn = document.querySelector('.add-task-btn');
const mostrarGraficoBtn = document.querySelector('.mostrar-grafico-link');

// ----------- Estado de la Aplicación -------------
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
    const taskElement = createTaskElement(task);
    tasksListUl.appendChild(taskElement);
}


// ----------- Creación de los elementos de la tarea ------------
// función que genera el código <li> para insertarlo en <ul>
function createTaskElement(task) {
    const taskElement = document.createElement('li');
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;
    const taskTitleElement = document.createElement('span');
    taskTitleElement.textContent = task.title;
}


