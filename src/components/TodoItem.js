import React from "react"
import styles from "./TodoItem.module.css"
import { IoTrashOutline } from "react-icons/io5"


class TodoItem extends React.Component {
    state = {
        editing: false,
      }
      editTodo = () => {
        this.setState({
            editing: true,
        })
      }
      editTodoCompleted = event => {
        if (event.key === "Enter") { 
          this.setState({editing: false}) 
        }
      }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const { completed, id, title } = this.props.todo
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "hidden"
            editMode.display = "block"
          } else {
            viewMode.display = "block"
            editMode.display = "none"
          }
        return (
        <div onDoubleClick={this.editTodo} style={viewMode}>
            <li className={styles.item}>
                <input 
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => this.props.eventHandlerProps(id)}
                />
                <button onClick={() => this.props.deleteTodoProps(id)}>
                  <IoTrashOutline />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <input type="text"
                    placeholder="Edit this task"
                    value={title}
                    style={editMode}
                    className={styles.textInput}
                    onChange={e => {this.props.setUpdate(e.target.value, id)}}
                    onKeyDown={this.editTodoCompleted}
                />
            </li>
        </div>
        )
    }
}

export default TodoItem