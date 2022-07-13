import { TrashSimple } from "phosphor-react";
import React, { useState } from "react";
import style from "./Task.module.css";
export default function Task({ content, status }) {
  const [finished, setFinished] = useState(status);
  function handleFinishedTask() {
    setFinished(!finished);
    console.log("finished");
  }

  return (
    <div className={style.container}>
      <input
        type="checkbox"
        value={finished}
        className={style.check}
        onChange={handleFinishedTask}
      />
      <span className={style.content}>{content}</span>
      <button className={style.deleteButton}>
        <TrashSimple />
      </button>
    </div>
  );
}
