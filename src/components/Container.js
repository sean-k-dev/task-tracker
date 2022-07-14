import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"

class Container extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Watch new seasonal shows",
                completed: true
            },
            {
                id: 2,
                title: "Get at least 10,000 steps",
                completed: true
            },
            {
                id: 3,
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
    render() {
        return (
            <div>
                <Header />
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