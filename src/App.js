import React, {Component} from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import {nanoid} from 'nanoid'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {id: 0, title: 'walk the dog', done: false,},
                {id: 1, title: 'car wash', done: true,},
                {id: 2, title: 'housework', done: true,},
                {id: 3, title: 'pink shorts', done: false,},
            ]
        }
    }

    addTask = (task) => {
        const newTask = {
            id: this.state.tasks.length !== 0 ? task.length : 0,
            title: task,
            done: false,
        }
        const newTasks = this.state.tasks.push(newTask)
        this.setState( {task: newTasks})

        // this.setState(state => {
        //     let {tasks} = state;
        //     tasks.push({
        //         id: tasks.length !== 0 ? task.length : 0,
        //         title: task,
        //         done: false,
        //     });
        //     return tasks;
        // })
    }

    doneTask = (id) => {
        // const index = this.state.tasks.map(task => task.id).indexOf(id);
        // this.setState(state => {
        //     let { tasks } = state;
        //     // if(tasks[index].done === true) {
        //     //     tasks[index].done = false;
        //     // } else {
        //     //     tasks[index].done = true;}
        //     tasks[index].done = !tasks[index].done;
        //     return tasks;
        // })
        const newTasks = this.state.tasks.map(task => task.id === id ? task.done = !task.done : task)
        this.setState({task: newTasks})
    }

    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({tasks: newTasks})
        // const index = this.state.tasks.map(task => task.id).indexOf(id);
        // this.setState(state => {
        //     let {tasks} = state;
        //     delete tasks[index];
        //     return tasks;
        // })
    }

    render() {
        // const {tasks} = this.state;
        const activeTasks = this.state.tasks.filter(task => !task.done);
        const doneTasks = this.state.tasks.filter(task => task.done);

        return (
            <div className='App'>
                <h1 className='top'>Active tasks: {activeTasks.length}</h1>
                {[...activeTasks, ...doneTasks].map(task => (
                    <Task
                        doneTask={() => this.doneTask(task.id)}
                        deleteTask={() => this.deleteTask(task.id)}
                        task={task}
                        key={nanoid()}/>
                ))}
                <TaskInput addTask={this.addTask}/>
            </div>
        );
    }
}

export default App;
