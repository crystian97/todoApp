import React, { useState } from "react";
import Logo from "../assets/Logo";
import { PlusCircle } from "phosphor-react";
import style from "./Header.module.css";
import Swal from "sweetalert2";

export default function Header({ handleTasks }) {
  const [taskOnChange, setTaskOnChange] = useState("");
  function handleTaskOnChange() {
    setTaskOnChange(event.target.value);
  }
  // console.log(taskOnChange);
  function createNewTask() {
    handleTaskOnChange();
    // console.log(taskOnChange.length);

    event.preventDefault();
    if (typeof taskOnChange == "undefined") {
      Swal.fire({
        title: "Erro!",
        text: "Não é possível adicionar uma tarefa vazia",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      handleTasks(taskOnChange);
      event.target.task.value = "";
    }
  }
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
      </header>
      <div className={style.formGroup}>
        <form onSubmit={createNewTask} className={style.formStyle}>
          <input
            type="text"
            name="task"
            onChange={handleTaskOnChange}
            id="task"
          />
          <button className={style.createButton}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>
    </>
  );
}
