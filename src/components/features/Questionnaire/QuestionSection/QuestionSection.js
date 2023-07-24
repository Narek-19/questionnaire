import React, { useState, useContext, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnswerButton from "../AnswerButton/AnswerButton";
import { ThemeContext } from "store/contexts/theme";
import { CustomInputter } from "./CustomInputter/CustomInputter";
import { getQuestionnaire, getSelectedAnswer } from "store/redux/questionnaireSlice/selectors";

import style from "./questionSection.module.scss";
import { setSelectedAnswer } from "store/redux/questionnaireSlice";

const QuestionSection = ({
  disabled,
  questionText,
  answers,
  currentQuestion,
}) => {
  const changeTimer = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const { theme } = useContext(ThemeContext);

  const questionnaireData = useSelector(getQuestionnaire);
  const selectedAnswer = useSelector(getSelectedAnswer);
  
  const submitAnswer = (correctness, selectedId) => {
    setColor(correctness ? "green" : "red");
    const status = correctness
      ? "Congratulations! You answered correctly!"
      : "Unfortunetly,you did not find the correct answer!";
    dispatch(setSelectedAnswer({ id: selectedId, submited: true, submitedStatus: status }));
  };

  const customInputAnswer = (e) => {
    if (!selectedAnswer.submited && !disabled) {
      answers.forEach((el) => {
        if (
          el.answerText.trim().toLowerCase() ===
          e.target.value.trim().toLowerCase()
        ) {
          submitAnswer(el.correctness, el.id);
        }
      });
    }
  };

  useEffect(() => {
    if (selectedAnswer.submited) {
      if (questionnaireData.length !== currentQuestion + 1) {
        const nextQuestion = questionnaireData[currentQuestion + 1];
        changeTimer.current = setTimeout(() => {
          navigate(`/questionnaire/${nextQuestion.linkText}`);
        }, 5000);
      }
    }
    return () => clearTimeout(changeTimer.current);
  }, [selectedAnswer]);

  return (
    <div className={style.questionSection}>
      <h2>{questionText}</h2>
      <div className={style.questionAnswers}>
        {answers?.map((answer) => {
          return (
            <div
              onClick={() => submitAnswer(answer.correctness, answer.id)}
              key={answer.id}
              className={style.question}
            >
              <AnswerButton
                color={answer.id === selectedAnswer.id ? color : theme}
                disabled={
                  selectedAnswer.submited
                    ? answer.id !== selectedAnswer.id
                    : disabled
                }
                answerText={answer.answerText}
              />
            </div>
          );
        })}
      </div>
      {disabled && !selectedAnswer.submited ? (
        <h2>The allowed time for a answer has expired!</h2>
      ) : (
        <h2>{selectedAnswer.submitedStatus}</h2>
      )}
      <div className={style.inputterSection}>
        <CustomInputter
          disabled={disabled || selectedAnswer.submited}
          inputerCallBack={customInputAnswer}
        />
      </div>
    </div>
  );
};

export default QuestionSection;
