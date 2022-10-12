import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../../features/todo/todosSlice";

const TaskList = () => {
  const todo = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
    // dovrò fare lo slice mettendo come action la i , che rappresenta la posizione da cui eliminare la todo
  };
  const handleEdit = (id: number) => {
    // dispatch(removeTodo(id));
    // dovrò fare lo slice mettendo come action la i , che rappresenta la posizione da cui eliminare la todo
  };
  const handleToggle = (id: number) => {
    dispatch(toggleCompleted(id));
    // dovrò fare lo slice mettendo come action la i , che rappresenta la posizione da cui eliminare la todo
  };
  return (
    <>
      <ul>
        {todo.map((singleTodo: any) => (
          <>
            <li key={singleTodo.id}>
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
            <button onClick={() => handleEdit(singleTodo.id)}>Edit</button>
            <button onClick={() => handleRemove(singleTodo.id)}>remove</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
