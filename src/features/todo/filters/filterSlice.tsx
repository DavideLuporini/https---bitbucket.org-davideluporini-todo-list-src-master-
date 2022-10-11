import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./filters";

const initialState: Filters = { searchText: "" };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCompletedFilter(state, action: PayloadAction<boolean>) {
      state.completed = action.payload;
    },
  },
});

export const { setCompletedFilter } = filterSlice.actions;

export default filterSlice.reducer;
