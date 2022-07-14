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
    render() {
        return (
            <div>
                <Header />
                <TodoList todos={this.state.todos} />
            </div>
        )
    } 
}

export default Container