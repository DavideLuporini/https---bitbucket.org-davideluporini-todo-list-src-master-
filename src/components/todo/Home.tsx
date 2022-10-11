import React from "react";
import Input from "./Input";
import TaskList from "./TaskList";

const Home = () => {
  return (
    <>
      <h1>Todo List</h1>
      <Input />
      <TaskList />
    </>
  );
};

export default Home;
