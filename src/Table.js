import React from 'react'

const THead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}
const TBody = (props) => {
    const { tasks, removeTask } = props;
    const row = tasks.map((task, index) => {
        return (
            <tr id={index}>
                <td>{task.name}</td>
                <td>{task.desc}</td>
                <td><button onClick={()=>removeTask(index)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {row}
        </tbody>
    )
}

const Table = (props) => {
    const { tasks, removeTask } = props;
    return (
        <table>
            <THead />
            <TBody tasks={tasks} removeTask={removeTask} />
        </table>
    );
}


export default Table