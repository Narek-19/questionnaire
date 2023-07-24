import React from "react";

import style from "./answerButton.module.scss";

const AnswerButton = ({ disabled, answerText, color }) => {
  return (
    <button
      style={{ backgroundColor: color, color: color ? "white" : "" }}
      className={style.button}
      disabled={disabled}
    >
      {answerText}
    </button>
  );
};

export default AnswerButton;
