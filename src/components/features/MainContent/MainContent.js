import React from "react";
import { NavLink } from "react-router-dom";
import style from "./mainContent.module.scss";

export const MainContent = () => {
  return (
    <div className={style.mainContentContainer}>
      <div>
        <h1 className={style.mainHeader}>Welcome to Epic Questionnaire</h1>
        <div className={style.buttonContainer}>
          <div className={style.button}>
            <NavLink to="questionnaire/question1">Start</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
