import React from "react";

import style from "./notFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={style.containerNotFound}>
      <div>
        <div className={style.warningPageIcon}>
          <img src="/images/warning.jpg" alt="warningImg" />
        </div>
        <div className = {style.warningContent}>
          <h2>Something Went Wrong</h2>
          <p>Refresh page or contact with support.</p>
        </div>
      </div>
    </div>
  );
};
