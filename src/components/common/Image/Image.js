import React from "react";

import style from "./image.module.scss";

const Image = ({ src, alt }) => {
  return (
    <div className={style.imgContainer}>
      <img alt={alt} src={src} />
    </div>
  );
};
export default Image;
