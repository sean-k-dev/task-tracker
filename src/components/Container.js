import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import TodoInput from "./TodoInput"
import {v4 as uuidv4} from "uuid"

class Container extends React.Component {
    state = {
        todos: []
    }
    componentDidMount() {
        const temp = localStorage.getItem("tasks")
        const parseTasks = JSON.parse(temp)
        if (parseTasks) {
            this.setState({
                todos: parseTasks
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("tasks", temp)
        }
    }
    componentWillUnmount() {
        console.log("Cleaning up data...")
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
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
            return todo
            }),
        })
    }
    render() {
        return (
            <div className="container">
                <div className="inner-container">
                    <Header />
                    <TodoInput addTodoProps={this.addTodo} />
                    <TodoList 
                        todos={this.state.todos} 
                        eventHandlerProps={this.eventHandler}
                        deleteTodoProps={this.deleteTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    } 
}

export default Container