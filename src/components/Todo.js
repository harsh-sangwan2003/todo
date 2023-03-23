import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {

        super();
        this.state = {

            tasks: [],
            currTask: ''
        }
    }

    handleChange = (e) => {

        this.setState({

            currTask: e.target.value
        })
    }

    handleSubmit = () => {

        this.setState({

            tasks: [...this.state.tasks, { name: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ''
        })
    }

    handleDelete = (id) => {

        let newArr = this.state.tasks.filter(obj =>

            obj.id !== id
        )

        this.setState({

            tasks: [...newArr]
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.currTask} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>

                <ul>{

                    this.state.tasks.map(taskObj => (

                        <li key={taskObj.id}>
                            <p>{taskObj.name}</p>
                            <button onClick={() => { this.handleDelete(taskObj.id) }}>Delete</button>
                        </li>
                    ))
                }</ul>
            </div>
        )
    }
}
