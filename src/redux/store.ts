import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import quizSlice from '../slices/quiz/quizeSlice';

export const store = configureStore({
  reducer: {
    quizzes: quizSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
