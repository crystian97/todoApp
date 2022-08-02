import { Trash } from "phosphor-react";
import React, { useState } from "react";
import style from "./Task.module.css";
export default function Task({
  content,
  onUpdateTask,
  onDeleteTask,
  task,
  onRemoveTasksFinished
}) {
  const [finished, setFinished] = useState(true);
  function handleFinishedTask() {
    setFinished(!finished);
    // console.log(finished);
  }
  function handleDeleteTask() {
    onDeleteTask(task);
  }
  function handleUpdateTask() {
    // console.log(finished)
    handleFinishedTask();

    task.status=finished
    console.log(task.status)
    onUpdateTask(task)
  }
  function handleDeleteTaskFinished(){
    handleDeleteTask()
    onRemoveTasksFinished()
  }
  return (
    <div className={style.container}>
      <input
        type="checkbox"
        className={style.check}
        onChange={handleUpdateTask}
      />
      <span className={style.content}>{content}</span>
      <button onClick={task.status ==false?handleDeleteTask:handleDeleteTaskFinished} className={style.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
