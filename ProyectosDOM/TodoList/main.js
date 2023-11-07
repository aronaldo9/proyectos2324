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
    const taskElement = createTaskElement(task);
    tasksListUl.appendChild(taskElement);
}


/// ----------- Creación de los elementos de la tarea ------------
// función que genera el código <li> para insertarlo en <ul>
function createTaskElement(task) {
    const taskElement = document.createElement('li');
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;
    const taskTitleElement = document.createElement('span');
    taskTitleElement.textContent = task.title;
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
            taskElement.remove();
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
    });
    /// -------- Añadimos los elementos al <li> ---------------
    taskElement.appendChild(taskCheckBox);
    taskElement.appendChild(taskTitleElement);
    taskElement.appendChild(taskDeleteBtn);
    return taskElement;
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


function init() {
    // load del LocalStorage

}


/// ------------ Inicio de la aplicación --------------
document.addEventListener('DOMContentLoaded', init);


