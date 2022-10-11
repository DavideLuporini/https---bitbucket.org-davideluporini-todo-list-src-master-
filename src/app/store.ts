import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todosSlice from "../features/todo/todosSlice";
import filterSlice from "../features/todo/filters/filterSlice";

export const store = configureStore({
  reducer: {
    todo: todosSlice,
    filters: filterSlice,
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
