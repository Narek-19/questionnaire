export const getQuestionnaire = (state) => {
  return state.questionnaire.questionnaireData;
};

export const getFetchingStatus = (state) => {
  return state.questionnaire.fetchingStatus;
};

export const getSelectedAnswer = (state) => {
  return state.questionnaire.selectedAnswer;
};

export const getDisableSubmit = (state) => {
  return state.questionnaire.disableSubmit;
};
