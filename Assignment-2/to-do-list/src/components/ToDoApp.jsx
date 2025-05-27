import React from 'react';
import './ToDoApp.css';

const ToDoApp = ({ studentTasks }) => {
    const onStatusClickHandler = () => {
        alert("clicked");
    };

    return (
        <div className="todo-container">
            <h2>Student Task </h2>
            <ul className="todo-list">
                {studentTasks.map((data, index) => (
                    <li key={index} className={`todo-item ${data.status}`}>

                        <div className="info">
                            <span><strong>subject:</strong> {data.subject}</span>
                            <span><strong>description:</strong> {data.description}</span>
                            <span><strong>dueDate:</strong> {data.dueDate}</span>
                            <span className="status-tag">{data.status}</span>
                        </div>

                        <button onClick={onStatusClickHandler}>
                            {data.status === "pending" ? "Mark as Completed" : "Mark as Pending"}
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;
