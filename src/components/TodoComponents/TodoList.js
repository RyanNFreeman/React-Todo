// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './components/TodoComponents/Todo'

const TodoList = props => {
    return (
        <div className='Todolist-style'>
            {props.todos.map(todo => (
                <Todo todo={todo} /> 
            ))}

        </div>
    )
}

export default TodoList;

{/* <Todo
    handleToggleComplete={props.handleToggleComplete}
    key={todo.id}
    todo={todo}
/> */}