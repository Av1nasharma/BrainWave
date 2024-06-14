document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoClick);

    function addTodo() {
        const task = todoInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function handleTodoClick(event) {
        if (event.target.tagName === 'BUTTON') {
            const li = event.target.parentElement;
            if (event.target.classList.contains('edit-btn')) {
                editTask(li);
            } else {
                todoList.removeChild(li);
            }
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    }

    function editTask(li) {
        const currentTask = li.firstChild.textContent;
        const newTask = prompt('Edit your task:', currentTask);
        if (newTask !== null) {
            li.firstChild.textContent = newTask.trim();
        }
    }
});
