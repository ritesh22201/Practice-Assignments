import React from "react";
import '../style.css';

export default function TodoList({ todo, setTodos }) {

    const handleComplete = (todoel) => {
        setTodos(todo.map((el) => {
            if (el.id === todoel.id) {
                return {...el, completed: !el.completed}
            }
            return el;
        }))
    }

    const handleDelete = ({ id }) => {
        setTodos(todo.filter((el) => el.id !== id));
    }

    return (
        <div className="card-container">
            {todo.map((todoel) =>
                <li className="card-list" key={todoel.id}>
                    <input type="text" value={todoel.title} className='list' onChange={(e) => e.preventDefault()} />
                    <div>
                        <button className="btn-complete" onClick={() => handleComplete(todoel)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="btn-complete" onClick={() => handleDelete(todoel)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )}
        </div>
    )
}

