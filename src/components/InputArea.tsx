import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";

interface InputAreaProps {
    list: ToDo[];
    handleAddToList: (taskToAdd: string) => void;
};

interface InputAreaState {
    taskToAdd: string;
};

export default class InputArea extends Component<InputAreaProps, InputAreaState> {
    state = {
        taskToAdd: ''
    };

    handleChange = (event: any) => {
        this.setState({ taskToAdd: event.target.value });
    };

    handleAdd = () => {
        this.props.handleAddToList(this.state.taskToAdd);
        this.setState({ taskToAdd: '' });
    };

    render() {

        return (
            <>
                <input onChange={this.handleChange} value={this.state.taskToAdd}/>
                <button onClick={this.handleAdd}>Add</button>
            </>
        );
    };
};