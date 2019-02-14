import React from 'react'

function Todo (props) {        
    return (
        <div>
            hello
            {props.todo.task}
        </div>
    );
};


export default Todo;