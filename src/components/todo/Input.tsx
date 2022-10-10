import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleCompleted,
} from "../../features/todo/todosSlice";

import "./style/input.css";

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
  };

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
    // dovrò fare lo slice mettendo come action la i , che rappresenta la posizione da cui eliminare la todo
  };
  const handleToggle = (id: number) => {
    dispatch(toggleCompleted(id));
    // dovrò fare lo slice mettendo come action la i , che rappresenta la posizione da cui eliminare la todo
  };

  // useEffect(() => {
  //   setInput(input);
  // }, [input]);

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
        <button onClick={() => handleSubmit} type="submit">
          aggiungi
        </button>
      </form>

      <ul>
        {todo.map((singleTodo: any, i: number) => (
          <>
            <li key={singleTodo.id}>
              {" "}
              <span
                onClick={() => handleToggle(singleTodo.id)}
                className={
                  singleTodo.completed ? "completato" : "non_completato"
                }
              >
                {singleTodo.text}
              </span>
              <span>{singleTodo.tag}</span>
            </li>
            <button onClick={() => handleRemove(singleTodo.id)}>remove</button>
          </>
        ))}
      </ul>

      <button>undo</button>
    </>
  );
};

export default Input;
