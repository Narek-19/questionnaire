import React, { Suspense } from "react";

import style from "./modal.module.scss";

const Modal =({ open, toggleModal, imagesList })=> {
    const Image = React.lazy(() => import("../Image/Image"));
    if (open) {
      return (
        <div className={style.container}>
          <div className={style.mainContainer}>
            <div onClick={() => toggleModal(false)} className={style.closeBtn}>
              &#x2613;
            </div>
            <div className={style.modalContent}>
              <Suspense fallback={<div>LogoLoader...</div>}>
                {imagesList.map((img) => {
                  return <Image key={img.id} src={img.src} alt={img.alt} />;
                })}
              </Suspense>
            </div>
          </div>
        </div>
      );
    }
  }

export default Modal;
