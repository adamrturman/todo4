import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import Item from "./Item";

interface ListProps {
    list: ToDo[];
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
};

export default class List extends Component<ListProps, {}> {

    render() {
        const displayedList = this.props.list.map((toDo:ToDo, index: number) => (
            <Item
                toDo={toDo}
                index={index}
                handleDelete={this.props.handleDelete}
                handleCompleted={this.props.handleCompleted}
            />
        ));

        return (
            <h2>{displayedList}</h2>
        );
    };
};