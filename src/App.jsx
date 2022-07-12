import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  function handleTasks(task) {
    setTasks((tasks) => {
      const newTask = {
        content: task,
        finished: false,
      };
      return [...tasks, newTask];
    });
  }

  console.log(tasks);
  return (
    <div className={style.wrapper}>
      <Header handleTasks={handleTasks} />
      <Home tasks={tasks} />
    </div>
  );
}

export default App;
