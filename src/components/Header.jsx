import React from "react";
import Logo from "../assets/Logo";
import { Plus, PlusCircle } from "phosphor-react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
      </header>
      <div className={style.formGroup}>
        <form className={style.formStyle}>
          <input type="text" name="" id="task" />
          <button className={style.createButton}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>
    </>
  );
}
