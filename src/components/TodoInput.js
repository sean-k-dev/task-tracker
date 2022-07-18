import React from "react"
import { RiAddBoxFill } from "react-icons/ri"

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
            <form onSubmit={this.handleSubmit} className="input-container">
                <input className="input-text" type="text" placeholder="Enter new task here" value={this.state.title} name="title" onChange={this.onChange} />
                <button className="input-submit">
                    <span className="input-submit-front">
                        <RiAddBoxFill />
                    </span>
                </button>
                
            </form>
        )
    }
}
export default TodoInput