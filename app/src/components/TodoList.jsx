import React from "react";
import Task from "./Task";

const TodoList = ({ tasks, handler }) => {
  const tl = tasks && tasks.map ? tasks : [];
  return (
    <span className="Todo">
      {tl.map(t => (
        <Task key={t.id} info={t} handler={handler} />
      ))}
    </span>
  );
};

export default TodoList;
