import React from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends React.Component {
    state = {
        tasks: []
    }
    removeTask = (id) => {
        if (id === '' || id === undefined)
            return;
        console.log('Removing Task...', id)
        const initial = this.state.tasks;
        this.setState({
            tasks: initial.filter((element, index) => {
                return (id !== index);
            })
        })
    }

    addTask = (info) => {
        if (info.name === undefined || info.name === '')
            return;
        console.log(info, 'Adding Task...');
        let newTasks = this.state.tasks;
        newTasks.push({
            desc: info.desc,
            name: info.name

        });
        this.setState({
            tasks: newTasks
        })
    }
    render() {
        return (
            <div className="main" >
                <h5>First React Application</h5>
                <hr />
                <h3>To-Do's</h3>
                <Table tasks={this.state.tasks} removeTask={this.removeTask} />
                <Form addTask={this.addTask} />
                <Api />
            </div>
        )
    }
}

export default App