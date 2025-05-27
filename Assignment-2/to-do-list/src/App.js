import React, { useState, useEffect } from "react";
import ToDoApp from "./components/ToDoApp";
import TaskForm from "./components/TaskForm";
import "./styles/ToDoApp.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("none");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("studentTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "pending" ? "completed" : "pending";
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = [...tasks];

    if (filter !== "all") {
      filteredTasks = filteredTasks.filter((task) => task.status === filter);
    }

    if (sortBy === "subject-asc") {
      filteredTasks.sort((a, b) => a.subject.localeCompare(b.subject));
    } else if (sortBy === "subject-desc") {
      filteredTasks.sort((a, b) => b.subject.localeCompare(a.subject));
    } else if (sortBy === "date-asc") {
      filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortBy === "date-desc") {
      filteredTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    return filteredTasks;
  };

  return (
    <div className="app">
      <h1>Student Task</h1>
      <TaskForm addTask={addTask} />

      <div className="controls">
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label>
          Sort:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">None</option>
            <option value="subject-asc">Subject A-Z</option>
            <option value="subject-desc">Subject Z-A</option>
            <option value="date-asc">Date ↑</option>
            <option value="date-desc">Date ↓</option>
          </select>
        </label>
      </div>

      <ToDoApp
        tasks={getFilteredAndSortedTasks()}
        toggleStatus={toggleStatus}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
