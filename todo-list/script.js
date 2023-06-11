const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Load saved items from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos();

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText === '') {
        return;
    }

    const todoItem = createTodoItem(todoText);
    todos.push({ text: todoText, completed: false });

    todoList.appendChild(todoItem);

    saveTodos();

    todoInput.value = '';
}

function createTodoItem(todoText) {
    const li = document.createElement('li');
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('edit-input');
    editInput.value = todoText;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);

    li.appendChild(todoSpan);
    li.appendChild(editInput);
    li.appendChild(actionsDiv);

    editButton.addEventListener('click', () => enableEditMode(li, todoSpan, editInput));
    deleteButton.addEventListener('click', () => deleteTodoItem(li));
    editInput.addEventListener('keypress', (event) => handleEditInputKeyPress(event, li, todoSpan, editInput));

    return li;
}

function enableEditMode(todoItem, todoSpan, editInput) {
    todoItem.classList.add('edit-mode');
    todoSpan.style.display = 'none';
    editInput.style.display = 'inline-block';
    editInput.focus();
    const editButton = todoItem.querySelector('.edit-button');
    editButton.textContent = 'Save';
    editButton.classList.add('save-button');
    editButton.removeEventListener('click', () => enableEditMode(todoItem, todoSpan, editInput));
    editButton.addEventListener('click', () => updateTodoItem(todoItem, todoSpan, editInput));
}

function disableEditMode(todoItem, todoSpan, editInput) {
    todoItem.classList.remove('edit-mode');
    todoSpan.style.display = 'inline-block';
    editInput.style.display = 'none';
    const editButton = todoItem.querySelector('.edit-button');
    editButton.textContent = 'Edit';
    editButton.classList.remove('save-button');
    editButton.removeEventListener('click', () => updateTodoItem(todoItem, todoSpan, editInput));
    editButton.addEventListener('click', () => enableEditMode(todoItem, todoSpan, editInput));
}

function handleEditInputKeyPress(event, todoItem, todoSpan, editInput) {
    if (event.key === 'Enter') {
        updateTodoItem(todoItem, todoSpan, editInput);
    } else if (event.key === 'Escape') {
        disableEditMode(todoItem, todoSpan, editInput);
    }
}

function updateTodoItem(todoItem, todoSpan, editInput) {
    const updatedText = editInput.value.trim();
    if (updatedText === '') {
        deleteTodoItem(todoItem);
        return;
    }

    todoSpan.textContent = updatedText;
    disableEditMode(todoItem, todoSpan, editInput);

    const index = Array.from(todoList.children).indexOf(todoItem);
    todos[index].text = updatedText;
    saveTodos();
}

function deleteTodoItem(todoItem) {
    const index = Array.from(todoList.children).indexOf(todoItem);
    todos.splice(index, 1);
    todoList.removeChild(todoItem);
    saveTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const todoItem = createTodoItem(todo.text);
        todoList.appendChild(todoItem);
    });
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
