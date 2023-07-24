import React, { useState } from "react";

import { ReactComponent as Logo } from "assets/images/reactLogo.svg";
import Modal from "components/common/Modal/Modal";

import style from "./footer.module.scss";

const imagesList = [
  { id: "0", src: "/images/reactlogoblack.png", alt: "react black logo" },
  { id: "1", src: "/images/resize-image.png", alt: "react resize logo" },
  { id: "2", src: "/images/PhasesReactLifeCycle.png", alt: "react black logo" },
  { id: "3", src: "/images/react_hooks_final.png", alt: "React Black logo" },
];
const Footer =()=> {
  const [questionnaireModalOpen, setQuestionnaireModalOpen] = useState(false);
 
 const  toggleQuestionnairModal = (value) => {
    setQuestionnaireModalOpen(value);
  };

    return (
      <div className={style.footer}>
        <div className={style.footerLogoContainer}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.logoTitle}>
            <h3>2023 React Course</h3>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button onClick={() => toggleQuestionnairModal(true)}>
            View the Entire Questionnaire
          </button>
        </div>
        <Modal
          imagesList={imagesList}
          toggleModal={toggleQuestionnairModal}
          open={questionnaireModalOpen}
        />
      </div>
    );
  }

export default Footer;
