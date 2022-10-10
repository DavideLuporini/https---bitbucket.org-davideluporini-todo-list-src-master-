import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./filters";

const initialState: Filters = {
  input: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // addTodo(state, action: PayloadAction<any>) {
    //   console.log(action.payload);
    //   const todo: Todo = {
    //     text: action.payload.text,
    //     completed: false,
    //     id: state.currentId,
    //     tag: action.payload.tag,
    //   };
    //   state.currentId++;
    //   state.todos.push(todo);
    // },
    filterXTag() {},
  },
});

export const { filterXTag } = filterSlice.actions;

export default filterSlice.reducer;
