import React from "react"

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
            <ul>
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>
        )
    } 
}
export default Container