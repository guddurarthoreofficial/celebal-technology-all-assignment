import "./App.css";
import ToDoApp from "./components/ToDoApp";

function App() {
  const studentTasks = [
    {
      subject: "Math",
      description: "Solve Exercise 3.2",
      dueDate: "2025-05-28",
      status: "pending",
    },
    {
      subject: "English",
      description: "Essay on Climate Change",
      dueDate: "2025-05-29",
      status: "pendnig",
    },
    {
      subject: "Science",
      description: "Revise Physics Chapter 4",
      dueDate: "2025-05-30",
      status: "completed",
    },
  ];

  return (
    <>
      <ToDoApp studentTasks={studentTasks} />
    </>
  );
}

export default App;
