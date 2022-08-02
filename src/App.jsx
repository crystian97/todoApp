import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksFinished, setTasksFinished] = useState(0);
  const [tasksCreated, setTasksCreated] = useState(0);
  function addTasksCreated() {
    setTasksCreated((tasksCreated) => {
      return tasksCreated + 1;
    });
  }
  function removeTasksCreated() {
    setTasksCreated((tasksCreated)=>{
      return tasksCreated - 1;
    })
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
  function addTasks(newTask) {
    setTasks(newTask);
    
  }
 function updateTasks(tasks){
  return setTasks(tasks)
 }
  function updateStatusTasks(task) {
    if (task.status === true) {
      setTasksFinished((t) => {
        return t + 1;
      });
    } else {
      setTasksFinished((t) => {
        return t - 1;
      });
    }
  }
  return (
    <div className={style.wrapper}>
      <Header handleTasks={handleTasks} />
      <Home
        tasks={tasks}
        tasksCreated={tasksCreated}
        removeTasksCreated={removeTasksCreated}
        updateStatusTasks={updateStatusTasks}
        updateTasks={updateTasks}
        tasksFinished={tasksFinished}
        addTasks={addTasks}
        handleTasks={handleTasks}
      />
    </div>
  );
}

export default App;
