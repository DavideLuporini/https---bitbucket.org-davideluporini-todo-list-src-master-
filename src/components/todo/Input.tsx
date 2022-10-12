import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  toggleCompleted,
} from "../../features/todo/todosSlice";

import { setCompletedFilter } from "../../features/todo/filters/filterSlice";

import "./style/input.css";
import { create } from "domain";
import ButtonAdd from "../buttons/ButtonAdd";

export const Input = () => {
  const [input, setInput] = useState<string>("");
  const [tag, setTag] = useState<string>("no tag");
  const todo = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  function handleChangeInput(event: any) {
    setInput(event);
  }
  function handleChangeTag(tag: any) {
    setTag(tag);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo({ text: input, tag: tag }));
    setInput("");
    setTag("");
    console.log(completedTask(todo));
  };

  // dichiaro una costante con le task dal riduttore

  let selectShopItems = (state: any) => state.todo.todos;

  console.log(selectShopItems);
  const completedTask = createSelector(selectShopItems, (items) => {
    items.filter((task: any) => task.completed);
  });

  const handleCompleted = (input: boolean) => {
    dispatch(setCompletedFilter(input));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter text"
          value={input}
          type="text"
          onChange={(e) => handleChangeInput(e.target.value)}
          required
        />
        <select
          placeholder="enter text"
          value={tag}
          onChange={(e) => handleChangeTag(e.target.value)}
          required
        >
          <option value="no tag">no tag</option>
          <option value="calcio">calcio</option>
          <option value="programmazione">programmazione</option>
          <option value="finanza">finanza</option>
        </select>
        <ButtonAdd handleSubmit={handleSubmit} />
      </form>

      {/* <button onClick={() => handleCompleted(true)}>show completed</button>
      <button onClick={() => handleCompleted(false)}>show unclompleted</button>
      <button>show all</button> */}

      <button>undo</button>
    </>
  );
};

export default Input;
