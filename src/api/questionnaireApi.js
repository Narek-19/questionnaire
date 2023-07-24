import { questionData } from "constants/staticData";

export const loadQuestionnaireData = () => {
  return new Promise((resolve, reject) => {
    if (questionData) {
      resolve(questionData);
    } else {
      reject(new Error("Something went wrong!"));
    }
  });
};
