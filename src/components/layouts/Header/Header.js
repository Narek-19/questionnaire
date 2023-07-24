import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "assets/images/reactLogo.svg";
import { Switcher } from "components/common/Switcher/Switcher";
import { ThemeContext } from "store/contexts/theme";
import { questionData } from "constants/staticData";
import { ROUTES } from "constants/routes";

import style from "./header.module.scss";
import { setFetchingStatus, setSelectedAnswer, setAnswerDisabledStatus } from "store/redux/questionnaireSlice";
import { loadQuestionnaire } from "store/redux/questionnaireSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [switcherValue, setSwitcherValue] = useState("");
  const [navLinks, setNavLinks] = useState(null);
  const context = useContext(ThemeContext);

  const changeSwitcher = () => {
    setSwitcherValue((_prevState) => !_prevState);
  };
  useEffect(() => {
    const color = switcherValue ? "gray" : "";
    context.toggleTheme(color);
  }, [switcherValue]);

  const updateQuestionnaireData =()=>{
    dispatch(
      setFetchingStatus({
        isLoading: true,
      })
    );
    dispatch(setAnswerDisabledStatus(false));
    dispatch(setSelectedAnswer({ id: null, submited: false, submitedStatus: "" }));
    setTimeout(() => {
      dispatch(loadQuestionnaire());
    }, 2000);
  }

  useEffect(() => {
    const linkData = questionData.map((el) => {
      return {
        id: el.id,
        linkText: el.linkText,
        title: el.questionText,
      };
    });
    setNavLinks(linkData);
  }, [questionData]);

  return (
    <div className={style.header}>
      <div
        className={style.logoContainer}
        onClick={() => navigate(ROUTES.home)}
      >
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.logoTitle}>
          <h1>Questionnaire</h1>
        </div>
      </div>
      <div className={style.navTitleContainer}>
        <div className={style.navTitles}>
          {navLinks?.map((route) => {
            return (
              <NavLink key={route.id} to={`questionnaire/${route.linkText}`}>
                {({ isActive }) => (
                  <div
                    className={`${style.navLink}${" "}${
                      isActive ? style.activeLink : ""
                    }`}
                  >
                    {route.title}
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
        <div className={style.resetButtonContainer}>
          <div className={style.switcher} onClick={() => changeSwitcher()}>
            <Switcher switcherValue={switcherValue} />
          </div>
          <button onClick={updateQuestionnaireData} className={style.resetBtn}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
