import React from "react";
import '../styles/TodoItem.css';

export default function TodoItem({todo, onDelete}) {

    return (
        <div className="todo-item">
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>
        </div>
    );
}
