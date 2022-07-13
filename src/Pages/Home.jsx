import React from "react";
import Empty from "../assets/Empty";
import Task from "../components/Task";
import style from "./Home.module.css";
export default function Home({ tasks, tasksCreated, updateTasks }) {
  // updateTaskStatus();

  function handleDeleteTask(taskToDelete) {
    const tasksWithoutDeleted = tasks.filter((t) => {
      return t !== taskToDelete;
    });
    updateTasks(tasksWithoutDeleted);
  }
  return (
    <main className={style.home}>
      <header className={style.dashTasks}>
        <div id={style.tasksCreated}>
          <span>Tarefas criadas</span>
          <span className={style.counter}>{tasksCreated}</span>
        </div>
        <div id={style.tasksCompleted}>
          <span>Concluidas </span>
          <span className={style.counter}>0</span>
        </div>
      </header>
      <div className={style.content}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
               
                content={task.content}
                status={false}
                task={task}
                onDeleteTask={handleDeleteTask}
              />
            );
          })
        ) : (
          <div className={style.emptyNotification}>
            <Empty />
            <span>
              <strong> Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
