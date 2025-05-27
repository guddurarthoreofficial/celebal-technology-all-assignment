import React from "react";

const ToDoApp = ({ tasks, toggleStatus, removeTask }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task-card ${task.status === "completed" ? "completed" : "pending"}`}
        >
          <p><strong>Subject:</strong> {task.subject}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>DueDate:</strong> {task.dueDate}</p>
          <p className="status">{task.status}</p>
          <div className="buttons">
            <button onClick={() => toggleStatus(index)}>
              Mark as {task.status === "pending" ? "Completed" : "Pending"}
            </button>
            <button onClick={() => removeTask(index)} className="delete">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDoApp;
