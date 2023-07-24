import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LogoLoader } from "assets/images/reactLogo.svg";
import QuestionSection from "components/features/Questionnaire/QuestionSection/QuestionSection";
import {
  getDisableSubmit,
  getFetchingStatus,
  getQuestionnaire,
} from "store/redux/questionnaireSlice/selectors";
import { loadQuestionnaire } from "store/redux/questionnaireSlice";

import style from "./questionnaire.module.scss";
import {
  setFetchingStatus,
  setSelectedAnswer,
  setAnswerDisabledStatus,
} from "store/redux/questionnaireSlice/index";

const Questionnaire = () => {
  const timerId = useRef();
  let { routeId } = useParams();

  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionnaireData = useSelector(getQuestionnaire);
  const fetchingStatus = useSelector(getFetchingStatus);
  const disabled = useSelector(getDisableSubmit);

  const disableSubmiting = () => {
    dispatch(setAnswerDisabledStatus(true))
  };

  const cleartimerIdTimeout = () => {
    clearTimeout(timerId.current);
  };

  useEffect(() => {
    cleartimerIdTimeout(timerId.current);
    dispatch(setSelectedAnswer({ id: null, submited: false, submitedStatus: "" }));
    dispatch(setAnswerDisabledStatus(false))
    timerId.current = setTimeout(disableSubmiting, 10000);
  }, [routeId]);

  useEffect(() => {
    const currentQuestion = questionnaireData.findIndex(
      (el) => el.linkText === routeId
    );
    setCurrentQuestion(currentQuestion);
  }, [routeId, questionnaireData]);

  useEffect(() => {
    dispatch(
      setFetchingStatus({
        isLoading: true,
      })
    );
    setTimeout(() => {
      dispatch(loadQuestionnaire());
    }, 2000);
  }, []);

  return (
    <div className={style.content}>
      <div className={style.questionContainer}>
        {fetchingStatus.isLoading ? (
          <div className={style.logoLoader}>
            <LogoLoader />
          </div>
        ) : (
          <>
            {fetchingStatus.successFetched && (
              <QuestionSection
                questionText={questionnaireData[currentQuestion]?.questionText}
                answers={questionnaireData[currentQuestion]?.answers}
                disabled={disabled}
                setCurrentQuestion={setCurrentQuestion}
                currentQuestion={currentQuestion}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
