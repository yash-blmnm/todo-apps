let todos = [{title: 'sample todo item', completed: true}]
const displayTodo = (todoArr, indexVal) => {
    let todoContent = ''
    todoArr.map((todo, index) => {
        indexVal = indexVal ?? (index + 1);
        todoContent += `<li class="todo-list-item">
            <input type="checkbox" data-id=${indexVal} ${todo.completed ? "checked" : ""} id="todo-${indexVal}" name="todo-${indexVal}" value=${todo.title}>
            <label for="todo-${indexVal}"> ${todo.title}</label>
        </li>`
    })
    jQuery(todoContent).insertBefore('#todo-list li:last')
}
console.log(jQuery)
$(document).on('click', '.todo-list-item', function(){ 
    const status = event.target.checked;
    const index = parseInt(event.target.dataset.id) - 1;
    todos = [...todos.slice(0, index), {...todos[index], completed: status}, ...todos.slice(index+1)]
    console.log(todos);
});
$(function() {
    const addTodoBtn = jQuery("#add-todo");
    const newTodoForm = jQuery("#new-todo");
    displayTodo(todos);
    addTodoBtn.on('click', function( event ) {
        addTodoBtn.hide();
        newTodoForm.show();
        newTodoForm.find('input[name="title"]').first().focus();
        
    })
    
    newTodoForm.on('submit', function(event) {
        const todoTitle = jQuery('#new-todo input[name="title"]').first();
        const newTodo =  { title: todoTitle.val(), completed: false}
        todos.push(newTodo);
        displayTodo([newTodo], todos.length);
        addTodoBtn.show();
        todoTitle.val('');
        newTodoForm.hide();
        event.preventDefault();
    })
});
