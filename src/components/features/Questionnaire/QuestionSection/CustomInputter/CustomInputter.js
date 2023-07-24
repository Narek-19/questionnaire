import React from "react";

import style from "./customInputer.module.scss";

export const CustomInputter = ({ value, inputerCallBack,disabled }) => {
  return (
    <>
      <div className={style.CustomInputter}>
        <input
          placeholder="Custom Input Answer"
          disabled={disabled}
          value={value}
          onChange={inputerCallBack}
        />
      </div>
    </>
  );
};
