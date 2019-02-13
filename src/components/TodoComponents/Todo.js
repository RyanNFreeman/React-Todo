import React from 'react'

const toDos = [
    {message: 'be Kind'},
    {message: 'be Smart'}
]


class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todosInArray: toDos,
        }
    }
    render() {
        return (
            <div>
                <h1>working on todo list</h1>
                <div className="todos">
                    {this.state.todosInArray.map((todo) => {
                        return (
                          
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Todo;