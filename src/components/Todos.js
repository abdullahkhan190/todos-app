import React from "react";
import '../styles/Todos.css';
import TodoItem from "./TodoItem";

export default function Todos(props) {
    return (
        <div className="todos">
            <h2>Todos List</h2>
            <ul>
                {
                props.todos.length === 0 ? (
                    <p className="no-todos">No todos to display</p>
                ) : (
                props.todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} onDelete={props.onDelete} />
                    </li>
                )))}
            </ul>
        </div>
    );
}