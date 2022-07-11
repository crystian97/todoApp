import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  return (
    <div className={style.wrapper}>
      <Header />
      <Home tasks={tasks} />
    </div>
  );
}

export default App;
