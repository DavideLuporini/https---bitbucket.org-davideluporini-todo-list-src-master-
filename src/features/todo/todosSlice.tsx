import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./filters/filters";
import { Todo } from "./todo";

interface TodosState {
  todos: Todo[]; //che tipo ci metteresti qua
  currentId: number;
  filters?: Filters[];
}

const initialState: TodosState = {
  todos: [], //che tipo ci metteresti qua?
  currentId: 0,
  filters: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<any>) {
      console.log(action.payload);
      const todo: Todo = {
        text: action.payload.text,
        completed: false,
        id: state.currentId,
        tag: action.payload.tag,
      };
      state.currentId++;
      state.todos.push(todo);
    },
    removeTodo(state, action: PayloadAction<number>) {
      const indexOfObject = state.todos.findIndex((object) => {
        return object.id === action.payload;
      });

      state.todos.splice(indexOfObject, 1);
    },

    toggleCompleted(state, action: PayloadAction<number>) {
      const indexOfObject = state.todos.findIndex((object) => {
        return object.id === action.payload;
      });
      state.todos[indexOfObject].completed =
        !state.todos[indexOfObject].completed;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
