const taskInput = document.querySelector('.task__input');
const taskClear = document.querySelector('.task__clear');
const taskList = document.querySelector('.task__list');

let tasks = [
    {
        title: 'Estudiar javascript',
        completed: true
    },
    {
        title: 'Salir al receso a las 9:00pm',
        completed: true
    },
    {
        title: 'Realizar el reto del fin de semana',
        completed: false
    },
];

function renderTasks(tasks = []) {
    let lista = '';

    tasks.forEach((task) => {
        lista = lista + `<li>${task.title}</li>`;
    });

    taskList.innerHTML = lista;
}

renderTasks(tasks);