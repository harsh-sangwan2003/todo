import React, { Component } from 'react'

export class Todo extends Component {

    constructor() {

        super();
        this.state = {

            tasks: [{ task: 'Check mails', id: 1 }, { task: 'Read article', id: 2 }, { task: 'Complete HW', id: 3 }],
            currTask: ''
        }
    }

    handleClick = () => {

        this.setState({

            tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ''
        })
    }

    handleRemove = (id) => {

        let filteredArr = this.state.tasks.filter(taskObj => {

            return taskObj.id !== id
        })

        this.setState({

            tasks: [...filteredArr]
        })
    }

    render() {
        return (

            <div>
                <input type="text" onChange={(e) => this.setState({ currTask: e.target.value })} value={this.state.currTask} />
                <button onClick={this.handleClick}>Submit</button>

                <ul>
                    {
                        this.state.tasks.map(taskObj => (
                            <li key={taskObj.id}>
                                <p>{taskObj.task}</p>
                                <button onClick={() => { this.handleRemove(taskObj.id) }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>

            </div>

        )
    }
}

export default Todo