import tasks from './data.js';

const Task = (props) => {
    const { id, name, due, done } = props;
    let ticked = '';
    
    if(done)
    {
        ticked = `<div class="task__done">✓</div>`;
    }
    return `
    <div class="task">
        <div class="task__body">
            <div class="task__name">${name}</div>
            <div class="task__due">${due}</div>
        </div>
        ${ticked}
    </div>
    `;
};

const renderTasks = (items) => {
    const tasksList = document.querySelector('.todo__tasks');
    console.log(items);
    items.map(
        item => 
    tasksList.innerHTML += Task(item))
};

let el = document.querySelector("#checkbox");
console.log(el);

el.addEventListener('change', (e) => { console.log(e.target.checked);
    const tasksList = document.querySelector('.todo__tasks');
    tasksList.innerHTML = "";
    let queryParam = 'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=' + e.target.checked;
    console.log(queryParam);
    fetch(queryParam)
    .then(r => r.json())
    .then((data) => renderTasks(data));
});


