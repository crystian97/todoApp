import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksCreated, setTasksCreated] = useState(0);
  function addTasksCreated() {
    setTasksCreated((tasksCreated) => {
      return tasksCreated + 1;
    });
  }
  function handleTasks(task) {
    setTasks((tasks) => {
      const newTask = {
        id: Date.now(),
        content: task,
        status: false,
      };
      addTasksCreated();
      return [...tasks, newTask];
    });
  }

  function updateTaskStatus(tasks, id, status) {
    tasks.map((task) => {
      if (tasks.id === id) {
        task.status = status;
      }
    });
  }

  return (
    <div className={style.wrapper}>
      <Header handleTasks={handleTasks} />
      <Home
        tasks={tasks}
        tasksCreated={tasksCreated}
        updateTaskStatus={updateTaskStatus}
      />
    </div>
  );
}

export default App;
