import React from "react"

class TodoInput extends React.Component {
    state = {
        title: ""
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
        })
    } else alert("Please enter a task into the field.")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add new task" value={this.state.title} name="title" onChange={this.onChange} />
                <button>Submit</button>
            </form>
        )
    }
}
export default TodoInput