import { Trash } from "phosphor-react";
import React, { useState } from "react";
import style from "./Task.module.css";
export default function Task({ content, status, onDeleteTask, task }) {
  const [finished, setFinished] = useState(status);
  function handleFinishedTask() {
    setFinished(!finished);
    console.log("finished");
  }
  function handleDeleteTask() {
    onDeleteTask(task);
  }
  return (
    <div className={style.container}>
      <input
        type="checkbox"
        className={style.check}
        onChange={handleFinishedTask}
      />
      <span className={style.content}>{content}</span>
      <button onClick={handleDeleteTask} className={style.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
