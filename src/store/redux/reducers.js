import { combineReducers } from "@reduxjs/toolkit";
import questionnaireSlice from "./questionnaireSlice";

const Reducer = combineReducers({
  questionnaire: questionnaireSlice,
});

export default Reducer;
