import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import styles from "../styles/Item.module.css"

interface ItemProps {
    toDo: ToDo;
    index: number;
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
}

export default class Item extends Component<ItemProps, any> {

    removeFromList =() => {
        this.props.handleDelete(this.props.index)
    };

    toggleCompleted = (event: any) => {
        this.props.handleCompleted(this.props.index)
    };

    render() {
        const itemStyles = this.props.toDo.isCompleted ? `${styles.completed}` : ``;

        return (
            <div>
                <span className={itemStyles}>{this.props.toDo.text}</span>
                <button onClick={this.removeFromList}>Delete</button>
                <button onClick={this.toggleCompleted}>{this.props.toDo.isCompleted ? 'Unmark' : 'Mark'}</button>
            </div>
        );
    };
};