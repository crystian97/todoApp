import React from "react";
import Empty from "../assets/Empty";
import style from "./Home.module.css";
export default function Home({ tasks }) {
  return (
    <main className={style.home}>
      <header className={style.dashTasks}>
        <div id={style.tasksCreated}>
          <span>Tarefas criadas</span>
          <span className={style.counter}>0</span>
        </div>
        <div id={style.tasksCompleted}>
          <span>Concluidas </span>
          <span className={style.counter}>0</span>
        </div>
      </header>
      <div className={style.content}>
        {tasks.length > 0 ? (
          <div>tasks</div>
        ) : (
          <div className={style.emptyNotification}>
            <Empty />
            <span>
              <strong> Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e
              organize seus itens a fazer
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
