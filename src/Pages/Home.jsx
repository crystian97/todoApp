import React from "react";
import Empty from "../assets/Empty";
import Task from "../components/Task";
import style from "./Home.module.css";
export default function Home({
  tasks,
  tasksCreated,
  updateTasks,
  tasksFinished,
  addTasks,
  
  updateStatusTasks,
  removeTasksCreated,
  removeTasksFinished
}) {
  // updateTaskStatus();

  function handleDeleteTask(taskToDelete) {
    console.log(taskToDelete);
    const tasksWithoutDeleted = tasks.filter((t) => {

      return t !== taskToDelete;
    });
    updateTasks(tasksWithoutDeleted);
    removeTasksCreated()

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
          <span className={style.counter}>{tasksFinished}</span>
        </div>
      </header>
      <div className={style.content}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                content={task.content}
                task={task}
                onDeleteTask={handleDeleteTask}
                onUpdateTask={updateStatusTasks}
                onRemoveTasksFinished={removeTasksFinished}
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
