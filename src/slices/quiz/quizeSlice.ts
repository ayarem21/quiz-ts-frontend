import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizzesInterface } from '../../interfaces/quiz/quizzesInterface';
import quizAPI from '../../api/quiz/quizAPI'
import { QuizInterface } from '../../interfaces/quiz/quizInterface';

const initialState: QuizzesInterface = {
    quizzes: [],
    isPending: false
};

export const fetchQuizzesAsync = createAsyncThunk(
  'quiz/fetchQuizzes',
  async () => {
    const response = await quizAPI.getAllQuizzes();
    return response.data;
  }
);

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuiz(state, action: PayloadAction<QuizInterface>) {
      let quiz = {
        title: action.payload.title,
        description: action.payload.description,
        isArchived: action.payload.isArchived
      }
      state.quizzes = [...state.quizzes, quiz];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzesAsync.pending, (state) => {
        state.isPending = true;
      })
    builder
      .addCase(fetchQuizzesAsync.fulfilled, (state, action) => {
        state.quizzes = action.payload;
        state.isPending = false;
      })
  },
});

 
export default quizSlice.reducer;

export const { addQuiz } = quizSlice.actions; 