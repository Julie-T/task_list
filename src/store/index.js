import decorate, {  observable, computed, action } from 'mobx';

class Store {
    tasks = [
        {id: 0, title: 'walk the dog', done: false,},
        {id: 1, title: 'car wash', done: true,},
        {id: 2, title: 'housework', done: true,},
        {id: 3, title: 'pink shorts', done: false,},
    ];

    setTask(payload) {
        this.tasks = payload;
    }

    get sortedTasks() {
        return this.tasks.slice()
            .sort((a,b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
    }

    get activeTasks() {
        return this.tasks.filter(task => !task.done);
    }

    addTask(task) {
        let tasks = this.tasks
        const newTask = {
            // id: this.tasks.length !== 0 ? task.length : 0,
            id: this.tasks.length || 0,
            title: task,
            done: false,
        }
        tasks.push(newTask)
        // this.setState( {task: newTasks})
        this.setTask(tasks);
    }

    doneTask(id) {
        const newTasks = this.tasks.map(task => task.id === id ? task.done = !task.done : task)
        // this.setState({task: newTasks})
        this.setTask(newTasks);
    }
    deleteTask(id) {
        const newTasks = this.tasks.filter(task => task.id !== id)
        this.setTask(newTasks)
    }
}

// {activeTasks.length}

// const StoreView = observer(({store})=> (
//     <span></span>
// ))

Store = decorate(Store, {
    tasks: observable,
    activeTasks: computed,
    sortedTasks: computed,
    addTask: action,
    deleteTask: action,
    doneTask: action,
})

const myStore = new Store();

export default myStore
