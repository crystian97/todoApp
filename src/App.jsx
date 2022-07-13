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
  function updateTasks(newTasks) {
    setTasks(newTasks);
    setTasksCreated((t) => {
      return t - 1;
    });
  }
  function updateStatusTasks(task) {
    
  }
  return (
    <div className={style.wrapper}>
      <Header handleTasks={handleTasks} />
      <Home
        tasks={tasks}
        tasksCreated={tasksCreated}
        updateTasks={updateTasks}
      />
    </div>
  );
}

export default App;
