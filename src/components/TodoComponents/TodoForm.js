import React from 'react'


function TodoForm() {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                type="text" 
                value={props.value}
                onChange={props.handleChanges}
                name="task"
                placeholder="Add Todo"
            />
            <button type="submit" onClick={props.addTodo}>Add Todo</button>
        </form>
    )
}


export default TodoForm;