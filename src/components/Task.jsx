import React from "react";

const Task = ({ task, ...props}) => {

    const ActionBtn = () => (
        <div className='action-btn'>
            <button onClick={props.doneTask}>{!task.done ?" ✔️" : "❌"}</button>
            <button onClick={props.deleteTask}>DELETE</button>
        {/*{!task.done ?*/}
        {/*    <button onClick={props.doneTask}>✔️</button>*/}
        {/*    : <button onClick={props.deleteTask}>❌</button>}*/}
        </div>)


    const className = 'task' + (task.done ? 'task-done' : '')

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn/>
        </div>
    )
}

export default Task