import React, {Component} from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }

    addTask = () => {
        const { input } = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({input: ''});
        }
    }

    handleEnter = e => {
        if (e.key === 'Enter') this.addTask()
    }

    inputChange = (e) => {
        this.setState({input: e.target.value})
    }

    render() {
        const {input} = this.state;

        return(
            <div className='task-input'>
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></input>
                <button onClick={this.addTask}>ADD</button>
            </div>
        )

    }
}

export default TaskInput