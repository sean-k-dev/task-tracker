import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import TodoInput from "./TodoInput"
import {v4 as uuidv4} from "uuid"

class Container extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Watch new seasonal shows",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Get at least 10,000 steps",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Fully learn how to use React",
                completed: false
            }
        ]
    }
    eventHandler = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
            return todo
        })
    }))
        console.log("ID:", id)
    }
    deleteTodo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
        console.log("Deleted entry with ID:", id)
    }
    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        return (
            <div>
                <Header />
                <TodoInput addTodoProps={this.addTodo} />
                <TodoList 
                    todos={this.state.todos} 
                    eventHandlerProps={this.eventHandler}
                    deleteTodoProps={this.deleteTodo}
                />
            </div>
        )
    } 
}

export default Container