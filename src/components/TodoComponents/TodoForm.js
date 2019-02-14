import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            item: ''
        }
    }

        handleChanges = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        submitItem = e => {
            this.setState( {item: ''} );
            this.props.addItem(e, this.state.item)
        }

        render() {
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
}


export default TodoForm;