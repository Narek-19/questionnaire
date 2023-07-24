import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadQuestionnaireData } from "api/questionnaireApi";

const initialState = {
  questionnaireData: [],
  fetchingStatus: {},
  selectedAnswer: { id: null, submited: false, submitedStatus: "" },
  disableSubmit: false,
};

export const loadQuestionnaire = createAsyncThunk(
  "questionnaire/fetchQuestionnaire",
  async (value) => {
    const data = await loadQuestionnaireData();
    return data;
  }
);

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setFetchingStatus: (state, action) => {
      state.fetchingStatus = {
        ...state.fetchingStatus,
        ...action.payload,
      };
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = { ...state.selectedAnswer, ...action.payload };
    },
    setAnswerDisabledStatus: (state, action) => {
      state.disableSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestionnaire.pending, (state) => {})
      .addCase(loadQuestionnaire.fulfilled, (state, action) => {
        state.questionnaireData = action.payload;
        state.fetchingStatus = {
          ...state.fetchingStatus,
          isLoading: false,
          successFetched: true,
          fetchStatus: "Success",
        };
      })
      .addCase(loadQuestionnaire.rejected, (state, action) => {
        state.fetchingStatus = {
          ...state.fetchingStatus,
          isLoading: false,
          successFetched: false,
          fetchStatus: "error",
        };
      });
  },
});

export const {
  setQuestionnaire,
  setFetchingStatus,
  setSelectedAnswer,
  setAnswerDisabledStatus,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
