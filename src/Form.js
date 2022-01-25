import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.initState = {
            name: '',
            desc: ''
        }
        this.state = this.initState;
    }
    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value,
        })
    }
    handleSubmit = () => {
        this.props.addTask(this.state);
        this.setState(this.initState);
    }

    render() {
        const { name, desc } = this.state;
        return (
            <form >
                <label htmlFor="taskName">Event Name</label>
                <input type="text" name="taskName" id="name" value={name} onChange={this.handleChange} />
                <label htmlFor="desc">Description</label>
                <input type="text" name="desc" id="desc" value={desc} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.handleSubmit} />
            </form>
        );
    }
}
export default Form