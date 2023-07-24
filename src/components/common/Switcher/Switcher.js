import React from "react";

import style from "./switcher.module.scss";

export const Switcher = ({switcherValue}) => { 
  return (
    <>
      <div className={style.switcher}>
        <div
          className={switcherValue ? style.buttonActive : style.buttonDisabled}
        ></div>
      </div>
    </>
  );
};
