import React, {Component} from 'react';
import './App.css';
import ToDo from "./interfaces/ToDo";
import InputArea from "./components/InputArea";
import List from "./components/List";

interface AppState {
    list: ToDo[];
};

export default class App extends Component< {}, AppState> {
    state = {
        list: []
    };

    handleAddToList = (taskToAdd: string) => {
        const toDoToAdd: ToDo = {
            text: taskToAdd,
            isCompleted: false
        };
        const listWithAddition = [...this.state.list, toDoToAdd];
        this.setState({ list: listWithAddition });
    }

    handleDelete = (index: number) => {
        const listWithDeletion = this.state.list.filter((toDo:ToDo, i: number) => {
            if (i !== index) {
                return toDo;
            }
            //  included on prompting from linter
            return undefined;
        });
        this.setState({ list: listWithDeletion });
    }

    handleCompleted = (index: number) => {
        const listWithCompletion: ToDo[] = this.state.list.map((toDo: ToDo, i: number) => {
            if (i === index) {
                toDo.isCompleted = !toDo.isCompleted;
            }
            return toDo;
        })
        this.setState({ list: listWithCompletion });
    }

    render() {
        return (
            <div className="App">
                <h1>To Do List</h1>
                <InputArea list={this.state.list} handleAddToList={this.handleAddToList}  />
                <List list={this.state.list} handleDelete={this.handleDelete} handleCompleted={this.handleCompleted} />
            </div>
        );
    };
};


