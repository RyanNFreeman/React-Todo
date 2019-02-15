import React from 'react';
import './Todo.css'

const TodoForm = props => {
  return (
    <form>
      <input 
        className="input"
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className='custom-btn' onClick={props.handleAddTodo}>Add Todo</button>
      <button className='custom-btn' onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;