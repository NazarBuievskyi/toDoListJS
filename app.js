const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event listeners

todoList.addEventListener('click', deleteCkeck);
filterOption.addEventListener('click', filterTodo);

todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    //create div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const comletedButton = document.createElement('button');
    comletedButton.innerHTML = '<i class = "fas fa-check"></i>';
    comletedButton.classList.add('complete-button');
    todoDiv.appendChild(comletedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
});


    function deleteCkeck (e) {
        const item = e.target;
        //Delete todo
        if (item.classList[0] === 'trash-button'){
            const todo = item.parentElement;
            //Animation
            todo.classList.add('fall');
            todo.addEventListener('transitionend', () => {
                todo.remove();
            });
        }
        //Check mark
        if (item.classList[0] === 'complete-button') {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
        }

    }

    function filterTodo (e) {
        const todos = todoList.childNodes;
        todos.forEach(function(todo){
            switch(e.target.value){
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if(todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if(!todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        });
    }