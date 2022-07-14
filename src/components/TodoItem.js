import React from "react"

class TodoItem extends React.Component {
    render() {
        return (
        <li>
            <input 
                type="checkbox"
                checked={this.props.todo.completed}
                onChange={() => this.props.eventHandlerProps(this.props.todo.id)}
            />
            {this.props.todo.title}
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete Task</button>
        </li>
        )
    }
}

export default TodoItem